

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'

function UsetrnsHIstory() {

    const useaxiosSecure = UseAxiosSecure();


    const {data:history=[]}=useQuery({
        queryKey: ['trsn'],
        queryFn: async ()=>{
            const res = await useaxiosSecure.get('/trnshistory')
            return res.data;
        }
    })

  return {history};
}

export default UsetrnsHIstory