import { useEffect, useRef, useState } from "react"
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

useEffect (()=> {
if(userInfo) {
navigate("/home")
}
} , [userInfo])


const hundleSubmit  = (e) => {
e.preventDefault();
const data = {
email : emailRef.current.value  , 
password : passwordRef.current.value
}



dispatch(dispatchLogin(data))
console.log(userInfo);

if(userInfo) {
navigate("/home")
}


}




return (

<div className="container">


 <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style={{ minHeight: 100 +"vh" , flexGrow: 1 }}>
      <div class="loginbackground box-background--white padding-top--64">
      </div>
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9 }}>
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="#" rel="dofollow">AlphaSolus</a></h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Sign in to your account</span>
              <form id="stripe-login">
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email" name="email"  ref={emailRef} ></input> 
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password"    >Password</label>
                    <div class="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" name="password" ref={passwordRef} ></input> 
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox"></input>   Stay signed in for a week
                  </label>
                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue"  onClick={hundleSubmit}></input> 
                </div>
                <div class="field">
                  
                </div>
              </form>
            </div>
          </div>
          <div class="footer-link padding-top--24">
            <span   >Don't have an account? <a href="http://localhost:3006/register"   >Sign up</a></span>
            <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              <span><a href="#">© Stackfindover</a></span>
              <span><a href="#">Contact</a></span>
              <span><a href="#">Privacy & terms</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  </div>
)





}