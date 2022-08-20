
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import NavBar from "../component/product/navBar";
import { dispatchGetComands } from '../redux/actions/comandAction';
import { useEffect, useRef, useState } from 'react';
import { dispatchGetByIdProduct } from '../redux/actions/productAction';
import CartCard from '../component/product/cartCard';
import ReactDOM from 'react-dom';
import { fail } from 'assert';

export default function  Cart() {
let temp = []

const dispatch = useDispatch() 
const auth = useSelector((state) => state.auth)
const cart =useSelector((state) => state. getComand)
const prod = useSelector((state) => state. getIdProduct)
const {products , isnull} = prod
const {userInfo , isLogged} = auth
const  [cartProducts , setCartProducts ]=  useState([])
const token = userInfo
const effectRan = useRef(false)
const table = useRef([])
const decoded_token=  jwt_decode(token);
const id = decoded_token.id
const username = decoded_token.username
const quantity = useRef("")

useEffect(() => {
if(effectRan.current===false){
dispatch(dispatchGetComands (id)  )
return () =>{
effectRan.current=true
}
}
} , [])


useEffect(() => {

if(cart.length!==0){
console.log(cart);
cart.comand.map((element) => {

if(element.status==="notstarted"){
element.products.map((product) => {

dispatch( dispatchGetByIdProduct(product))
  
} )
}
})
}
},[cart])


useEffect(  () => {

if(prod.products.img !=undefined){
console.log(prod);


 //temp.push(prod)
const base64String =btoa(new Uint8Array(prod.products.img.data.data).reduce(function (data, byte) {
return data + String.fromCharCode(byte);
}, ''));
const productdata = {
id : prod.products._id ,
name : prod.products.name,
price : prod.products.price , 
description :prod.products.description , 
img : base64String , 
quantity : prod.quantity , 
}


table.current.push(    <CartCard  data={productdata} ></CartCard>   )


if(table.current.length===cart.comand[0].products.length) {

setCartProducts(table.current)

}



}


},[prod])








return(

<div > 
<NavBar  user={username} ></NavBar>



{cartProducts}

{  cart.comand[0] ?

<p class="discount-price"  style={{marginLeft : 550 +"px"}}>total price  {cart.comand[0].totalprice}   </p>
 
: 0
}
</div>


)


}