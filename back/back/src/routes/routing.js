const express=require( 'express' );
const routing = express.Router();
const service = require( '../service/user' );
const Cart=require( "../model/cart" )
const User=require( "../model/login" )
const ViewOrder=require( "../model/vieworder" );
const Seller=require( "../model/seller" );
const Product=require( "../model/prod" )


//create routing for login
routing.post( '/login', ( req,res,next )=>{
    let uEmail= req.body.email;
    let uPass=req.body.password;
    return service.loginUser( uEmail, uPass ).then( item => {
        res.json( item );
    } ).catch( err => {
        next( err );
    } );
} );


//create route to add products 
routing.post( "/addproducts",( req,res,next )=>{
    let product=new Product( req.body );
    return service.addProduct( product ).then( ()=>{
        res.json( {"message": "Product added to the database"} );  
    } ).catch( err => {
        next( err );} );
} )

//create route to fetch products category wise
routing.get( "/products/:category",( req,res,next )=>{
    let pcategory=req.params.category;
    return service.retriveProducts( pcategory ).then( product=>{
        res.json( product );
    } ).catch( err=>{
        next( err );
    } )
} )
//create route for cart
routing.post( "/cart",( req,res,next )=>{
    let cart=new Cart( req.body );
    return service.appendCart( cart ).then( ()=>{
        res.json( {"message": "added to the cart"} );
    } ).catch( err => {
        next( err );} );
} )
//user specific cart routing
routing.get( "/cart/:userId",( req,res,next )=>{
    let userId=req.params.userId;
    return service.retriveCart( userId ).then( product=>{
        res.json( product );
    } ).catch( err=>{
        next( err );} )
} )
//route to check the authenticity of emailId of user
routing.post( "/user",( req,res,next )=>{
    let user=new User( req.body );
    return service.appendUser( user ).then( data=>{
        res.json( {"message": "the email Id is registered: "+data} );
        
    } ).catch( err => {
        next( err );} );
} )


//to fetch the order history of registered user,who shopped 
routing.get( "/orderhistory/:userId",( req,res,next )=>{
    let userId = req.params.userId;
    return service.vieworder( userId ).then( pastorders=>{
        res.json( pastorders );
    } ).catch( err=>{
        next( err );} )
} )
//to buy the product
routing.post( "/checkout",( req,res,next )=>{

    let orders = [];
    for( let i=0; i<req.body.length; i++ )
    {
        let order =new ViewOrder( req.body[i] );
        orders.push( order );
   
    }
    return service.appendvieworder( orders ).then( ()=>{
        res.json( {"message": "booked the product"} );
    } ).catch( err => {
        next( err );} );
    } )
    
//to search the particular product in search bar
routing.get( "/search/:prodname",( req,res,next )=>{
    let searchprod=req.params.prodname;
    return service.searchProduct( searchprod ).then( product=>{
        res.json( product );
    } ).catch( err => {
        next( err );
    } ); 
} )
// route that can provide delete operation on product already added
routing.post( "/deletecartdata",( req,res,next )=>{
   let del = req.body;
  return service.deletecartdata( del ).then( ()=>{
       res.json( {"message": "delete successfully"} );
    } ).catch( ( err )=>{
        next( err );
    } )
} )
//to fetch seller data of the product
routing.post( "/getsellerquantity",( req,res,next )=>{
  var sellerdata;  
  sellerdata = req.body;
 return service.getsellerquantity( sellerdata ).then( response=>{
        res.json( response );
     } ).catch( ( err )=>{
         next( err );
     } )
} )
module.exports = routing