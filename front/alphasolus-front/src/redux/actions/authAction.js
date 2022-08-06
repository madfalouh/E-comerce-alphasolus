import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
    USER_LOGOUT ,USER_LOGOUT_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL
} from './constants/userConstants'
import axios from 'axios'
//fetch data from db
//send the data to the DB so that it knows to signin the user
//log in the user ..
export const dispatchLogin = (creds) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post('http://localhost:3000/Auth/login', creds, config)
    console.log(data);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
                userInfo: data,
                
            },
        })
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('firstLogin', true)
    } catch (error) {
        console.log(error);
        dispatch({
            type:  USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}






export const dispatchRegister = (creds) => async (dispatch) => {
    try {
        dispatch({
            type:  USER_REGISTER_REQUEST, 
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post('user/register', creds, config)
        dispatch({
            type:  USER_REGISTER_SUCCESS,
            payload: data,
        })

        //   localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:  USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
export const logout = () => async (dispatch) => {
    try {
        await axios.post('http://localhost:3000/Auth/logout')
        localStorage.removeItem('firstLogin')
        localStorage.removeItem('userInfo')
        window.location.href = '/'
        dispatch({ type:  USER_LOGOUT }) 

          //localStorage.setItem('userInfo', null)
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}




export const dispatchGetUser = (token) => async (dispatch) => {
    try {
        dispatch({
            type:  GET_USER_REQUEST,
        })
        const { data } = await axios.get('/user/infor', {
            headers: { Authorization: token },
        })
        dispatch({
            type:  GET_USER_SUCCESS,
            payload: {
                user: data,
                isAdmin: data.role === 1 ? true : false,
            },
        })
        //   localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

