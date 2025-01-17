

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'

function UseAppliedTrainer() {

    // get useaxiosSecure 
    const useaxiosSecure= UseAxiosSecure();


    const {isLoading, error, data : appliedTrainer=[]}= useQuery({
        queryKey:['appliedData'],
        queryFn : async ()=>{
            const res = await useaxiosSecure.get('/applied')
            return res.data;
        }
    })



  return {isLoading,error,appliedTrainer};
}

export default UseAppliedTrainer