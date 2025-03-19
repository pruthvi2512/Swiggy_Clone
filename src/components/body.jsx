import Restaurent from "./restaurent";
import Restlist from "./restlist";
import Searchbox from "./searchbox";
import { useState,useEffect } from "react"
import Shimmer from "./shimmer";
import { render } from "react-dom";
import Data from "../assets/data";

export default function Body(){
  const [searchtxt,setsearchtxt]=useState("");
 // const[List,setList]=useState({});
  const[allrlist,setallrlist]=useState([]);
 const[filterrlist,setfilterrlist]=useState([]);

function updatetxt(e){
  setsearchtxt(e.target.value);  
}
function filterlist(e){
  
  
  let data=allrlist.filter((rest)=>rest.info.name.toLowerCase().includes(searchtxt.toLowerCase()));
  console.log(data);
  setfilterrlist(data);
  
  e.preventDefault();
}


useEffect(()=>{
 getlist();
//  setList(list);)

},[]);


async function getlist(){
 // const list= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.46437579422175&lng=73.83316285908222&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{ mode: "no-cors" });
 const json= Data();
 console.log(json)
 // const json=await list.json();
  //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
 // setallrlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 // setfilterrlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setallrlist(json);
 setfilterrlist(json);
  
}
console.log("render");
  
    return(<>
    <Searchbox  txt={searchtxt} updatetxt={updatetxt} filterlist={filterlist}/>
     <div className="bg-light cards">
    {(allrlist.length===0)?<Shimmer/>:<Restlist  List={filterrlist}/>} 


  </div></>
       

        
    )
}