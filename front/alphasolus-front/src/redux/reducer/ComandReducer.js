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

} from '../actions/constants/comandConstants'


const initialState = {
    comand: [],
    loading: false,
    isnull :true ,
}


export const getComandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMAND_REQUEST:
            return { ...state, loading: true }
        case GET_COMAND_SUCCESS:
            return {
                ...state,
                loading: false,
                comand: action.payload.comand,
                isnull : false
            }
        case GET_COMAND_FAIL :
            return { loading: false, error: action.payload }

        default:
            return state
    }
}