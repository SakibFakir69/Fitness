import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(
  "pk_test_51QfISB04b3lLFARwOBTLW4CymbOx7pP3fLso9QZgVqb5jtYmhCfzKMBX4WmOz9aFqFDSyRXWhmGF70eehQD1Gfj300S6ZwCUK0"
);
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import UseAuth from "@/Hooks/UseAuth";

function Payment() {
  // incrase class booking
  // TODO :
  // need class colection
  const { user } = UseAuth();
  console.log(user);

  const location = useLocation();
  const { packageName, price, TrainerName } = location.state || {};
  // get use state
  /// state ={{"name",price}}

  return (
    <div>
      <div>
        <p>TrainerName : {TrainerName}</p>
        <p>Package Name : {packageName}</p>
        <p>Price : {price}</p>
        <p>My info :</p>
        <p>Name : {user?.displayName || "not founed"}</p>
        <p>Email : {user?.email}</p>
      </div>

      <Elements stripe={stripePromise}>
        <Checkoutform pkprice={price} />
      </Elements>
    </div>
  );
}

export default Payment;
