import UseAuth from "@/Hooks/UseAuth";
import React, { useState } from "react";
import Auth from "@/Firebase/Config";
import { toast, ToastContainer } from "react-toastify";

import { updateProfile } from "firebase/auth";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import UserData from "@/Hooks/UserData";
import { Helmet } from "react-helmet";

function ProfilePage() {

    const {userData} = UserData();
    // const {_id} = userData;
    console.log(userData,"pro")



  const { user } = UseAuth();
  console.log(user,"prile");
  const useaxiosPublic = UseAxiosPublic();

  // update database

  const [displayName, setdisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setemail] = useState(user?.email || "");

  const updateProfilebutton = async () => {
    updateProfile(Auth.currentUser, {
      displayName,
      photoURL,
      email,

   
    })
      .then((res) => {
        alert("update done");

        const userUpdateinfo={
            Name:displayName,
            Email:email,
            LastLogin: user?.metadata?.lastSignInTime,

        }

        useaxiosPublic.put(`/userupdate/${userData?._id}`,userUpdateinfo)
        .then((res)=>{
            alert("succesfully added to database")
        })
        .catch((error)=>{
            console.log("error founede on profile")
        })



      })
      .catch((error) => {
        alert(error.message);
        console.log(error.code);
      });

    toast.success("update done");
    alert("ok");
  };

  return (
    <div className="w-full border h-screen bg-red-200">
          <Helmet>
        <title>Profile</title>
      </Helmet>
      <section className="flex justify-center  mt-10 ">
        <ToastContainer />
        <div className="bg-white rounded-md shadow-md min-w-[60%] px-4 py-8 flex items-center justify-center flex-col">
          <img
            src={user?.photoURL || "Not founed"}
            alt=" not found"
            className="w-[100px] h-[100px] rounded-full object-cover border"
          />

          <h1 className="text-[1.3rem] font-[500] leading-[24px] mt-4">
           Name: {user?.displayName || "not founeded"}
          </h1>
          <p className="text-[0.9rem] text-gray-500 font-[400]">
           Email: {user?.email}
          </p>
          <p>Last Login : {user?.metadata?.lastSignInTime}</p>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="py-1.5 mt-3 px-6 border border-blue-500 rounded-md text-blue-500"
          >
            Update info
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box ">
              <div className="">
                <input
                  className="border  px-6 py-2 rounded-md focus:bg-black focus:text-white"
                  onChange={(e) => setdisplayName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <input
                  className="border  px-6 py-2 rounded-md focus:bg-black focus:text-white"
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />

                <input
                  className="border  px-6 py-2 rounded-md focus:bg-black focus:text-white"
                  onChange={(e) => setPhotoURL(e.target.value)}
                  type="url"
                  name="url"
                  value={user?.photoURL}
                  placeholder="Enter your photoURl"
                />
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={updateProfilebutton}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
