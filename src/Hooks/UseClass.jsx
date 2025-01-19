


import React from 'react'
import UseAxiosPublic from './UseAxiosPublic'
import { useQuery } from '@tanstack/react-query';

function UseClass() {

    const useaxiosPublic = UseAxiosPublic();

    const {data: allclass } = useQuery({
        queryKey:['class'],
        queryFn: async () => {
            const res = await useaxiosPublic.get('/class');
            return res.data;
        }

    })


  return {allclass};
  
}

export default UseClass