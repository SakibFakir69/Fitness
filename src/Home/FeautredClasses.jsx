import UseAllTrainer from "@/Hooks/UseAllTrainer";
import React, { useEffect } from "react";

import Top6bookingClass from "@/Hooks/Top6bookingClass";

function FeautredClasses() {
  const { isLoading, top6class } = Top6bookingClass();
  console.log(top6class, "class");

  // title des ,booking

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="mb-6">
      <div>
        <h2>Top booking class</h2>
      </div>

      <section className="grid md:grid-cols-3 px-4 gap-5">
      {top6class.map((item, key) => (

<div key={key} className="border px-4 rounded-md bg-gradient-to-t from-blue-400 to-red-400 text-center p-6"> 
  <p>Class Name : {item.Skill}</p>
  <p>Experience : {item.Experience}</p>
  <p>Email : {item.Email}</p>
  <p>Booking Count : {item.bookingCount || "0"
  }</p>
</div>
))}
      </section>

  
    
      
    </div>
  );
}

export default FeautredClasses;
