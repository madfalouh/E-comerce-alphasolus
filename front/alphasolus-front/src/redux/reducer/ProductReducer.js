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
} from '../actions/constants/productCDonstants'

const initialState = {
    products: [],
    loading: false,
    isnull :true ,
}


export const getProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return { ...state, loading: true }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                isnull : false
            }
        case GET_PRODUCT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCTSTATUS_REQUEST:
            return { loading: true }
        case ADD_PRODUCTSTATUS_SUCCESS:
            return { loading: false, msg: action.payload.msg }
        case ADD_PRODUCTSTATUS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

