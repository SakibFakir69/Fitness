import UseAllTrainer from "@/Hooks/UseAllTrainer";
import UseAuth from "@/Hooks/UseAuth";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
// icons
import { RxCross1 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
function UserBookedTrainer() {
  // show booked trainer

  const { user } = UseAuth();

  const { isLoading, error, isError, TrainerData, refetch } = UseAllTrainer();

  const [trainerList, settrainerList] = useState([]);

  useEffect(() => {
    const filterData = TrainerData.filter((item) =>
      item?.emails?.includes(user?.email)
    );

    console.log(filterData, "f");
    settrainerList(filterData);
  }, [user, TrainerData]);

  console.log(trainerList, "user booked");

  const useaxiosPublic = UseAxiosPublic();

  const reviewref= useRef()
  const {Image, Name, Email } = TrainerData;

  const reviewButton = (name, email , image) => {
    alert("review button pressed");

    if(!reviewref.current.value){
      toast.error("Enter your review")
      return ;
    }

    const reviewbyuser={
      Name :name,
      Email: email,
      Image: image,
      Review:reviewref.current.value
    }
    console.log(reviewbyuser);






    useaxiosPublic.post("/reviews",reviewbyuser)
    .then((res)=>{
      console.log(res)
      alert("done")

    })
    .catch((error)=>{
      console.log("this error got form review ")
    })
  };

 
  return (
    <div className="px-4 w-full">
      <div>
        <h2 className="text-4xl text-center mb-4">Your booked trainer</h2>
      </div>
      <ToastContainer/>

      <section className="flex justify-center">
        {trainerList.map((item, key) => (
          <div className=" md:w-80  relative overflow-hidden group cursor-pointer rounded-md">
            {/*  image  */}
            <img
              src={item.Image}
              alt="animated_card"
              className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
            />

            {/*  text  */}
            <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
              <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">
                {item.Name}
              </h1>
              <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
                Experience: {item.Experience}
              </p>

              <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
                Email :{item.Email}
              </p>
              <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
                slot: {item.Slot+  " "} 
              </p>
              <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
                Class :{item.Skill + " "}
              </p>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Review
              </button>
              <dialog id="my_modal_1" className="modal bg-blue-500">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Welcome</h3>
                  <p className="py-4">Enter your Feedback about this trainer</p>

                  <div class="w-full mt-4">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Review
                    </label>

                    <textarea
                    ref={reviewref}
                      class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>

                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn" onClick={()=>reviewButton(item.Name, item.Email , item.Image)}>Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>

            {/*  bottom shadow  */}
            <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default UserBookedTrainer;
