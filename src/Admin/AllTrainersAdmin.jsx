


import UseAllTrainer from '@/Hooks/UseAllTrainer'
import UseAxiosSecure, { useaxiosSecure } from '@/Hooks/UseAxiosSecure';
import React from 'react'

function AllTrainersAdmin() {

  const {isLoading, error,isError,TrainerData,refetch} = UseAllTrainer();

  // make a button for trainer to memebr 
  // demote 
  // role replace with ""

  const useaxiosSecure =UseAxiosSecure();


  const demoetButton = (id,index)=>{
    console.log(id[index]);

    // perform put opration for trainer 

    // query 
    const idMain = id[index]._id;

    useaxiosSecure.put(`/alltrainerAdmindemote/${idMain}`)
    .then((res)=>{
      if(res.data.modifiedCount >0)
      {
        alert("done")
      }
      refetch();
    })
    .catch((error)=>{
      console.log("got error on alltrainer admin",error.name);
    })




    


    


  }



  return (
    <div className='bg-violet-300 h-screen'>
      <div className='text-center'>
        <h2 className='sm:text-4xl font-semibold'>Manage All Trainers</h2>
        <span>Toal Trainer : {TrainerData.length}</span>
      </div>

      {/* show trainer  */}

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        TrainerData.map((item,key)=>
          <tr>
        <th>{key+1}</th>
        <td>{item.Name || item.fullName}</td>
        <td>{item.Email}</td>
        <td>{item.role}</td>
        <td>
          <button onClick={()=>demoetButton(TrainerData,key)} className='btn btn-warning'>Demote</button>


        </td>
      </tr>
   )
      }
      
    </tbody>
  </table>
</div>
    
    
    
    </div>
  )
}

export default AllTrainersAdmin