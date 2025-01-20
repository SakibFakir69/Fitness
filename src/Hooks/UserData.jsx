



import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import UseAuth from './UseAuth';

function UserData() {

    const useaxiosPublic = UseAxiosSecure();
    const {user} = UseAuth();


    const {data: userData} = useQuery({
        queryKey:['data'],
        queryFn: async ()=>{

            const res = await useaxiosPublic.get(`/userdata/${user?.email}`)
             return res.data;

        }
    })



  return {userData};
}

export default UserData