 import { Link } from 'react-router-dom';
import './payment.css'
 import { useState } from 'react';
 
 function Payment(){
    const [checkedBox, setCheckedBox] = useState(null);
    const [add,setadd]=useState("");

    const handleCheckboxChange = (checkboxNumber) => {
        if(checkedBox){const data = document.getElementById(`data${checkboxNumber}`).textContent;
       setadd(data);
        console.log(add);
    }
        console.log(checkedBox);
      setCheckedBox(checkboxNumber === checkedBox ? null : checkboxNumber);
      console.log(checkedBox);
      console.log(add);

    };
    
    return <>
    <div className="payment">
        <div className="adrs">
            <div className="head"><p >Select Delivery address</p></div>
            <div className="ad-cards">
                <div className="ad-card1">
                     <p>HOME</p>
                     <p id='data1'>Flat No 50, Vadgaon Budruk, Pune, Maharashtra, India</p>
                     <input type="checkbox" checked={checkedBox === 1} name="select" id=""  onChange={() => handleCheckboxChange(1)}/>
                </div>
               <div className="ad-card2" >
                     <p>Office</p>
                     <p id='data2'>Flat No 23,,Digital Zone,near Balewadi Highstreet, Pune, Maharashtra, India</p>
                     {/* <button className="btn btn-success ">select</button> */}
                     <input type="checkbox" checked={checkedBox === 2} name="select" id="" onChange={() => handleCheckboxChange(2)} />
                     
                </div>
            
            </div>
      </div>
        <Link to="/cart/payment/pay"><div className="pay"> <button className="btn btn-success ">Procced</button>
                     </div></Link>
    </div>
    
    </>

}
export default Payment;