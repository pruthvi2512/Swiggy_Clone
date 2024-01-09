import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart(){
    const cartItems=useSelector(Store=>Store.cart.items);
    console.log(cartItems);
    const sum = cartItems.reduce((total, item) => total + item.price / 100, 0);
    

    return<>
    <div className="outcart">
    <div className="cart">
        {
            cartItems.map((item)=>
            <div className="eachitem">
                <div><h6>{item.name}</h6></div>
                
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                
                <div><h6>&#8377;{item.price/100}</h6></div>
            </div>
            
                )
        }
        <hr style={{
            height:'2px',
            backgroundColor:'black'
        }}/>

<div className="eachitem">
                <div><h6>Total</h6></div>
                
                <div><h6>&#8377;{sum}</h6></div>
            </div>
            <div className="pbtn"> <button className="btn btn-success ">Proceed</button></div>
           
    
     

    </div>
 
    </div>
    
    
    </>
  
}
export default Cart;