


import { useQueries, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import UseAxiosPublic from './UseAxiosPublic'


function Top6bookingClass() {

    const useaxiosPublic = UseAxiosPublic();

    const {isLoading,data:top6class=[] } = useQuery({

        queryKey:['data'],
        queryFn: async ()=>{
            const res = await useaxiosPublic.get('/topbooking')
            console.log( res.data ," res.data");

            return res.data;
 
        }

    })


  return {isLoading,top6class};
}

export default Top6bookingClass