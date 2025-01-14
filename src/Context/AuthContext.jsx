


import React, { createContext, useEffect, useState } from 'react'
import Auth from '../Firebase/Config';
import { createMemoryRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export const MyContext = createContext();

function AuthContext({children}) {

    const [ loading , setloading ] =useState (true);
    const [ user , setuser ] = useState(null);


    // create reg with 

    const CreateAccountWithEmailAndPassword = (email , password)=>{
        return createUserWithEmailAndPassword(Auth, email,password);
    }

    const Googleprovider = new GoogleAuthProvider();

    const CreateAccountWIthGoole = ()=>{
        
        return signInWithPopup(Auth,Googleprovider)


    }










    // onauth change 

    useEffect(()=>{

        const unsubcribe = onAuthStateChanged(Auth, (currentUser)=>{

            if(currentUser)
            {
                setuser(currentUser);
            }else{
                setloading(false);

            }

        })

        return unsubcribe;

    },[])







    const authInfo ={
        loading, setloading,user,setuser,
        CreateAccountWithEmailAndPassword,CreateAccountWIthGoole
    }










  return (
    <MyContext.Provider value={authInfo}>
        {children}
    </MyContext.Provider>
  )
}

export default AuthContext