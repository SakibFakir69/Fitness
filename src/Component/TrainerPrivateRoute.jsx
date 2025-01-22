


import UseAuth from '@/Hooks/UseAuth'
import UseTrainer from '@/Hooks/UseTrainer';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { Navigate } from 'react-router-dom';
function TrainerPrivateRoute({children}) {

    const {user,loading} = UseAuth();

    

    const {TrainerIstrainer} = UseTrainer();

    if(loading)
    {
        return <p>Loadding...</p>
    }

    if(user && TrainerIstrainer?.Trainer)
    {
        return children;
    }



  return < Navigate to='/accountpage/login'/>

}

export default TrainerPrivateRoute