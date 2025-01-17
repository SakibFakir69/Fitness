


import UseAllTrainer from '@/Hooks/UseAllTrainer'
import React from 'react'

function AllTrainersAdmin() {

  const {isLoading, error,isError,TrainerData} = UseAllTrainer();


  return (
    <div>AllTrainersAdmin {TrainerData.length}</div>
  )
}

export default AllTrainersAdmin