


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import UseAxiosPublic from './UseAxiosPublic'

function UseTop6communityPost() {

    const useaxiosPublic = UseAxiosPublic();

    const {data: communityPost} = useQuery({
        queryKey:['post'],
        queryFn: async () =>{
            const res = await useaxiosPublic.get('/communitypost')
            return res.data;
        }
    })



  return {communityPost}
}

export default UseTop6communityPost