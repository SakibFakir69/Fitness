




import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAuth from './UseAuth'
import UseAxiosSecure from './UseAxiosSecure';

function UseAdminHooks() {
    const {user} = UseAuth();
    const useaxiosSecure = UseAxiosSecure();

    const {data : isAdmin}=useQuery({
        queryKey:['user',user?.email],
        queryFn : async ()=>{
            const res = await useaxiosSecure.get(`/useradmin/${user?.email}`)
            return res.data;

        }
    })



  return [isAdmin]
}

export default UseAdminHooks