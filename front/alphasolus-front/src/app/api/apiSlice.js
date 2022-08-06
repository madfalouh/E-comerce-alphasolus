import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {setCredentials , logOut} from '../../features/auth/authSlice'
import axios from 'axios';


const baseQuery = axios({
withCredentials : true , 
method: 'post',
url: 'http://localhost:3000/Auth/login',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },

data : data 
})