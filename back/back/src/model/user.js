const collection = require( '../utilities/connection' );
// mongoose.set('useCreateIndex', true);
let user = {}

// create function to check if entered credentials are correct
user.userLogin = ( uEmail, uPass ) => {
    return collection.getCollection().then( userColl => {
        return userColl.find( { "uCredentials.uEmail": uEmail } ).then( data => {
            if( data.length === 1 ) {
                if( uPass == data[0]['uCredentials']['uPass'] ) {
                    return userColl.updateOne( { "uCredentials.uEmail": uEmail }, { $set: { "uProfile.uLastLogin": new Date().toISOString() } } ).then( res => {
                        if( res.nModified === 1 ) {
                            return data
                        }
                    } )
                } else{
                    let err = new Error( "The password entered is incorrect!!" );
                    err.status = 401;
                    throw err;
                }
            } else{
                let err = new Error( "Invalid credentials" );
                err.status = 200;
                throw err;
            }
        } )
    } )
}

//create function to display products desired by user
user.retriveProducts = ( pcategory ) => {

    return collection.getProductsCollection().then( prod => {
        return prod.find( { "pCategory": pcategory , "pSeller.pQuantity": { $gt: 0 }} ).then( data => {
            if( data.length < 0 ) {
                let err = new Error( "No products with that category" );
                err.status = 404;
                throw err;
            }
            else{
                data.statusCode = 200;
                return data;
            }
        } )
    } )
}
//create function to add products to cart
user.appendCart = ( cart ) => {
    return collection.getCartCollection().then( prod => {
    
        return prod.updateOne( { $and: [{ "sId": cart.sId }, { "productId": cart.productId }, {"userId": cart.userId}] }, { $inc: { "pQuantity": + cart.pQuantity } } ).then( ( updated ) => {
            if( updated.nModified>0 )
            {
                return cart;
            }
            else
            {
                return prod.create( cart ).then( data => {
                     return data;
                 } ).catch( err => `Failed to insert item: ${err}` )
            }
        } )
        
    } )
}
//create a method to display cart items user specific
user.retriveCart = ( userId ) => {
    return collection.getCartCollection().then( prod => {
        return prod.find( { "userId": userId } ).then( data => {
            if( data.length <= 0 ) {
               
               return null;
            }
            else{
                return data;
            }
        } )
    } )
}
user.appendUser = ( user ) => {
    return collection.getCollection().then( data => {
        return data.create( user ).then( ( res ) => {
            return res.userId;
        } ).catch( err =>  `Failed to insert item: ${err}` )
    } )
}

//create function to delete order user do not want to purchase
user.deletecartdata = ( order )=>{
    return collection.getCartCollection().then( ( cartdata )=>{
        return cartdata.findOne( { $and: [{"userId": order.userId},{"productId": order.productId},{"sId": order.sId}]} ).then( ( data )=>{
                if( data==null )
                {
                    return false;
                }
                else
               {
                   return cartdata.deleteOne( { $and: [{"userId": order.userId},{"productId": order.productId},{"sId": order.sId}]} ).then( ( deleted )=>{
                       if( deleted.n>0 )
                       {
                           return true;
                       }
                       else
                       return false;
                   } )
               }
        } ).catch( ( err )=>{
            `Failed to find item: ${err}`
        } )
    } ).catch( ( err )=>{
        `Failed to find item: ${err}`
    } )
}

user.appendvieworder = ( order ) => {
    return collection.getCartCollection().then( cartdata => {
         return cartdata.findOne( { $and: [{ "userId": order.userId }, { "productId": order.productId }] } ).then( () => {
            return cartdata.deleteOne( { $and: [{ "userId": order.userId }, { "productId": order.productId }] } ).then( ( deleteRecord ) => {
                if( deleteRecord.deletedCount > 0 ) {
                    return collection.getProductsCollection().then( ( product ) => {
                        return product.findOne( { $and: [{ "pSeller.sId": order.sId }, { "_id": order.productId }] } ).then( ( detail ) => {
                            if( detail!=null ){
                            if( detail.pSeller.pQuantity >= order.pQuantity ) {
                                return product.updateOne( { $and: [{ "pSeller.sId": order.sId }, { "_id": order.productId }] }, { $inc: { "pSeller.pQuantity": -order.pQuantity } } ).then( ( updated ) => {
                                    if( updated.nModified > 0 ) {
                                        return collection.getvieworderCollection().then( vieworderdata => {

                                            return vieworderdata.updateOne( { $and: [{ "sId": order.sId }, { "productId": order.productId }, {"userId": order.userId}] }, { $inc: { "pQuantity": + order.pQuantity } } ).then( ( updated ) => {
                                              
                                                if( updated.nModified>0 )
                                                {
                                                 
                                                    return true;
                                                }
                                                else
                                                {
                                                    return vieworderdata.create( order ).then( ( res ) => {
                                                
                                                        return res;
                                                    } ).catch( ( err ) => {   
                                                        `Failed to insert item: ${err}`                                           
                                                    } )
                                                }
                                            } )
                                        } )
                                    }
                                    else{
                                        let err = new Error( "could not process your request" );
                                        err.status = 407;
                                       
                                        throw err;
                                    }

                                } )
                            }
                            else
                            {
                                let err = new Error( "quantity left is lesser than you selected" );
                                err.status=408;
    
                                throw err;
                            }
                        }
                            else
                            {
                                let err = new Error( "product not in database" );
                                err.status=409;
                    
                                throw err;
                            }
                        } )
                    } )
                }
                else{
                    let err = new Error( "could not update delete cart and update view order" );
                    err.status = 406;
                    throw err;
                }
            } )
        } )  
    } )
}

//view order history and display appropriate msg
user.vieworder = ( userId ) => {
    return collection.getvieworderCollection().then( order => {
        return order.find( { "userId": userId } ).then( data => {
          
            if( data.length <= 0 ) {
                let err = new Error( `No Previous orders for that ${userId}` );
                err.status = 404;
                throw err;
            }
            else{
                return data;
            }
        } )
        } ).catch( err =>  `Failed to insert item: ${err}` )
    }
//to display available no of products of particular seller
user.getsellerquantity=( pid,sid )=>{
    return collection.getProductsCollection().then( prod=>{
        return prod.findOne( {$and: [{ "pSeller.sId": sid} ,{"_id": pid}]} ).then( data => {
             if( data.length < 0 ) {
                 let err = new Error( "No products with that category" );
                 err.status = 404;
                 throw err;
             }
             else{
                 return data.pSeller.pQuantity;
             }
         } )
    } )
}
//method to search for the desired products
user.searchProduct=()=>{
    return collection.getProductsCollection().then( data=>{
        return data.find().then( ( res )=>{
            return res;
        } ).catch( err => `Failed to fetch products: ${err}` ) 
    } )
}
module.exports = user