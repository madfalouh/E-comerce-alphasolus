import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { dispatchLogin, dispatchRegister} from '../redux/actions/authAction'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: '',
}

export default function Register() {
const dispatch = useDispatch()
const navigate=useNavigate()
const register = useSelector((state) => state.register)
const usernameRef = useRef()
const firstnameRef = useRef()
const lastnameRef = useRef()
const emailRef = useRef()
const passwordRef = useRef()


useEffect (()=> {
if(register.user) {
navigate("/login")
}
} , [register])

const hundleSubmit  = async (e) => {
e.preventDefault();
const data = {
username : usernameRef.current.value ,
firstName : firstnameRef.current.value , 
lastName : lastnameRef.current.value , 
email : emailRef.current.value  , 
password : passwordRef.current.value , 
type : "admin" , 
}
dispatch(dispatchRegister(data))
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
              <span class="padding-bottom--15">Create your new account</span>
              <form id="stripe-login">
                    <div class="field padding-bottom--24">
                  <label for="username">username</label>
                  <input type="text" name="username" ref={usernameRef} ></input> 
                </div>
                <div class="field padding-bottom--24">
                  <label for="first name">first name</label>
                  <input type="text" name="first-name" ref={firstnameRef} ></input> 
                </div>
                <div class="field padding-bottom--24">
                  <label for="last name">last name</label>
                  <input type="text" name="last-name" ref={lastnameRef} ></input> 
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email" name="email" ref={emailRef}></input> 
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">Password</label>
                  </div>
                  <input type="password" name="password"  ref={passwordRef}></input> 
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue"  onClick={hundleSubmit} ></input> 
                </div>
                <div class="field">
                  
                </div>
              </form>
            </div>
          </div>
          <div class="footer-link padding-top--24">
            <span>You have an account? <a href="http://localhost:3006/login">Sign in</a></span>
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