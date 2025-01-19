


import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';

function Useform() {

    const useaxiosSecure = UseAxiosSecure();

    const {data : formPost } = useQuery({
        queryKey:['data'],
        queryFn: async ()=>{
            const res = await useaxiosSecure.get('/addnewform')
            return res.data;
        }
    })


  return {formPost};
}

export default Useform