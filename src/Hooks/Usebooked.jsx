


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'

function Usebooked() {

    const useaxiosPublic = UseAxiosPublic();

    const {data:booked,refetch}=useQuery({
        queryKey:['data'],
        queryFn: async () =>{
            const res = await useaxiosPublic.get('/bookbyUser')
            return res.data;
        }
    })



  return {booked,refetch}
}

export default Usebooked