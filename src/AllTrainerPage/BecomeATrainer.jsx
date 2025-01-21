import UseAuth from "@/Hooks/UseAuth";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Image_hostin_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


function BecomeATrainer() {

  const {user} = UseAuth();

  const goHome = useNavigate();







  // helet

  const [ skill , setskill ] = useState([]);
  const [ days , setdays ] = useState([]);
  const [ time , settime ] = useState([]);
  // e.target.value
  /// use map 

  const useaxiosPublic = UseAxiosPublic();




  const skillOptions = [
    { value: "yoga", label: "Yoga" },
    { value: "pilates", label: "pilates" },
    { value: "cardio", label: "cardo Training" },
    { value: "strength_training", label: "Strength Training" },
    { value: "weightlifting", label: "Weightlifting" },
    { value: "flexibility", label: "Flexibility Training" },
    { value: "personal_training", label: "Personal Training" },
    { value: "nutrition", label: "Nutrition Coaching" },
    { value: "aerobics", label: "Aerobics" },
    { value: "zumba", label: "Zumba" },
    { value: "endurance", label: "Endurance Training" },
    { value: "martial_arts", label: "Martial Arts" },
    { value: "boxing", label: "Boxing" },
    { value: "crossfit", label: "CrossFit" },
    { value: "cycling", label: "Cycling" },
    { value: "swimming", label: "Swimming" },
    { value: "running", label: "Running" },
    { value: "dance", label: "Dance Fitness" },
    { value: "mobility", label: "Mobility Training" },
    { value: "rehabilitation", label: "Rehabilitation Training" },
  ];

  // days

  const Days = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];
  const AvailableTimes = [
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "09:10 AM", label: "09:10 AM" },
    { value: "09:20 AM", label: "09:20 AM" },
    { value: "09:30 AM", label: "09:30 AM" },
    { value: "09:40 AM", label: "09:40 AM" },
    { value: "09:50 AM", label: "09:50 AM" },
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "10:10 AM", label: "10:10 AM" },
    { value: "10:20 AM", label: "10:20 AM" },
    { value: "10:30 AM", label: "10:30 AM" },
    { value: "10:40 AM", label: "10:40 AM" },
    { value: "10:50 AM", label: "10:50 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "11:10 AM", label: "11:10 AM" },
    { value: "11:20 AM", label: "11:20 AM" },
    { value: "11:30 AM", label: "11:30 AM" },
    { value: "11:40 AM", label: "11:40 AM" },
    { value: "11:50 AM", label: "11:50 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    { value: "12:10 PM", label: "12:10 PM" },
    { value: "12:20 PM", label: "12:20 PM" },
    { value: "12:30 PM", label: "12:30 PM" },
    { value: "12:40 PM", label: "12:40 PM" },
    { value: "12:50 PM", label: "12:50 PM" },
    { value: "01:00 PM", label: "01:00 PM" },
    { value: "01:10 PM", label: "01:10 PM" },
    { value: "01:20 PM", label: "01:20 PM" },
    { value: "01:30 PM", label: "01:30 PM" },
    { value: "01:40 PM", label: "01:40 PM" },
    { value: "01:50 PM", label: "01:50 PM" },
    { value: "02:00 PM", label: "02:00 PM" },
    { value: "02:10 PM", label: "02:10 PM" },
    { value: "02:20 PM", label: "02:20 PM" },
    { value: "02:30 PM", label: "02:30 PM" },
    { value: "02:40 PM", label: "02:40 PM" },
    { value: "02:50 PM", label: "02:50 PM" },
    { value: "03:00 PM", label: "03:00 PM" },
    { value: "03:10 PM", label: "03:10 PM" },
    { value: "03:20 PM", label: "03:20 PM" },
    { value: "03:30 PM", label: "03:30 PM" },
    { value: "03:40 PM", label: "03:40 PM" },
    { value: "03:50 PM", label: "03:50 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "04:10 PM", label: "04:10 PM" },
    { value: "04:20 PM", label: "04:20 PM" },
    { value: "04:30 PM", label: "04:30 PM" },
    { value: "04:40 PM", label: "04:40 PM" },
    { value: "04:50 PM", label: "04:50 PM" },
    { value: "05:00 PM", label: "05:00 PM" },
  ];


  // button for apply 
  const useaxioPublic = UseAxiosPublic();



  const clickedForApply =async (event)=>{

    event.preventDefault();

    const form_data = new FormData(event.target);
    const data = Object.fromEntries(form_data);
    // imgbb 

    const imgFile = new FormData();
    imgFile.append('image',form_data.get('image'));


    const res = await useaxioPublic.post(Image_hostin_api,imgFile,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }

    });
    // insert obj
    const {Name , email ,Experience } = data;

    if(!Name || !Experience || !time ||  !days || !skill )
    {
      toast.success("Fill the gap");
      return ;
    }

    const appliedUser={
      Name : Name,
      Email:user?.email,
      Experience:Experience,
      Image:res.data?.data?.display_url,
      Skill:skill,
      Availabledays:days,
      Availabletime:time,

      Status:'pending'

    }
    
    if(res.status===200)
    {
      console.log(appliedUser);
      useaxioPublic.post('/applied',appliedUser)
      .then((result)=>{
        toast.success("Your application succesfullt submited")

      })
      .catch((error)=>{
        console.log("we founed error on applied",error.message)
      })


    }



  }





  return (
    <div className="">
      <section class="bg-green-300">

        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto ">
          <form class="  " onSubmit={clickedForApply}>
            <div className="flex gap-4 justify-center p-4 w-full">
              <div className="">
                {/* title */}

                <div class="relative flex items-center mt-8">


                  <span class="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    name="Name"
                    class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Name"
                  />
                </div>

                <label
                  for="dropzone-file"
                  class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>

                  <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                  <input
                    name="image"
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                  />
                </label>

                <div class="relative flex items-center mt-6">
                  <span class="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                  
                    class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                    value={user?.email}
                  />
                </div>
                {/* age */}

                <div class="relative flex items-center mt-6">
                  <span class="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="number"
                    name="Number"
                    class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Enter your age"
                  />
                </div>

                {/*  */}
                
              </div>

              {/* 4 */}

              <div>
                <div className="mt-4">
                  <label>Chose your skill</label>
                  <Select
                  onChange={(e)=> setskill(e.map((item)=>item.value ))}
                    closeMenuOnSelect={false}
                    isMulti
                    options={skillOptions}
                  />
                </div>

                {/* avialday in week */}

                <div className="mt-5">
                  <label>Available days a week</label>
                  <Select 
                  onChange={(e)=> setdays(e.map((item)=>item.value))}


                  
                  closeMenuOnSelect={false} isMulti options={Days} />
                </div>
                {/* avivable time */}
                <div>
                  <label>Available Times</label>
                  <Select
                   onChange={(e)=> settime(e.map((item)=> item.value))}
                    closeMenuOnSelect={false}
                    isMulti
                    options={AvailableTimes}
                  />
                </div>
                {/* exprience */}

                <div class="relative flex items-center mt-8">
                  <span class="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>

                  <input
                    type="number"
                    name="Experience"
                    class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Year of Experience"
                  />
                </div>
                

              </div>
              
              
            </div>

            {/* button */}

            <div class="mt-6">
              <button type="submit" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Apply
              </button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}

export default BecomeATrainer;
