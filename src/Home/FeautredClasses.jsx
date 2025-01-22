import UseAllTrainer from "@/Hooks/UseAllTrainer";
import React, { useEffect } from "react";

import Top6bookingClass from "@/Hooks/Top6bookingClass";

function FeautredClasses() {


  const {isLoading, top6class} = Top6bookingClass();
  console.log(top6class, "class");

  // title des ,booking

  if(isLoading)
  {
    return <p>Loading.....</p>
  }

  return (
    <div>
      
      class
      {top6class.length}

  


    </div>
  );
}

export default FeautredClasses;
