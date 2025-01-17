


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'

function UseAlluser() {
    const useaxiosPublic = UseAxiosPublic();

    const {isLoading , error  ,refetch, data: allUser=[]} = useQuery({
        queryKey:['data'],
        queryFn: async ()=>{
            const res =await useaxiosPublic.get('/users')
            return res.data;
        }
    })
    console.log(allUser,"user0");



  return {isLoading, error,refetch, allUser}
}

export default UseAlluser