import { useRef } from "react"
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { dispatchLogin} from '../redux/actions/authAction'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: '',
}

export default function Login() {
const dispatch = useDispatch()
const navigate=useNavigate()
const auth = useSelector((state) => state.auth)

const { error, userInfo, isLogged ,type } = auth

const emailRef = useRef()
const passwordRef = useRef()


const hundleSubmit  = async (e) => {
e.preventDefault();
const data = {
email : emailRef.current.value  , 
password : passwordRef.current.value
}
 

dispatch(dispatchLogin(data))

console.log(type);

if(userInfo) {
navigate("/home")
}


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