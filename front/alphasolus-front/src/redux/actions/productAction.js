import {

 GET_PRODUCT_REQUEST  ,
 GET_PRODUCT_SUCCESS  ,
 GET_PRODUCT_FAIL   ,
 UPDATE_PRODUCTSTATUS_REQUEST,  
 UPDATE_PRODUCTSTATUS_FAIL  ,
 UPDATE_PRODUCTSTATUS_RESET  ,
 PRODUCT_DELETE_REQUEST ,
 PRODUCT_DELETE_SUCCESS ,
 PRODUCT_DELETE_FAIL  ,
 PRODUCT_UPDATE_PROFILE_REQUEST  ,
 PRODUCT_UPDATE_PROFILE_SUCCESS  ,
 PRODUCT_UPDATE_PROFILE_FAIL ,
 PRODUCT_UPDATE_PROFILE_RESET , 
ADD_PRODUCTSTATUS_REQUEST,
ADD_PRODUCTSTATUS_SUCCESS,
ADD_PRODUCTSTATUS_FAIL,
ADD_PRODUCTSTATUS_RESET

} from './constants/productCDonstants'

import axios from 'axios'

export const  dispatchGetProduct =() => async (dispatch) => {
try{
dispatch({
type :GET_PRODUCT_REQUEST
})
const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer ' + localStorage.getItem('userInfo')
        },
}
const {data}=await axios.get("http://localhost:3000/products/" ,config)

dispatch({
type :GET_PRODUCT_SUCCESS , 
payload: {
products : data
}
})

}catch(err){

dispatch({
type :  GET_PRODUCT_FAIL  , 
payload : err
})
}
};


export const  dispatchAddProduct = (creds) => async (dispatch) => {
try{
dispatch({
type :ADD_PRODUCTSTATUS_REQUEST
})

await axios({
method:"post",
url : "http://localhost:3000/products"  ,
headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer ' + localStorage.getItem('userInfo')
        },
data:creds
})

console.log("gghh");

dispatch({
type :ADD_PRODUCTSTATUS_SUCCESS , 
payload: {
msg : "adeed"
}
})

}catch(error){

console.log(error);

dispatch({
type :  ADD_PRODUCTSTATUS_FAIL  , 
payload : 
         error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
})
}
};