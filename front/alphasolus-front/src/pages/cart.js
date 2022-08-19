
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import NavBar from "../component/product/navBar";
import { dispatchGetComands } from '../redux/actions/comandAction';
import { useEffect, useState } from 'react';
import ProductCard from '../component/product/productCard';
import { dispatchGetByIdProduct } from '../redux/actions/productAction';
export default function  Cart() {
const dispatch = useDispatch() 
const auth = useSelector((state) => state.auth)
const cart =useSelector((state) => state. getComand)
const prod = useSelector((state) => state. getIdProduct)
const {userInfo , isLogged} = auth
const  [cartProducts , setCartProducts ]=  useState([])
const token = userInfo
let temp =[]; 

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

element.products.map((product) => {


dispatch( dispatchGetByIdProduct(product.product))

} )


}
})
setCartProducts(temp)
}

console.log(cartProducts);
},[cart])


useEffect(() => {

if(prod.products.img !=undefined){




console.log(prod.products.img.data);
const base64String =btoa(new Uint8Array(prod.products.img.data.data).reduce(function (data, byte) {


return data + String.fromCharCode(byte);
}, ''));

const productdata = {
name : prod.products.name,
price : prod.products.price , 
description :prod.products.description , 
img : base64String , 
}
temp.push(    <ProductCard  data={productdata} ></ProductCard>   )

setCartProducts(temp)

}


},[prod])







return(

<div > 
<NavBar  user={username} ></NavBar>

{console.log(temp)}
  {cartProducts}



</div>


)


}