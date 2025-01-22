import UseAlluser from "@/Hooks/UseAlluser";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import React from "react";
import { Helmet } from "react-helmet";
function AllUser() {
  const { isLoading, error,refetch, allUser } = UseAlluser();

  // we need make firt make admin then
  //

  const useaxiosPublic = UseAxiosPublic();

  if(isLoading)
  {
    return <p>Loading ...</p>
  }


  const MakeAdmin = (user)=>{
    useaxiosPublic.patch(`/userMakeAdmin/${user._id}`)
    .then((res)=>{
        if(res.data.modifiedCount>0)
        {
            alert("done")
        }
        refetch();
    })
    console.log("make admin clicked",user)

  }

  return (
    <div>
      
      <Helmet>
        <title>All User</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-semibold text-center">
          List of All Users
        </h2>
      </div>

      {/*
       */}

      <section>
        {/* {
                allUser.map((item,key)=>)
                   
              
            } */}

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role </th>
              </tr>
            </thead>
            <tbody>

              {
                allUser?.map((item,key)=>
                    <tr key={key}>
                <th>{key+1}</th>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>
                    <button className="btn" onClick={()=>MakeAdmin(item)}>{item.role==='admin' ? <p>g</p> : <p>Make Admin</p>}</button>
                </td>
              </tr>
        )
              }
         
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AllUser;
