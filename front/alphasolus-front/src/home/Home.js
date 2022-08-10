import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { logout } from "../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux'
import {dispatchGetProduct , dispatchAddProduct } from '../redux/actions/productAction'
import { Buffer } from 'buffer';


export default function Home() {
const [product , setProduct] = useState([]) 
const [file , setFile] = useState(null) 
const dispatch = useDispatch()
const prods = useSelector((state) => state.getProducts)
const auth = useSelector((state) => state.auth)
const {userInfo , isLogged} = auth
const  {products , isnull} =prods




useEffect(() => {
dispatch(dispatchGetProduct())
if(!isnull){
setProduct(products)}
}

,[isnull])


const handleclick = async (e) =>{

console.log(file);
e.preventDefault();

	let temp_state = [...products];
	



let data = new FormData() 

data.append("id" , "62hd66hg1da03bd4834h9b77ce75opo13" ) ; 
data.append("name" , "falh") ; 
data.append("price" , 13) ; 
data.append("description","test") ; 
data.append("file",file) ; 
dispatch(dispatchAddProduct(data))


var object = {};
data.forEach((value, key) => object[key] = value);
var json = JSON.stringify(object);
data= JSON.parse(json)
temp_state.push(data)






setProduct( temp_state );



}


const hundleLogout = async (e) =>{

e.preventDefault();



dispatch(logout())


}









//const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
const token = userInfo
const decoded_token=  jwt_decode(token);




return (

<div>


<p> welcome {decoded_token.username}    </p>  


<p> images   </p>  


 {

products.map((singleData) => {
const base64String =btoa(new Uint8Array(singleData.img.data.data).reduce(function (data, byte) {
return data + String.fromCharCode(byte);
}, ''));
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
})}




<ul> 

{product.map( (pr=>(<li key={pr.id}>{pr.name}</li>
 ) 


))}

</ul>  
<button  onClick={handleclick} > add </button>

<button className="submit-btn-form" type="submit"  onClick={hundleLogout} >Logout</button>
<input type="file" name="upload_file" id="file" onChange={(e)=>{ setFile( e.target.files[0] )}} ></input>
</div>
)


}