import { Link } from "react-router-dom"

export default function Header(){
 return (
   <nav className="navbar navbar-expand-sm bg-dark">
   <div className="container-fluid">
     <a className="navbar-brand " href="#"><img className="logo" src="https://www.vhv.rs/dpng/d/433-4338596_swiggy-logo-png-image-free-download-searchpng-swiggy.png" alt="logo" /></a>
     <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon bg-dark"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
        <Link to="/"> <a className="nav-link active" aria-current="page">Home</a></Link>
         <Link to="/about"><a className="nav-link link-light" >About</a></Link>
         <a className="nav-link" href="#">Help</a>
         <a className="nav-link link-light " href=""><i class="fas fa-shopping-cart">&nbsp;</i>Cart</a>
         <button class="btn btn-danger" type="submit">Login</button>
       </div>
     </div>
    
   </div>
 </nav>
 )    


}