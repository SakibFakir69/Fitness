


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

                    console.log(result)
                    const Token = result.data.Token;
                    console.log(Token)


                    if(Token)
                    {
                        localStorage.setItem('access-token',Token)

                    }else{
                        
                    }

                })
                .catch((error)=>{
                    console.log(`error fin form`,error.code)
                })





                setuser(currentUser);
            }else{

                // remove token 
                localStorage.removeItem('access-token')
               
                setuser(null);
                setloading(false);



               

            }
           
   

        })

        return unsubcribe;

    },[])







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