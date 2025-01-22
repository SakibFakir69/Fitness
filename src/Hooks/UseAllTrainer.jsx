

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'
import UseAxiosSecure from './UseAxiosSecure';

function UseAllTrainer() {

    const useaxiosPublic= UseAxiosSecure();

    const {isLoading, error,isError , data: TrainerData=[],refetch}= useQuery({
        queryKey: ['trainer'],
        queryFn: async ()=>{
            const response =await useaxiosPublic.get('/alltrainers')
            return response.data;
        }


    })


    return {isLoading, error,isError,TrainerData,refetch};



 
}

export default UseAllTrainer