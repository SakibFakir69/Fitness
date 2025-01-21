



import React from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';

function UsebookedByuserslotandMangeSlot() {

    const useaxiosSecure = UseAxiosSecure();

    const {isLoading,data:bookedSlotmanageBy=[]}=useQuery({
        queryKey:['booked'],
        queryFn: async ()=>{
            const res = await useaxiosSecure.get('/bookbyUser')

            return res.data;
        }
    })


  return {bookedSlotmanageBy};
}

export default UsebookedByuserslotandMangeSlot