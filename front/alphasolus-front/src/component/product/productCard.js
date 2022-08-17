import { useEffect, useRef, useState } from "react"
import { dispatchAddComand } from "../../redux/actions/comandAction";
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";



export default function ProductCard ({data}) {
const dispatch = useDispatch()
const token = localStorage.getItem('userInfo')
const decoded_token=  jwt_decode(token);
const comanddata = {

name : "comm",
userId :decoded_token.id , 
totalprice : 13 , 
products : [ {
       productId: data.id ,
        productName: data.name ,
        productPrice :  data.price ,
        productDescription : data.description , 
        quantity: 12 ,
        productimg : data.bufferedimg
} ] ,
status : 'notstarted',
}

console.log(data.name);

const hundleAddClick = async (e) =>{
e.preventDefault();

dispatch(dispatchAddComand(data))


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