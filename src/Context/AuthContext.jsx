


import React, { createContext, useState } from 'react'
import Auth from '../Firebase/Config';

const MyContext = createContext();

function AuthContext({children}) {

    const [ loading , setloading ] =useState (true);
    const [ user , setuser ] = useState(null);


    // create reg with 







    const authInfo ={
        loading, setloading,user,setuser
    }










  return (
    <MyContext.Provider value={authInfo}>
        {children}
    </MyContext.Provider>
  )
}

export default AuthContext