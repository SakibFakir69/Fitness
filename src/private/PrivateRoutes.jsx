




import React from 'react'
import UseAuth from '../Hooks/UseAuth'
import { Navigate } from 'react-router-dom';
function PrivateRoutes({children}) {

    const {  user} = UseAuth();
    const {loading} = UseAuth();

    console.log(loading,user ,"navbar");


    if(loading)
    {
        return <p>Loading...</p>
    }
    if(user)
    {
        return children;
    }


  return <Navigate to={'/accountpage/login'}/>
}

export default PrivateRoutes