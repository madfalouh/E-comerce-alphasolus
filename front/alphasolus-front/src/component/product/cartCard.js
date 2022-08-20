import { dispatchGetComands, dispatchUpdateComand } from "../../redux/actions/comandAction";
import { useDispatch, useSelector } from 'react-redux'

import jwt_decode from "jwt-decode";


export default function CartCard ({data}) {
const dispatch = useDispatch()
const comands = useSelector((state) => state.getComand)
const {comand , isnull} = comands 
const token = localStorage.getItem('userInfo')
const decoded_token=  jwt_decode(token);
const hundledelete = async (e) =>{
e.preventDefault();

var j=0 
let temparray = comand[0].products

console.log(temparray);

console.log(data.id);

for (var i  of temparray ) {
    

    if ( i.product ===data.id) {
        break     
    }

j++
}
console.log(j);

let temp = temparray[j]
temparray.splice(j, 1)

let qte = temp.quantity
console.log(data.price*qte);
const comanddata = {
op :"add" , 
_id : comand[0]._id ,
name : "comm",
userId:decoded_token.id , 
totalprice : comand[0].totalprice-data.price*qte , 
products : temparray  ,
status : 'notstarted',
}

console.log(decoded_token.id);

dispatch(dispatchUpdateComand(comanddata))
dispatch(dispatchGetComands(decoded_token.id))
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
    <p class="discount-price">{data.price}Dhs </p>
    <p class="offer-info">{data.description}</p>
    <a href="#" class="add-to-cart">
      <ion-icon name="add-outline"></ion-icon> Buy now
    </a>
    <div class="stock">
      <div class="stock-status"></div>
      <p class="stock-info">50+ pcs. in stock.</p>
    </div>
    <div class="buttons">
      <a   class="button"   >
        <ion-icon name="bag-add-outline"></ion-icon> Quatity: {data.quantity}
      </a>
      <a  class="button"  onClick={hundledelete} >
        <ion-icon name="heart-outline"></ion-icon> ❌
      </a>
    </div>
  </div>
</div>


</div>


)







}