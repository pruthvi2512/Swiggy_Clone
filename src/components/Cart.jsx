import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart(){
    const cartItems=useSelector(Store=>Store.cart.items);
    console.log(cartItems);
    const sum = cartItems.reduce((total, item) => total + item.price / 100, 0);
    const charge=Math.floor((sum*0.17));
    const total=Math.floor(sum+charge);
    
    

    return<>
    <div className="outcart">
    <div className="cart">
        {
            cartItems.map((item)=>
            <div className="eachitem">
                <div><h6>{item.name}</h6></div>
                
                <i class="fa fa-trash-o" ></i>
                
                <div><h6>&#8377;{item.price/100}</h6></div>
            </div>
            
                )
        }
        <hr style={{
            height:'0.5px',
            backgroundColor:'black'
        }}/>
        <div className="eachitem">
                <div><h6>GST+Restaurent Charges</h6></div>
                
                <i class="fa fa-trash-o" ></i>
                
                <div><h6>&#8377;{charge}</h6></div>
            </div>
        <hr style={{
            height:'2px',
            backgroundColor:'black'
        }}/>

<div className="eachitem">
                <div><h6>Total</h6></div>
                
                <div><h6>&#8377;{total}</h6></div>
            </div>
            <div className="pbtn"> <Link to='/cart/payment'><button className="btn btn-success ">Proceed</button></Link></div>
           
    
     

    </div>
 
    </div>
    
    
    </>
  
}
export default Cart;