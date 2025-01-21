



import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'

function UseReviews() {
    const useaxiosPublic = UseAxiosPublic();

    const {data: allreviews=[] } = useQuery({
        queryKey:['review'],
        queryFn: async ()=>{
            const res =  await useaxiosPublic.get('/reviews')
            return res.data;
        }
    })



  return {allreviews}
}

export default UseReviews