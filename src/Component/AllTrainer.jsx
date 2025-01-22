import ShowTrainerAll from "@/AllTrainerPage/ShowTrainerAll";
import UseAllTrainer from "@/Hooks/UseAllTrainer";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";

import React from "react";
import { Helmet } from "react-helmet";

function AllTrainer() {
  const { isLoading, error, isError, TrainerData } = UseAllTrainer();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(TrainerData);

  return (
    <div className="mt-6 px-4">

      <Helmet>
        <title>All Trainer</title>
      </Helmet>


      <div className="flex justify-center items-center mb-6 flex-col space-y-3 bg-violet-500 p-4 rounded-md">
        <h2 className="sm:text-4xl sm:font-semibold text-xl text-white">Meet Our Trainers</h2>
        <p className="text-gray-200">Our trainers are here to inspire, guide, and support you on your journey. Browse their profiles to find the perfect match for your learning needs.</p>
      </div>


      <div className="grid md:grid-cols-3 gap-4 bg-gradient-to-b from-violet-300 p-4 to-indigo-500">
      {TrainerData?.map((item) => (
        <ShowTrainerAll trainers={item} key={item._id} />
      ))}

      </div>

    </div>
  );
}

export default AllTrainer;
