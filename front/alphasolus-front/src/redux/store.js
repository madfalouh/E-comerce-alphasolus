import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import authReducer, { userRegisterReducer } from './reducer/AuthReducer'
import {
getProductReducer ,
addProductReducer
} from './reducer/ProductReducer'
import { addComandReducer, deleteComandReducer, getComandReducer, updateComandReducer } from './reducer/ComandReducer'



const reducer = combineReducers({
    auth: authReducer , 
    register : userRegisterReducer , 
    getProducts : getProductReducer,
    addProductReducer :addProductReducer ,
    getComand : getComandReducer,
    addComand : addComandReducer , 
    updatecomand : updateComandReducer,
    deletecomand : deleteComandReducer ,
})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
const initialState = {
    auth: { userInfo: userInfoFromStorage },
}
const middelware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)


const DataProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}

export default DataProvider


