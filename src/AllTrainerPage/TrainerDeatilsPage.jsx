import React from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";

function TrainerDeatilsPage() {
  const { id } = useParams();
  const useaxiosPublic = UseAxiosPublic();

  const {
    isLoading,
    error,
    data: Trainer = [],
  } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const res = await useaxiosPublic.get(`/trainerDetails/${id}`);
      return res.data;
    },
  });
  console.log(Trainer, "details");

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const { fullName , photo ,
    availableDays
      } = Trainer[0];
  console.log(fullName);

  return (
    <div className="w-full mt-10 border px-1">

      <section className="w-10/12  flex flex-col justify-center md:ml-20 ml-16 
       bg-gradient-to-r from-violet-500 to-violet-400 
      
      
      
       rounded-md p-4 h-[100px] ">
        <h2 className="md:text-4xl sm:font-semibold text-center text-2xl font-semibold">
          Trainer Information and Schedule

          {/* text style */}
        </h2>

        {/*  */}

        <div className=" flex justify-center">
          <div
            className="flex gap-6 justify-around w-4/5   absolute top-48 h-[140px] rounded-md 
          bg-gradient-to-tr from-blue-100 to-blue-200"
          >
            {/* <h2>Trainer info</h2> */}
            <div>
              <h2>Trainer info</h2>
              <div>
                <p>{fullName || "not founded"}</p>
              </div>
            </div>

            {/* slot */}
            <div>
              <h2>Available slots</h2>
             <div className="flex gap-2">
             {
                availableDays.map((days)=> <NavLink to={'/trainerbook'}>{days}</NavLink>)
              }
             </div>
            </div>
          </div>
        </div>
      </section>
      {/* Share your expertise and help others by becoming a certified trainer today! Want to Become a Trainer? */}


      <section className="flex justify-center items-center mt-60  border">

        <div className="border-black px-4 flex flex-col text-center bg-red-200 p-10 space-y-5">
          
          <h2 className="lg:text-4xl font-semibold sm:text-2xl">Want to Become a Trainer?</h2>

          <p className="text-gray-400">Share your expertise and help others by becoming a certified trainer today!</p>

          <NavLink className={'btn'} to={'/becomeatrainer'}>Become a Trainer</NavLink>

          

        </div>



  
      </section>



    </div>




    
  );
}

export default TrainerDeatilsPage;
