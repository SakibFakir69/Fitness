


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'

function UseReview() {

    const useaxiosPublic = UseAxiosPublic();

    const {data:review} = useQuery({
        queryKey:['data'],
        queryFn: async ()=>{
            const res = await useaxiosPublic.get('/reviews')
            return res.data;
        }
    })


  return {review}
}

export default UseReview