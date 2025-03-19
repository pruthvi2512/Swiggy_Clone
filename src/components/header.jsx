import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Store from "../assets/store";

export default function Header(){
const cartItems=useSelector(Store=>Store.cart.items);

 return (
   <nav className="navbar navbar-expand-sm bg-dark">
   <div className="container-fluid">
     <a className="navbar-brand " href="#"><img className="logo" src="https://www.vhv.rs/dpng/d/433-4338596_swiggy-logo-png-image-free-download-searchpng-swiggy.png" alt="logo" /></a>
     <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon bg-dark"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
        <Link to="/"> <a className="nav-link active" aria-current="page" href="">Home</a></Link>
         <Link to="/about"><a className="nav-link " href="" >About</a></Link>
         <Link to="/help"><a className="nav-link" href="">Help</a></Link>
        <Link to='/cart'> <a className="nav-link  " href=""><i class="fas fa-shopping-cart">&nbsp;</i>Cart {cartItems.length}</a></Link>
        <Link to='/login'><button className="btn btn-danger" type="submit">Login</button></Link> 
       </div>
     </div>
    
   </div>
 </nav>
 )    


}