import { useState } from "react"

export default function Login(){
const [formData,setFormData]=useState({email:"",
  password:""
});
function handlechange(event){
  
  const { name, value } = event.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  
}
function submit(event){
  event.preventDefault();
  console.log(formData);
  setFormData({email:"",
  password:""

  });

}


    return <>
    <form className="lform" onSubmit={submit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={formData.email} name="email" onChange={handlechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={formData.password} name="password" onChange={handlechange} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>
}