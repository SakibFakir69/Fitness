import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(
  "pk_test_51QfISB04b3lLFARwOBTLW4CymbOx7pP3fLso9QZgVqb5jtYmhCfzKMBX4WmOz9aFqFDSyRXWhmGF70eehQD1Gfj300S6ZwCUK0"
);
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import UseAuth from "@/Hooks/UseAuth";
import { Helmet } from "react-helmet";

function Payment() {
  // incrase class booking
  // TODO :
  // need class colection
  const { user } = UseAuth();
  console.log(user);

  const location = useLocation();
  const { packageName, price, TrainerName,Slot,id ,TrainerEmail } = location.state || {};
  // get use state
  /// state ={{"name",price}}
  

  return (

    // server -> paymentintents-> secert_key 
    ///client -> payment method , confirme method ,
    /// api fetch ,
    // serect key , publish key 



    <div className="w-full flex flex-col gap-4 px-4 py-24 bg-stone-200">
      <Helmet>
        <title>Payment </title>
      </Helmet>
      <div className="border text-center mt-4 bg-white rounded-md p-4">

        <p className="text-xl font-semibold">TrainerName : {TrainerName}</p>
        <p>TrainerEmail:{TrainerEmail}</p>
        <p>Package Name : {packageName}</p>
        <p>Price : {price}</p>
        <p>Slot : {Slot} </p>
        <p>My info </p>
        <p>Name : {user?.displayName  }</p>
        <p>Email : {user?.email}</p>
      </div>

      <Elements stripe={stripePromise}>

        <Checkoutform pkprice={price}  TrainerName={TrainerName} id={id} Slot={Slot} TrainerEmail={TrainerEmail}/>
      </Elements>
    </div>
  );
}

export default Payment;
