import UseAxiosSecure from "@/Hooks/UseAxiosSecure";
import UseMangeslotUserData from "@/Hooks/UseMangeslotUserData";

import React, { useState } from "react";

import Select from "react-select";
import { toast, ToastContainer } from 

"react-toastify";

import { Helmet } from "react-helmet";
function AddNewSlot() {
  const { MangeUserData } = UseMangeslotUserData();
  console.log(MangeUserData, "mange slot");

  const { Name, Experience, Availabletime, Availabledays, Email, _id } =
    MangeUserData;
  const [select, setselectday] = useState([]);
  const [time, settime] = useState([]);
  const [name, setname] = useState([]);

  // replace and store data

  const Days = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];

  const soltoption = [
    { value: "morning_slot", label: "Morning Slot" },
    { value: "afternoon_slot", label: "Afternoon Slot" },
    { value: "evening_slot", label: "Evening Slot" },
    { value: "night_slot", label: "Night Slot" },
    { value: "weekend_slot", label: "Weekend Slot" },
    { value: "holiday_slot", label: "Holiday Slot" },
  ];

  const slotTime = [
    { value: "1hour", label: "1hour" },
    { value: "1.30hour", label: "1.30hour" },
    { value: "1.45hour", label: "1.45hour" },
    { value: "2.00hour", label: "2.00hour" },
    { value: "2.15hour", label: "2.15hour" },
    { value: "3.00hour", label: "3.00hour" },
  ];

  const useaxiosSecure = UseAxiosSecure();

  const socailOption = [
    {value:'linkdin' , label:"linkdin"},
    {value:'facebook',label:'facebook'}
  ]

  const handelNewSlotButton = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(time);
    console.log(select);

    const trainerUpdateData = {
      slotTime : time,
      Availabledays: select,
      Slot: name,
    };

    // if( !select.length==0 || !time.length==0){
    //   toast.error("fill the input")

     
    //   return ;
    // }

    useaxiosSecure.put(`/addnewslot/${_id}`,trainerUpdateData)
    .then((res)=>{
    toast.success("New slot added done!")
    })
    .catch((error)=>{
      console.log("error founede")
    })
  };

  // work on days

  return (
    <div className="bg-indigo-400 h-screen px-4">
          <Helmet>
        <title>Add new slot </title>
      </Helmet>
      <di className="h-36 invisible">asd</di>
      <ToastContainer/>

     

      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Manage slot
        </h2>

        <form className="" onSubmit={handelNewSlotButton}>
          <div class="grid grid-cols-1 gap-6  sm:grid-cols-2  ">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Name
              </label>
              <input
                id="Name"
                type="text"
                defaultValue={Name}
                readOnly
                name="Name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                readOnly
                defaultValue={Email}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* start here  */}
            {/* Classes,Slot time ( example: 1 hour),Slot name (example: morning slot) */}

            <div>
              <label>Day:</label>
              <Select
                onChange={(e) => setselectday(e.map((item) => item.value))}
                isMulti
                closeMenuOnSelect={false}
                options={Days}
              />
            </div>
        

            <div>
              {/* slot name  */}
              <label>Slot</label>

              <Select
                onChange={(e) => setname(e.map((item) => item.value))}
                options={soltoption}
                isMulti
                closeMenuOnSelect={false}
              />
            </div>
            <div></div>

            <div>
              <label>Time:</label>
              <Select
                onChange={(e) => settime(e.map((item) => item.value))}
                isMulti
                closeMenuOnSelect={false}
                options={slotTime}
              />
            </div>
          </div>


          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddNewSlot;
