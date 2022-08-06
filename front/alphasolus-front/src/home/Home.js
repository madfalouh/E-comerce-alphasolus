import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { logout } from "../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux'



export default function Home() {
const [products , setProducts] = useState([]) 
const dispatch = useDispatch()





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


const handleclick = async (e) =>{

e.preventDefault();

	let temp_state = [...products];
	
	temp_state.push({

_id :"62d661da03bd48349b77ce73",
name :"falhikh",
price :13,
description :"test"
})

const data = {
_id :"62d661da03bd48349b77ce7513",
name :"fa",
price :13,
description :"test"
}
temp_state[0].name="first"

	// 5. Set the state to our new copy
setProducts( temp_state );

await axios({

method: 'post',
url: 'http://localhost:3000/products/',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')

          },

data : data 
}).then((response)=>{

}  )

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

{products.map( (pr=>(<li key={pr.id}>{pr.name}</li>
 ) 


))}

</ul>  
<button  onClick={handleclick} > add </button>

<button className="submit-btn-form" type="submit"  onClick={hundleLogout} >Logout</button>

</div>
)


}