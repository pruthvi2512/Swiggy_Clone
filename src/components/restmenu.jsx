import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../assets/cartslice";
import Store from "../assets/store";
import menu1 from "../assets/menu1";
function Restmenu(){
    const img_cdn="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const params=useParams();
    const[restdetail,setrestdetail]=useState([]);
    const carItems=useSelector(Store=>Store);
    console.log(carItems);
     
    useEffect(()=>{
        getrestdetail();
    },[]);
    async function getrestdetail(){
        
       // const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.46437579422175&lng=73.83316285908222&restaurantId="+params.id+"&catalog_qa=undefined&submitAction=ENTER"
        //const data=await fetch(url);
        //const json=await data.json();
        const json=menu1();
        console.log(json);
        //const info=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        const info=json;
        //console.log(info);
        //  console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name);
        setrestdetail(json);

        console.log(restdetail);
    }
    //redux
    const dispatch=useDispatch();
    const handleItem=(info)=>{
        dispatch(addItem(info));

    }

    // console.log(restdetail[0]?.card?.info?.name);
    return <>
    <div className="menulist">
    
      {restdetail.map(item => (
       <div className="menu_card">
       <div className="menu_img"><img src={img_cdn+item.card.info.imageId} alt="yummm" style={{maxWidth:'200px',maxHeight:'130px'}} /></div> 
       <div><ul><li><h5>{item.card.info.name}</h5></li>
                 <li>&#9733;{item.card.info.ratings.aggregatedRating.rating}</li>
                 <li>&#8377;{item.card.info.price/100||item.card.info.defaultPrice/100}</li>
            
                 </ul>
                 <button className="btn btn-success" type="button" onClick={()=>handleItem(item.card.info)}>Add</button>
                 </div>

       </div>
      

      
      ))}
    
    </div>
    </>
}
export default Restmenu;