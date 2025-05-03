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
    AvailableDays = [],
    AvailableTime,
    Name,
    Image,
    Email,
    Skill = [],

    _id,
    Time,
    Slot = [],
  } = Trainer;
  console.log(fullName);
  console.log(Trainer.result, "thisis slot");

  // about me
  // dmatrial status
  /// education
  //// Trainer name
  ///Selected slot
  ///Classes

  return (
    <div className="w-full  r px-1 py-24 bg-stone-200 justify-center items-center mx-auto min-h-screen ">
      <Helmet>
        <title>Trainer Details page</title>
      </Helmet>

      <section className="p-2 rounded-md flex w-full justify-center ">
        <section className=" md:w-3/5 w-4/5 md:justify-around mt-4  shadow-sm rounded-md  duration-200 gap-4  bg-white  flex  ">

          <div className="w-full rounded ">
            <div className=" w-full flex items-center justify-center flex-col p-6 ">
              <div className="flex justify-start  w-full">
                <div className="w-full">
                  {/* info  */}
                  <img src={Image} className=" rounded-md h-52 w-full min-h-80" />

                  <p className="mt-2">
                    {" "}
                    <span className="text-xl">Name </span> {Name}
                  </p>

                  <p>
                    <span className="text-xl">Email  {Email}</span>
                  </p>

                  <p className="flex gap-2 ">
                    {" "}
                    <p className="text-xl">Skill</p>
                    {Skill.map((item, key) => (
                      <span
                        className=" p-1 text-green-500 rounded-md  backdrop-blur-xl cursor-pointer"
                        key={key}
                      >
                        {" " + item}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="md:mt-6 w-full">
                <div className=" flex flex-col justify-start w-full">
                  <div className="flex p-2 cursor-pointer">
                    {Slot?.map((item, key) => (
                      <div key={key} className="flex flex-col">
                        <div
                          className="border m-2 p-2 rounded-sm text-white bg-indigo-600
                        
                        
                        "
                        >
                          {item + ""}{" "}
                        </div>

                        <NavLink
                          key={key}
                          // data pasing using state
                          state={{
                            Class: Skill,
                            Slot: item,
                            TrainerName: Name,
                            id: _id,
                            TrainerEmail: Email,
                          }}
                          to={`/trainerbook/${_id}`}
                          className="ml-2 border p-1 rounded-md text-center mt-2 bg-lime-600 text-white"
                        >
                          Join
                        </NavLink>
                      </div>
                    ))}
                  </div>
                  <hr className="mb-4" />

                  <p className=" w-full">
                    <span className="text-xl ">Availabledays </span>

                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {AvailableDays.map((item, key) => (
                        <button
                          // data pasing using state

                          className="ml-2 border p-1 rounded-md bg-violet-500 text-white "
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </p>
                  {/* time */}

                  <p className="mt-4">
                    <span className="text-xl">Time :</span>
                    {AvailableTime.map((item, key) => (
                      <span className="border ml-2 p-1 rounded-md bg-stone-950 text-white ">
                        {item}
                      </span>
                    ))}
                  </p>

                  {/* available slot */}
                </div>
              </div>
            </div>
          </div>

          {/* slot */}
        </section>
      </section>
      {/* Share your expertise and help others by becoming a certified trainer today! Want to Become a Trainer? */}

      <section className="flex justify-center items-center mt-60  rounded ">

        <div className="border-black px-4 flex flex-col text-center bg-violet-500  p-10 space-y-5">
          <h2 className="lg:text-4xl font-semibold sm:text-2xl">
            Want to Become a Trainer?
          </h2>

          <p className="text-white">
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
