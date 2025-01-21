import UseAuth from "@/Hooks/UseAuth";
import UseAxiosSecure, { useaxiosSecure } from "@/Hooks/UseAxiosSecure";
import Usebooked from "@/Hooks/Usebooked";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
function ManageSlot() {
  // slot jokon add korba oi time , user data store kora rakbo
  // tr por show korabo

  const { booked, refetch } = Usebooked();
  const { user } = UseAuth();

  /// trainer name ===
  /// useremail

  const [bookeduser, setbookeduser] = useState([]);

  useEffect(() => {
    const filterBooked = booked?.filter((item) =>
      item?.TrainerEmail?.includes(user?.email)
    );
    setbookeduser(filterBooked);
  }, [booked, user?.email]);
  console.log(booked);
  const useaxiosSecure = UseAxiosSecure();

  const deleteSlotButton = (id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {

      if (result.isConfirmed) {
        useaxiosSecure
          // .delete(`/deltebookedslot/${id}`)
          // .then((res) => {
          //   Swal.fire({
          //     title: "Deleted!",
          //     text: "Your file has been deleted.",
          //     icon: "success",
          //   });
          //   console.log(res);
          // })
          // .catch((error) => {
          //   console.log(error.message);
          // });
          // refetch;
      }
    }).catch((error)=>{
      alert(error.name)
    })
  };

  console.log(bookeduser);

  return (
    <div className="px-3">
      <h2 className="md:text-3xl font-semibold">
        Total booked : {bookeduser?.length}
      </h2>

      <section className="grid md:grid-cols-3  place-items-center">
        {bookeduser?.map((item, key) => (
          <div key={key} className="border p-4 rounded-md bg-green-300">
            <p>
              Slot Name : {item.Slot}{" "}
              <button onClick={() => deleteSlotButton(item.id)} className="btn">
                Delete{" "}
              </button>
            </p>
            <p>User who booked</p>
            <div>
              <p>Name: {item.Name}</p>
              <p>Email : {item.Email}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ManageSlot;
