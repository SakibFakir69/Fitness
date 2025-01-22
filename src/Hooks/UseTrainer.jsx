

import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import UseAuth from './UseAuth';

function UseTrainer() {
    
    const {user}= UseAuth();

    const useaxiosSecure =UseAxiosSecure();

    const {data: TrainerIstrainer } = useQuery({

        enabled: !!user?.email,





        queryKey:['data',user?.email],

        queryFn: async ()=>{
            const res = await useaxiosSecure.get(`/trainersOrNOt/${user?.email}`)
            return res.data;
        } 

    })
    console.log("ami trainer ")


  return {TrainerIstrainer}
}

export default UseTrainer