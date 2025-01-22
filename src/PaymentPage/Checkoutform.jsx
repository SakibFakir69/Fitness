

import React, { useEffect, useState } from 'react'
import {
    PaymentElement,
    useStripe,
    useElements,
    CardElement
  } from "@stripe/react-stripe-js";
import UseAuth from '@/Hooks/UseAuth';
import UseAxiosPublic from '@/Hooks/UseAxiosPublic';
import { Link } from 'react-router-dom';
import { CoolMode } from '@/components/ui/cool-mode';
import { Button } from '@/components/ui/button';
import { toast, ToastContainer } from 'react-toastify';
function Checkoutform({pkprice,Slot , TrainerName,id,TrainerEmail}) {

    

    const {user} = UseAuth();

    console.log(Slot,"check out",id)
    // client screct get form backend 
    // backend api , front 2 method 

    const stripe = useStripe();
    const element = useElements();
    const [error , seterror] = useState('');
    const useaxiosPublic = UseAxiosPublic();
    const price = pkprice;
    // get price to payment 

    const [ clientSecret , setclientSecret ] = useState('')
    const [ transitionId  , settransitionId ] = useState('');



    useEffect(()=>{
        useaxiosPublic.post('/createPayment-intent',{price})
        .then
        ((res)=>{
            setclientSecret(res.data.clientSecret)
        })


    },[useaxiosPublic])


    if(!stripe || !element)
    {
        return 
    }

    // need 
    // create payment method
    // confirm method 
    /// client secrect 
    // post api 

    const paymentButton = async (event)=>{
        console.log("payment button clcked")
        event.preventDefault();
        const card = element.getElement(CardElement);

        const {errorx , paymentMethod } = await stripe.createPaymentMethod({
            type:'card',
            card,

        })
        if(errorx)
        {
            seterror(errorx.messgae)
        }else{
            seterror('');
        }
        // create payment method

    


   

        event.preventDefault();
        if(element==null)
        {
            return ;
        }

        // confirm payment method

        const {error , paymentIntent } = await stripe.confirmCardPayment(clientSecret, {

            payment_method:{
                card:card,
                billing_details:{
                    name:user?.name,
                    email:user?.email
                    // user details 
                }

            }

        })
        // get error 

        if(error)
        {
            seterror(error.message);
            return ;

        }
        if(paymentIntent &&  paymentIntent.status==='succeeded')
        {
            
      
            settransitionId(paymentIntent.id)

            // save info on data base 

            const infoOfUser ={
                Name : user?.displayName,
                Email : user?.email ,
                TransictionID : transitionId,
                amount:pkprice,
                Time : new Date(),
                Slot: Slot,
            }
            useaxiosPublic.post('/paymentOfuser', infoOfUser)
            .then((res)=>{
                toast.success("Payment done!")
            })
            .catch((error)=>{
                console.log("error from ck from",error.name)
            })

            // create c post for 


            // here use post req for get user who booked class 

            const info={
                Name : user?.displayName,
                Email: user?.email,
                Time : new Date(),
                Slot : Slot ,
                TrainerName: TrainerName,
                TrainerEmail:TrainerEmail,
                id:id,

            }

            useaxiosPublic.post('/bookedslotByuser',info)
            .then((res)=>{
                console.log(info);
          
                console.log("booked user info done")
            })
            .catch((error)=>{
                console.log('we founed error on ', error.message)

            })

            // trainer update

            useaxiosPublic.put(`/bookedcollection/${id}`,{email:user?.email})
            .then((res)=>{
      
            })
            .catch((error)=>{
                alert(error.message)
            })

        }




    }





  return (
    <div>
        <form onSubmit={paymentButton}>
            <h1 className='text-xl text-center'>Confirm your payment</h1>
            <hr className='mb-4'/>
            <ToastContainer/>
            <CardElement>

            </CardElement>

            

          <div className='mt-4 '>
          <CoolMode >
                <Button>Pay</Button>
            </CoolMode>
          </div>
            
        </form>


        {transitionId && (<div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg w-full">
          <h3 className="font-semibold">Payment Successful!</h3>
          <p>Transaction ID: {transitionId}</p>

          <Link to={'/'} className='flex justify-center btn'>Go back home</Link>
          </div>
          )
        }

    </div>
  )
}

export default Checkoutform