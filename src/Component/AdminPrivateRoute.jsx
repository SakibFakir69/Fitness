


import UseAdminHooks from '@/Hooks/UseAdminHooks'
import UseAuth from '@/Hooks/UseAuth';
import React from 'react'
import { Navigate } from 'react-router-dom';

function AdminPrivateRoute({children}) {

    const {user,loading} = UseAuth();

    const {isAdmin} = UseAdminHooks();

    console.log(isAdmin,"admin private");


    if(loading){
      return <p>loading...</p>
    }


    if(isAdmin?.admin && user)
    {
        return children

    }
 




  return < Navigate to='/accountpage/login'/>

}

export default AdminPrivateRoute