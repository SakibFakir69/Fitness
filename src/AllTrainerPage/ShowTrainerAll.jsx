import { Button } from "@/components/ui/button";

import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
function ShowTrainerAll({ trainers }) {
  const {
    AvailableTime,
    AvailableDays,
    Skill,
    photo,
    fullName,
    _id,
    Name,
    Email,
    Image,
    Experience,
    Slot,
  } = trainers;
  // card degsine

  return (
    <div className="p-4">
      <Helmet>
        <title>Show Trainer</title>
      </Helmet>
      <div class="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto border ">

        <section class="bg-white dark:bg-gray-900 ">
          <div class="flex p-1 flex-col items-center transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 justify-center space-y-4 border-black  h-[550px]">

            <img
              src={Image}
              className=" h-72  p-4  border-red-400 rounded"
            />

            <div className="flex justify-start flex-col  w-full p-2">
              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                <p>Name: {Name || "Not Founeded"}</p>
              </h1>

              <div>
                <p>Experience : {Experience || "0"} Year</p>
                <p>Slot :{Slot} </p>
                <p>Email: {Email}</p>
                <p>
                  Skill:
                  {[Skill].map((item) => (
                    <span> {" " + item}</span>
                  ))}
                </p>
              </div>
            </div>

            {/* icon */}

            <NavLink
              to={`/trainerDeatils/${_id}`}
              className={"text-center flex items-center justify-center px-8 py-2 border bg-red-400 rounded text-white text-xl "}
            >
              Know More
            </NavLink>
          </div>
     

        </section>
      </div>

      {/* id then use params  */}
    </div>
  );
}

export default ShowTrainerAll;
