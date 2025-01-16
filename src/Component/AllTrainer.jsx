

import ShowTrainerAll from '@/AllTrainerPage/ShowTrainerAll';
import UseAllTrainer from '@/Hooks/UseAllTrainer'
import UseAxiosPublic from '@/Hooks/UseAxiosPublic'

import React from 'react'

function AllTrainer() {

    const {isLoading, error,isError,TrainerData} = UseAllTrainer();


    if(isLoading)
    {
        return <p>Loadin...</p>
    }
    console.log(TrainerData);



  return (
    <div>
  
        <p>Trainer  {TrainerData.length} </p>


        {
            TrainerData.map((item)=><ShowTrainerAll trainers={item} key={item._id}/>)
        }



    </div>
  )
}

export default AllTrainer