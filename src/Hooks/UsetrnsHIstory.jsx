

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import { User } from 'lucide-react';
import UseAuth from './UseAuth';

function UsetrnsHIstory() {

    const useaxiosSecure = UseAxiosSecure();
    const {user} = UseAuth();


    const {data:history=[]}=useQuery({
        queryKey: ['trsn',user?.email],
        queryFn: async ()=>{
            const res = await useaxiosSecure.get('/paymentOfuser')
            return res.data;
        }
    })

  return {history};
}

export default UsetrnsHIstory