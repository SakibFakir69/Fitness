


import React from 'react'
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
function UseallNewsLetter() {

    const useaxiosSecure = UseAxiosSecure();
   


    const {isLoading,data:allnewsletter=[]} = useQuery({
        queryKey:['newsletter'],
        queryFn: async () =>{
            const response = await useaxiosSecure.get('/newsletter')
            return response.data;
        }
    })


  return {isLoading,allnewsletter};
 
}

export default UseallNewsLetter