import { useEffect, useRef, useState } from "react"
import { dispatchAddComand, dispatchGetComands, dispatchUpdateComand } from "../../redux/actions/comandAction";
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";



export default function ProductCard ({data}) {
const dispatch = useDispatch()
const token = localStorage.getItem('userInfo')
const decoded_token=  jwt_decode(token);
const comands = useSelector((state) => state.getComand)
const {comand , isnull} = comands 
useEffect (()=>{
 dispatch(dispatchGetComands(decoded_token.id))
} , [])
var i = 0

function boolean() { 
i=0
let f =false

  for(var element of comand[0].products) {
console.log(element.product);
if(element.product===data.id) {
f= true
break ; 
}
i++
}
return f
}


const hundleAddClick = async (e) =>{
e.preventDefault();



if(comand.length===0){
console.log("fcg");
const comanddata = {
name : "comm",
userId:decoded_token.id , 
totalprice : data.price , 
products : [  { product:  data.id  , quantity : 1  }   ] ,
status : 'notstarted',
}
dispatch(dispatchAddComand(comanddata))
dispatch(dispatchGetComands(decoded_token.id))
} else {





console.log(boolean());


if(boolean() ) {
console.log("equals");
let qte =1
let temparray = comand[0].products
console.log(i);
temparray[i].quantity+=1
const comanddata = {
op :"add" , 
_id : comand[0]._id ,
name : "comm",
userId:decoded_token.id , 
totalprice : data.price*qte+comand[0].totalprice , 
products : temparray  ,
status : 'notstarted',
}

dispatch(dispatchUpdateComand(comanddata))
dispatch(dispatchGetComands(decoded_token.id))
} else  {
console.log("not equals");
const temparray = comand[0].products

const temp ={ product:  data.id  , quantity : 1 } 
temparray.push(temp)
const comanddata = {
op :"addarray" , 
_id : comand[0]._id ,
name : "comm",
userId:decoded_token.id , 
totalprice : data.price+comand[0].totalprice , 
products : temparray  ,
status : 'notstarted',
}
dispatch(dispatchUpdateComand(comanddata))
dispatch(dispatchGetComands(decoded_token.id))

}




//



}
}


return (  

<div className="container">
<div class="product-card">
  <div class="image-container">
    <div class="cover-image product-image">
      <img src={`data:image/png;base64,${data.img}`} alt=""></img>
    </div>
    <div class="more-image-container">
      <div class="more-image product-image">
        <img src={`data:image/png;base64,${data.img}`} alt=""></img>
      </div>
      <div class="more-image product-image">
        <img src={`data:image/png;base64,${data.img}`} alt=""></img>
      </div>
      <div class="more-image product-image">
        <img src={`data:image/png;base64,${data.img}`} alt=""></img>
      </div>
    </div>
  </div>
  <div class="product-info">
    <a href="#" class="free-shipping">Free shipping</a>
    <h3 class="product-name"> {data.name}</h3>
    <p class="regular-price">{data.price}Dhs</p>
    <p class="discount-price">{data.price}Dhs</p>
    <p class="offer-info">{data.description}</p>
    <a href="#" class="add-to-cart">
      <ion-icon name="add-outline"></ion-icon> Buy now
    </a>
    <div class="stock">
      <div class="stock-status"></div>
      <p class="stock-info">50+ pcs. in stock.</p>
    </div>
    <div class="buttons" onClick={hundleAddClick} >
      <a   class="button"   >
        <ion-icon name="bag-add-outline"></ion-icon> Add to cart
      </a>
      <a href="#" class="button">
        <ion-icon name="heart-outline"></ion-icon> Add to wishlist
      </a>
    </div>
  </div>
</div>


</div>


)







}