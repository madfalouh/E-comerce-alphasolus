import { useRef } from "react"
import axios from 'axios';
import {useNavigate } from "react-router-dom";
export default function Login() {
const navigate=useNavigate()

const emailRef = useRef()
const passwordRef = useRef()


const hundleSubmit  = async (e) => {
e.preventDefault();
const data = {
email : emailRef.current.value  , 
password : passwordRef.current.value
}
 
await axios({

method: 'post',
url: 'http://localhost:3000/Auth/login',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },

data : data 
}).then((response)=>{
localStorage.setItem('__TOKEN__', response.data);
navigate("/home")

}  )
}




return (

<div className="container">
<div className="email-input">

<p>   LOGIN   </p>   
<input type="text"  ref={emailRef}  ></input>
</div>
<div className="email-input"  >
<p>   mps </p>  
 <input type="text"  ref={passwordRef}  ></input>
<button className="submit-btn-form" type="submit"  onClick={hundleSubmit} >Login</button>

</div>
</div>

)





}