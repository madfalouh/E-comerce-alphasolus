import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useRef, useState } from "react";



export default function Home() {
const [products , setProducts] = useState([]) 






useEffect(  () => {

const fetchproducts =  async  ()=>{



await axios({

method :'get' ,
url:'http://localhost:3000/products' , 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')
        },

}).then((response)=>{

setProducts(response.data)


}  )

}


fetchproducts()

}

,[])


const handleclick =(e) =>{

e.preventDefault();





let productsHelper=products


productsHelper.push("lol")




}





//const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
const token = sessionStorage.getItem('__TOKEN__')
const decoded_token=  jwt_decode(token,"tokenkey");


console.log(decoded_token);

return (

<div>


<p> welcome {decoded_token.username}    </p>  



<ul> 

{products.map( (pr=>(<li key={pr.id}>{pr.name}</li>
 ) 


))}

</ul>  
<button  onClick={handleclick} > add </button>
</div>
)


}