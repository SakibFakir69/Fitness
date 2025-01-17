

import axios from 'axios'

import React from 'react'

export const useaxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

function UseAxiosSecure() {

    useaxiosSecure.interceptors.request.use((config)=>{
        return config;

    },(error)=>{
        return Promise.reject(error);


    })


    // now response
    // header pass locastroage token , berer 


    useaxiosSecure.interceptors.response.use((response)=>{

        return response

    },(error)=>{
        return Promise.reject(error);
    })





  return useaxiosSecure;
}

export default UseAxiosSecure