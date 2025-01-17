


import React, { createContext, useEffect, useState } from 'react'
import Auth from '../Firebase/Config';
import { createMemoryRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useaxiosSecure } from '@/Hooks/UseAxiosSecure';
import UseAxiosPublic from '@/Hooks/UseAxiosPublic';

export const MyContext = createContext();

function AuthContext({children}) {

    const [ loading , setloading ] =useState (true);
    const [ user , setuser ] = useState(null);

    const useaxiosPublic =UseAxiosPublic();


    // create reg with 

    const CreateAccountWithEmailAndPassword = (email , password)=>{
        return createUserWithEmailAndPassword(Auth, email,password);
    }

    const Googleprovider = new GoogleAuthProvider();

    const CreateAccountWIthGoole = ()=>{

        return signInWithPopup(Auth,Googleprovider)


    }
    // logout

    const logoutButton = ()=>{
        return signOut(Auth)
    }

    // log in


    const LoginWithemailAndPassword= (email , password)=>{

        return signInWithEmailAndPassword(Auth, email,password);


    }
    const loginWithgoogleprovider = ()=>{
        return signInWithPopup(Auth,Googleprovider);
    }










    // onauth change 

    useEffect(()=>{

        const unsubcribe = onAuthStateChanged(Auth, (currentUser)=>{

            if(currentUser)
            {
                /// store token locastroage 
                const userInfo = {email: currentUser.email};
                // decode jwt 

                useaxiosPublic.post('/signin',userInfo)
                .then((result)=>{
                    if(result.data.token)
                    {
                        localStorage.setItem('access-token',result.data.token)

                    }

                })





                setuser(currentUser);
            }else{

                // remove token 
                localStorage.removeItem('access-token')


                setloading(false);

            }

        })

        return unsubcribe;

    },[useaxiosPublic])







    const authInfo ={
        loading, setloading,user,setuser,
        CreateAccountWithEmailAndPassword,CreateAccountWIthGoole,
        logoutButton ,loginWithgoogleprovider,LoginWithemailAndPassword
    }










  return (
    <MyContext.Provider value={authInfo}>
        {children}
    </MyContext.Provider>
  )
}

export default AuthContext