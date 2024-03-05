import { Link } from "react-router-dom";
export default function Restaurent(props){
  const src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurent.info.cloudinaryImageId;
    return(
        <>
        <Link to={"/restaurents/"+props.restaurent.info.id}><div className="card" >
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.restaurent.info.name}</h5>
    <p className="card-text">&#9733;{props.restaurent.info.avgRating} </p>
    <p className="card-text"><i class="fa-solid fa-location-dot"></i>&nbsp;{props.restaurent.info.locality}</p>
    <p className="card-text cui"><i class="fa-solid fa-utensils spoon"></i>&nbsp;{props.restaurent.info.cuisines.join(",")}.</p>
    
  </div>
</div></Link>
       

</>
    )
}