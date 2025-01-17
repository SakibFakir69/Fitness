import ShineBorder from "@/components/ui/shine-border";
import UseAxiosSecure, { useaxiosSecure } from "@/Hooks/UseAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function AppliedTrainerDetailsPage() {

  const useaxiosSecure = UseAxiosSecure();

  const { id } = useParams();
  const goAlltrainer = useNavigate();

  const {
    isLoading,
    error,
    data: appliedTrainerDetails=[],
  } = useQuery({
    queryKey: ["appliedTrainer"],
    queryFn: async () => {
      const res = await useaxiosSecure.get(`/appliedtrainerdetailspage/${id}`);
      return res.data;
    },
  });
  console.log(appliedTrainerDetails);







  const {
    Name,
    Experience,
    Availabledays,
    Availabletime,
    Email,
    Image,
    Skill,
    Status,
  } = appliedTrainerDetails[0] || {};
  // add phone number
  // education

  /// useMutaion 
  /// fn, onsuc, onerr
  const AccpectButton = useMutation({
    mutationFn : async ()=>{
        await useaxiosSecure.put(`/accpecttrainer/${id}`)
    },
    onSuccess: ()=>{
        alert('trainer accpected')
        goAlltrainer('/admindashboard/appliedtrainer')
    },
    onError: (error)=>{
        alert('error ', error.message)
    }

  })

   // reject button 

   const RejectButton = useMutation({
    mutationFn: async ()=>{
        await useaxiosSecure.delete(`/appliedreject/${id}`)
        

    },
    onSuccess :()=>{
        alert('deleted')
    }
    ,
    onError:(error)=>{
        alert('error deleted' , error.message)
    }
   })

   if (isLoading) {
    return <p>Loading....</p>;
  }


   // applieda accpect go to all trainer 




  return (
    <div className="">
      <div>
        <h2 className="sm:text-4xl sm:font-bold font-semibold text-2xl text-center">
          Trainer Application Details
        </h2>
      </div>

      {/* show details */}

      <section className="flex w-full justify-center mt-3">
        <ShineBorder>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
          
              <img src={Image}
                alt="product image"
                className="h-[350px] flex justify-center  rounded-md"
              />
         
            <div class="px-5 pb-5">
             

              <div class="flex items-center mt-2.5 mb-5">
              

              
               
              </div>
              {/* button  */}
              <div class="flex items-center justify-between">
             <button className="btn btn-success" onClick={AccpectButton.mutate}>Accpect</button>
               
                 <button className="btn btn-warning" onClick={RejectButton.mutate} >Reject</button>
              
              </div>
            </div>
          </div>
        </ShineBorder>
      </section>
    </div>
  );
}

export default AppliedTrainerDetailsPage;
