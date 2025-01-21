



import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

function Use5trainer() {

    const useaxiosPublic  = UseAxiosSecure();

    const {data: fiveTrainer} = useQuery({
        queryKey:['five'],
        queryFn: async ()=> {
            const res = await useaxiosPublic.get('/five')
            return res.data;
        }
    })
    console.log(fiveTrainer);



  return {fiveTrainer}
}

export default Use5trainer