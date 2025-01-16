import { Button } from "@/components/ui/button";

import React from "react";
import { NavLink } from "react-router-dom";

function ShowTrainerAll({ trainers }) {
  const { availableTime, availableDays, skills, profileImage, fullName, _id } =
    trainers;
    // card degsine
    

  return (
    <div>
      <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img class="object-cover w-full h-56" src={profileImage} alt="avatar" />

        <div class="py-5 text-center">
          <p>Name : {fullName}</p>
        </div>
        <div className="flex gap-4">
          aviable Days :
          {availableDays.map((days) => (
            <p className="btn">{days}</p>
          ))}
        </div>

        <p>Aviable Time : {availableTime}</p>

        <div className="flex gap-2">
          {skills.map((item) => (
            <p className="btn">{item}</p>
          ))}
        </div>
      </div>

      <NavLink to={`/trainerDeatils/${_id}`}>Know More</NavLink>

      {/* id then use params  */}
    </div>
  );
}

export default ShowTrainerAll;
