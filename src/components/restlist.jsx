import Restaurent from "./restaurent";

export default function Restlist(props){
    return(
        <>
        {props.List.map((restaurent)=>(
            <Restaurent restaurent={restaurent}/>

    ))} </>
    )
}