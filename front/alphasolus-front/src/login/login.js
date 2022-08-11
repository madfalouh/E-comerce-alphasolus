import { useEffect, useRef } from "react"
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


useEffect (()=> {
if(userInfo) {
//navigate("/home")
}
} , [])


const hundleSubmit  = async (e) => {
e.preventDefault();
const data = {
email : emailRef.current.value  , 
password : passwordRef.current.value
}
 

dispatch(dispatchLogin(data))

console.log("thissss"+auth.userInfo);

if(userInfo) {
navigate("/home")
}


}




return (

<div className="container">
<div class="container-fluid">
    <div class="row main-content bg-success text-center">
      <div class="col-md-4 text-center company__info">
        <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        <h1 class="company_title">Login Here</h1>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
          <div class="row">
            <h2>Log In</h2>
          </div>
          <div class="row">
            <form control="" class="form-group">
              <div class="row">
                <input type="text" name="username" id="username" class="form__input" placeholder="Email"  ref={emailRef}></input>
              </div>
              <div class="row">
             
                <input type="password" name="password" id="password" class="form__input" placeholder="Password"  ref={passwordRef} ></input>
              </div>
              <div class="row">
                <input type="checkbox" name="remember_me" id="remember_me" class=""></input>
                <label for="remember_me">Remember Me!</label>
              </div>
              <div class="row">
                <input type="submit" value="Submit" class="btn"  onClick={hundleSubmit } ></input>
              </div>
            </form>
          </div>
          <div class="row">
            <p>Don't have an account? <a href="#">Register Here</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)





}