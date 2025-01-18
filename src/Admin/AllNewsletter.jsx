



import UseallNewsLetter from '@/Hooks/UseallNewsLetter'
import React from 'react'

function AllNewsletter() {

  const {isLoading,allnewsletter} = UseallNewsLetter();
  console.log(allnewsletter);

  if(isLoading)
  {
    return <p className='text-center'>Loading....</p>
  }

  // add icon on dashboard 
  // input full na koral submit hobba na 
  /// improve loding and degsine


  return (
    <div className='bg-indigo-200 h-screen'>
      <div>
        <h2 className='sm:text-4xl font-semibold text-center '>Complete List of Newsletter Subscribers</h2>
        <p className='text-center'>Total : {allnewsletter.length}</p>
      </div>
      <div className="overflow-x-auto">
  <table className="table mt-4">
    <hr/>
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
 
      </tr>
    </thead>
    <tbody>
      {
        allnewsletter.map((item,key)=>   
        <tr>
          <th>{key+1}</th>
          <td>{item.Name || "not founded"}</td>
          <td>{item.email}</td>
       
        </tr>
  )
      }
     
    </tbody>
  </table>
</div>

    
    
    
    </div>
  )
}

export default AllNewsletter