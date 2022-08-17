import {
GET_COMAND_REQUEST  ,
GET_COMAND_SUCCESS  ,
GET_COMAND_FAIL   ,
ADD_COMANDSTATUS_REQUEST,
ADD_COMANDSTATUS_SUCCESS,
ADD_COMANDSTATUS_FAIL,
UPDATE_COMANDSTATUS_SUCCESS ,
UPDATE_COMANDSTATUS_REQUEST,
UPDATE_COMANDSTATUS_FAIL ,
UPDATE_COMANDSTATUS_RESET ,
COMAND_DELETE_REQUEST,
COMAND_DELETE_SUCCESS ,
COMAND_DELETE_FAIL ,

} from './constants/comandConstants'

import axios from 'axios'

export const  dispatchGetComands =(id) => async (dispatch) => {
try{
dispatch({
type :GET_COMAND_REQUEST
})
const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer ' + localStorage.getItem('userInfo')
        },
}
const {data}=await axios ({ 
        method :"get" , 
        url :  "http://localhost:3000/comands/user/"+id ,
        headers : { 
           'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
                } ,
         
    })

dispatch({
type :GET_COMAND_SUCCESS , 
payload: {
comand : data
}
})

}catch(err){

dispatch({
type :  GET_COMAND_FAIL  , 
payload : err
})
}
};


export const  dispatchAddComand = (creds) => async (dispatch) => {
try{
dispatch({
type :ADD_COMANDSTATUS_REQUEST
})

await axios({
method:"post",
url : "http://localhost:3000/comands"  ,
headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer ' + localStorage.getItem('userInfo')
        },
data:creds
})

console.log("gghh");

dispatch({
type :ADD_COMANDSTATUS_SUCCESS , 
payload: {
msg : "adeed"
}
})

}catch(error){

console.log(error);

dispatch({
type :  ADD_COMANDSTATUS_FAIL  , 
payload : 
         error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
})
}
};



export const  dispatchUpdateComand = (creds) => async (dispatch) => {
try{
dispatch({
type :UPDATE_COMANDSTATUS_REQUEST
})

await axios({
method:"post",
url : "http://localhost:3000/comands/update"  ,
headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer ' + localStorage.getItem('userInfo')
        },
data:creds
})

console.log("gghh");

dispatch({
type :UPDATE_COMANDSTATUS_SUCCESS , 
payload: {
msg : "adeed"
}
})

}catch(error){

console.log(error);

dispatch({
type :  UPDATE_COMANDSTATUS_FAIL  , 
payload : 
         error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
})
}
};



export const  dispatdeleteComand = (creds) => async (dispatch) => {
try{
dispatch({
type :COMAND_DELETE_REQUEST
})

await axios({
method:"post",
url : "http://localhost:3000/comands/delete"  ,
headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer ' + localStorage.getItem('userInfo')
        },
data:creds
})

console.log("gghh");

dispatch({
type :COMAND_DELETE_SUCCESS, 
payload: {
msg : "adeed"
}
})

}catch(error){

console.log(error);

dispatch({
type :  COMAND_DELETE_FAIL , 
payload : 
         error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
})
}
};