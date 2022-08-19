import { dispatchUpdateComand } from "../../redux/actions/comandAction";
const dispatch = useDispatch()
export default function CartCard ({data}) {

const hundledelete = async (e) =>{
e.preventDefault();





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