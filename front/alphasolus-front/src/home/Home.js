import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { logout } from "../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux'
import {dispatchGetProduct , dispatchAddProduct } from '../redux/actions/productAction'


export default function Home() {
const [product , setProduct] = useState([]) 
const dispatch = useDispatch()
const prods = useSelector((state) => state.getProducts)

const  {products , isnull} =prods




useEffect(() => {
dispatch(dispatchGetProduct())
if(!isnull){
console.log(prods);
setProduct(products)}
}

,[isnull])


const handleclick = async (e) =>{

e.preventDefault();

	let temp_state = [...products];
	


const data = {
_id :"62d66hg1da03bd4834h9b77ce75opo13",
name :"fah",
price :13,
description :"test"
}

temp_state.push(data)

dispatch(dispatchAddProduct(data))




setProduct( temp_state );



}


const hundleLogout = async (e) =>{

e.preventDefault();



dispatch(logout())


}






//const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
const token = localStorage.getItem('userInfo')
const decoded_token=  jwt_decode(token,"tokenkey");

console.log(decoded_token);


return (

<div>


<p> welcome {decoded_token.username}    </p>  



<ul> 

{product.map( (pr=>(<li key={pr.id}>{pr.name}</li>
 ) 


))}

</ul>  
<button  onClick={handleclick} > add </button>

<button className="submit-btn-form" type="submit"  onClick={hundleLogout} >Logout</button>

</div>
)


}