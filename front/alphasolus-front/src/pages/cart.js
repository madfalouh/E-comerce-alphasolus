
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import NavBar from "../component/product/navBar";
import { dispatchGetComands } from '../redux/actions/comandAction';
import { useEffect, useState } from 'react';
import ProductCard from '../component/product/productCard';
export default function  Cart() {
const dispatch = useDispatch() 
const auth = useSelector((state) => state.auth)
const cart =useSelector((state) => state. getComand)

const {userInfo , isLogged} = auth
const  [cartProducts , setCartProducts ]=  useState([])
const token = userInfo

console.log(token);
const decoded_token=  jwt_decode(token);
const id = decoded_token.id
const username = decoded_token.username

useEffect(() => {
dispatch(dispatchGetComands (id)  )
} , [])

useEffect(() => {

if(cart.length!==0){
let temp =[]; 
cart.comand.map((element) => {
if(element.status==="notstarted"){
const productdata = {
name : "singleData.name" ,
price : "singleData.price" , 
description :"singleData.description" , 
img : "base64String" , 
}
temp.push(    <ProductCard  data={productdata} ></ProductCard>   )
}
})
setCartProducts(temp)
}

console.log(cartProducts);
},[cart])








return(

<div > 
<NavBar  user={username} ></NavBar>
  {cartProducts}



</div>


)


}