import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { logout } from "../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux'
import {dispatchGetProduct , dispatchAddProduct } from '../redux/actions/productAction'
import { Buffer } from 'buffer';
import ProductCard from "../component/product/productCard";
import NavBar from "../component/product/navBar";


export default function Home() {
const [product , setProduct] = useState([]) 
const [producta , setProducta] = useState([]) 
const [file , setFile] = useState(null) 
const dispatch = useDispatch()
const prods = useSelector((state) => state.getProducts)
const auth = useSelector((state) => state.auth)
const [nu , setNu] = useState()
const {userInfo , isLogged} = auth
const  {products , isnull} =prods
const nameRef = useRef()
const priceRef = useRef()
const descRef = useRef()
const addCartRef = useRef()


useEffect(() => {

dispatch(dispatchGetProduct())

let temp = []

if(!isnull){
products.map((singleData) => {

console.log(singleData);
const base64String =btoa(new Uint8Array(singleData.img.data.data).reduce(function (data, byte) {


return data + String.fromCharCode(byte);
}, ''));
const productdata = {
id :singleData._id ,
name : singleData.name ,
price : singleData.price , 
description :singleData.description , 
img : base64String ,
bufferedimg : singleData.img
}
       temp.push( 
<ProductCard  data={productdata} ></ProductCard>
 ) 
})   
setProducta(temp)}

}

,[prods.products.length])



const handleclick = async (e) =>{

e.preventDefault();

	let temp_state = [...products];
	let temp_stata = [...producta];


let data = new FormData() 


data.append("name" , nameRef.current.value) ; 
data.append("price" , priceRef.current.value) ; 
data.append("description",descRef.current.value) ; 
data.append("file",file) ; 
dispatch(dispatchAddProduct(data))


console.log(prods);


var object = {};
data.forEach((value, key) => object[key] = value);
var json = JSON.stringify(object);
data= JSON.parse(json)
temp_state.push(data)
dispatch(dispatchGetProduct())


console.log( prods.products.length ); 



}







const hundleLogout = async (e) =>{

e.preventDefault();



dispatch(logout())


}









//const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
const token = userInfo
const decoded_token=  jwt_decode(token);

const username = decoded_token.username


return (

<div>

<NavBar  user={username} ></NavBar>

 {producta}


<button  onClick={handleclick} > add </button>



<button className="submit-btn-form" type="submit"  onClick={hundleLogout} >Logout</button>
<input type="file" name="upload_file" id="file" onChange={(e)=>{ setFile( e.target.files[0] )}} ></input>


<p></p>  <input type="text"  placeholder="name"   ref={nameRef} ></input>
<p></p> <input type="text"  placeholder="price"   ref={priceRef}></input>
<p></p> <input type="text" placeholder="description"  ref={descRef}></input>




</div>
)


}