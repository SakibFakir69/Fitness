import ShowTrainerAll from "@/AllTrainerPage/ShowTrainerAll";
import UseAllTrainer from "@/Hooks/UseAllTrainer";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";

import React from "react";
import { Helmet } from "react-helmet";

function AllTrainer() {
  const { isLoading, error, isError, TrainerData } = UseAllTrainer();

  if (isLoading) {
    return (
      <div className="py-32 flex w-full justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  console.log(TrainerData);

  return (
    <div className=" ">
      <Helmet>
        <title>All Trainer</title>
      </Helmet>

      <div className="grid md:grid-cols-3 gap-4 bg-stone-200 py-24">
        {TrainerData?.map((item) => (
          <ShowTrainerAll trainers={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default AllTrainer;
