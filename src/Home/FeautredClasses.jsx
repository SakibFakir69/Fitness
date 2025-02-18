import UseAllTrainer from "@/Hooks/UseAllTrainer";
import React, { useEffect } from "react";

import Top6bookingClass from "@/Hooks/Top6bookingClass";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";

function FeautredClasses() {
  const { isLoading, top6class } = Top6bookingClass();
  console.log(top6class, "class");

  // title des ,booking

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="mb-6 ">
      {/* use icon  */}

      <section className="grid md:grid-cols-3 px-4 gap-5">
        {top6class?.map((item, key) => (
          <div
            key={key}
            className="border px-4 rounded-md p-6  shadow-lg border-white/30 flex w-full text-center flex-col bg-black"
          >
            <div>
              <p className="text-xl font-semibold flex justify-center items-center gap-2 ">
                {" "}
                <SiGoogleclassroom className="text-yellow-600 font-bold" /> 
                <span className="text-white font-semibold text-xl">{item.Skill}</span>
              </p>

              <p className="flex justify-center items-center gap-2">
                {" "}
                <FaBusinessTime className="text-red-500" /> 
                <span className="text-white font-semibold text-sm">{item.Experience} Experience</span>
              </p>

              {/* <p className="flex justify-center items-center gap-2">
                {" "}
                <MdOutlineEmail /> : {item.Email}
              </p> */}
              <p className="flex justify-center items-center gap-2 text-sm">
                {" "}
                <FaRegBookmark  className="text-stone-300"/> 

                <span className="text-stone-200">{item.bookingCount || "0"}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FeautredClasses;
