const dbLayer = require( '../model/user' );
// mongoose.set('useCreateIndex', true);

let user = {}
// function to check authenticity of user
user.loginUser = ( uEmail,pass ) => {
    return dbLayer.userLogin( uEmail,pass ).then( response => {
        return response
    } )
}
//to search the product
user.searchProduct=( prodname )=>{
    return dbLayer.searchProduct( prodname ).then( response=>{
        return response;
    } )
}

// user.sellerLogin=( sEmail,sPass )=>{
//     return dbLayer.sellerLogin( sEmail,sPass ).then( response => {
//         return response
//     } )
// }

//to add products in cart
user.addProduct=( product )=>{
    return dbLayer.addProduct( product ).then( response=>{
        return response} )
}
// to product
user.getProducts=( sId )=>{
    return dbLayer.getProducts( sId ).then( response =>{
        return response
    } )
}

//to display product category on toobar
user.retriveProducts = ( pcategory )=>{
    return dbLayer.retriveProducts( pcategory ).then( response =>{
        return response
    } )
}
// to add products into cart 
user.appendCart=( cart )=>{
    return dbLayer.appendCart( cart ).then( response=>{
        return response
    } )
}
//retreive the products user specific
user.retriveCart=( userId )=>{
    return dbLayer.retriveCart( userId ).then( response=>{
        return response;
    } )
}

user.appendUser=( user )=>{
    return dbLayer.appendUser( user ).then( response=>{
        return response;
    } )
}
// user.appendSeller=( seller )=>{
//     return dbLayer.appendSeller( seller ).then( response=>{
//         return response;
//     } )
// }

user.appendvieworder=( orders )=>{
   let chain = Promise.resolve();
   for( let i=0; i<orders.length; i++ ) {
    chain = chain.then( ()=>dbLayer.appendvieworder( orders[i] ) )
 
 }
 return chain.then( ()=>{return true} )
}
user.getsellerquantity=( sellerdata )=>{
 
var promises = [];

for( var i = 0; i < sellerdata.length; i++ ) {
    var pid=sellerdata[i].productId;
    var sid=sellerdata[i].sId;
	var promise = dbLayer.getsellerquantity( pid,sid ).then( response=>{

        return response;
    } )
	promises.push( promise );
}
return Promise.all( promises ).then( ( doSomethingAfterAllRequests )=>{
    return doSomethingAfterAllRequests;
} )

    return dbLayer.getsellerquantity( pid,sid ).then( response=>{
        return response;
    } )
}
//to view order of particular user
user.vieworder=( userId )=>{
    return dbLayer.vieworder( userId ).then( response=>{
        return response;
    } )
}
//delete cart data

user.deletecartdata=( order )=>{
    return dbLayer.deletecartdata( order ).then( ( response )=>{
        return response;
    } )
}
module.exports = user