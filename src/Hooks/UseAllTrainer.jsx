

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'

function UseAllTrainer() {

    const useaxiosPublic= UseAxiosPublic();

    const {isLoading, error,isError , data: TrainerData=[]}= useQuery({
        queryKey: ['trainer'],
        queryFn: async ()=>{
            const response =await useaxiosPublic.get('/alltrainers')
            return response.data;
        }


    })


    return {isLoading, error,isError,TrainerData};



 
}

export default UseAllTrainer