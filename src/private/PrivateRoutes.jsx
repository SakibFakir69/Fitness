




import React from 'react'
import UseAuth from '../Hooks/UseAuth'

function PrivateRoutes({children}) {
    const {loading , user} = UseAuth();
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