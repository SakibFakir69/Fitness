import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

function UseSptrainer() {

  const useaxiosPublic = UseAxiosPublic();

  const { isLoading, data: spTrainer=[]} = useQuery({

    queryKey: ["data"],
    queryFn: async () => {
      const res = await useaxiosPublic.get("/spTrainer");
      return res.data;
    },
  });
  console.log(spTrainer,"sptrainer");
  



  return {isLoading,spTrainer};
}

export default UseSptrainer;
