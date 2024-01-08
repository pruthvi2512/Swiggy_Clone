import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Restmenu(){
    const params=useParams();
    const[restdetail,setrestdetail]=useState(null);
     
    useEffect(()=>{
        getrestdetail();
    },[]);
    async function getrestdetail(){
        
        const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.46437579422175&lng=73.83316285908222&restaurantId="+params.id+"&catalog_qa=undefined&submitAction=ENTER"
        const data=await fetch(url);
        const json=await data.json();
        console.log(params.id);
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name);
    }
    return <>
    <h2>{params.id}</h2>
    </>
}
export default Restmenu;