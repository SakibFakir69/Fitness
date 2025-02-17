import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import { Helmet } from "react-helmet";

function TrainerDeatilsPage() {

  /// booking onujay user add 
  // booking collection 
  // filter and show user trainer 
  /// user.email === trainer.booked.email 
  /// send trainer and details 

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

  const {
    fullName,
    photo,
    Availabledays=[],
    Name,
    Image,
    Email,
    Skill=[],
    Availabletime=[],
    _id,
    Slot=[]
  } = Trainer[0];
  console.log(fullName);
  console.log(Slot,"thisis slot");

  // about me
  // dmatrial status
  /// education
  //// Trainer name
  ///Selected slot
  ///Classes

  return (
    <div className="w-full mt-10 r px-1">
      <Helmet>
        <title>Trainer Details page</title>
      </Helmet>
      <section
        className="w-10/12  flex flex-col justify-center md:ml-20 ml-16 
       bg-gradient-to-r from-violet-500 to-violet-400 
      
      
      
       rounded-md p-4 h-[100px] "
      >
        <h2 className="md:text-4xl sm:font-semibold text-center text-2xl font-semibold">
          Trainer Information and Schedule
        </h2>
      </section>

      {/* deatils */}

      <section className=" w-full md:flex md:justify-around mt-4 border-dashed border-2 shadow-sm rounded-md hover:bg-indigo-400 duration-200 gap-4   ">
        <div className="w-10/11">
          <div className="text-center">
            <h2>Trainer info</h2>
          </div>

          <div className="border w-full flex items-center justify-center ">
            <hr className="mb-4" />
            <div>
              <div>
                {/* info  */}
                <img src={Image} className="w-20 rounded-md" />
                <p>
                  {" "}
                  <span className="text-xl">Name </span>: {Name}
                </p>

                <p>
                  <span>Email : {Email}</span>
                </p>

                <p className="flex gap-2 ">
                  {" "}
                  <p className="text-2xl">Skill</p>
                  {Skill.map((item, key) => (
                    <span
                      className="border p-1 bg-black text-white rounded-md hover:bg-transparent backdrop-blur-xl cursor-pointer"
                      key={key}
                    >
                      {" " + item}
                    </span>
                  ))}
                </p>
               
              </div>
            </div>
          </div>
        </div>

        {/* slot */}
        <div className="md:mt-14 w-10/11">
          <div className="border flex flex-col justify-center items-center w-full">
            <div className="flex p-2 cursor-pointer">
              <h2>Slot:</h2>
              {
                 Slot?.map((item,key)=>(  <NavLink 
                  key={key}
                  // data pasing using state 
                  state={{Class:Skill ,Slot:item ,TrainerName:Name,id:_id,TrainerEmail:Email}}
                    to={`/trainerbook/${_id}`}
                    className="ml-2 border p-1 rounded-md bg-lime-500"
                  >
                    {item}
                  </NavLink>))
              }
            </div>
            <hr className="mb-4" />
            {/* time  */}
            <p>
              <span className="text-xl">Availabledays :</span>
              {Availabledays.map((item, key) => (
                 <NavLink 
          
                 // data pasing using state 
              
                   className="ml-2 border p-1 rounded-md bg-lime-500"
                 >
                   {item?.value || item?.label}
                 </NavLink>
               

              ))}
            </p>
            {/* time */}

            <p className="mt-4">
              <span className="text-xl">Time :</span>
              {Availabletime.map((item, key) => (
                <span className="border ml-2 p-1 rounded-md bg-purple-300 ">
                  {item}
                </span>
              ))}
            </p>

            {/* available slot */}
         
          </div>
        </div>
      </section>

      {/* Share your expertise and help others by becoming a certified trainer today! Want to Become a Trainer? */}

      <section className="flex justify-center items-center mt-60  ">
        <div className="border-black px-4 flex flex-col text-center bg-red-200 p-10 space-y-5">
          <h2 className="lg:text-4xl font-semibold sm:text-2xl">
            Want to Become a Trainer?
          </h2>

          <p className="text-gray-400">
            Share your expertise and help others by becoming a certified trainer
            today!
          </p>

          <NavLink className={"btn"} to={"/becomeatrainer"}>
            Become a Trainer
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default TrainerDeatilsPage;
