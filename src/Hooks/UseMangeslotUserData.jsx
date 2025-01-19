




import React from 'react'
import UseAxiosSecure, { useaxiosSecure } from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import UseAuth from './UseAuth';

function UseMangeslotUserData() {

    const useaxiosSecure = UseAxiosSecure();
    const {user} = UseAuth();
    const {data: MangeUserData=[]} = useQuery({
        queryKey:['manageslot'],
        queryFn : async ()=>{
            const res = await useaxiosSecure.get(`/manageslot/${user?.email}`)
            return res.data;
        }
    })


  return {MangeUserData};
}

export default UseMangeslotUserData