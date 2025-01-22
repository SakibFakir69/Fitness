

import axios from 'axios'


import React from 'react'
import { useNavigate } from 'react-router-dom';

export const useaxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

function UseAxiosSecure() {

    // auth token 

    const loginpage = useNavigate();

    useaxiosSecure.interceptors.request.use((config)=>{

        // all user inside authoraztion

        const token = localStorage.getItem('access-token');
        console.log(token,"secure");
       if(token)
       {
         config.headers.authorization=`Bearer ${token}`
       }



        return config;

    },(error)=>{
        return Promise.reject(error);


    })


    // now response
    // header pass locastroage token , berer 


    useaxiosSecure.interceptors.response.use((response)=>{

       
        // }
        const status = response?.status;

        // Redirect to login on 401 or 403
        if (status === 401 || status === 403) {
          localStorage.removeItem('access-token'); // Clear token
          navigate('/account/login'); // Redirect to login page
        }



        return response

    },(error)=>{
        return Promise.reject(error);
    })





  return useaxiosSecure;
}

export default UseAxiosSecure