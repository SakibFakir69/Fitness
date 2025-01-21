


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure, { useaxiosSecure } from './UseAxiosSecure'

function UsePayment() {

    const useaixiosSecure = UseAxiosSecure();


    const {data : allPayment=[]}  = useQuery({
        queryKey: ['data'],
        queryFn: async () =>{
            const response = await useaixiosSecure.get('/paymentOfadmin')
            return response.data;
        }
    })

    console.log(allPayment,"payment");



  return {allPayment};
}

export default UsePayment