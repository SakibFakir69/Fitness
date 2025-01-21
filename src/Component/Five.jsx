import Use5trainer from "@/Hooks/Use5trainer";
import UseSptrainer from "@/Hooks/UseSptrainer";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Five() {
  const { fiveTrainer } = Use5trainer();
  console.log(fiveTrainer, "datra");

  return (
    <div className="grid sm:grid-cols-2 gap-6 px-4 items-center justify-self-center mx-auto w-full border">


      {fiveTrainer?.map((item, key) => (
        <div
          key={key}
          className="border p-4 rounded-md shadow-xl hover:shadow-2xl hover:shadow-gray-400 flex justify-center"
        >
          <div>
            <div>
              <img src={item.Image} className="w-1/2"/>
            </div>
            <div>
              <p>specialize : {item.Name}</p>
              <p>{item.Description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Five;
