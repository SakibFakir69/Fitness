import UseAllTrainer from "@/Hooks/UseAllTrainer";
import React, { useEffect } from "react";

import Top6bookingClass from "@/Hooks/Top6bookingClass";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";

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
            className="border px-4 rounded-md p-6 bg-stone-200 shadow-lg border-white/30 flex w-full text-center flex-col"
          >
            <div>
              <p className="text-xl font-semibold flex justify-center items-center gap-2">
                {" "}
                <PiChalkboardTeacherThin /> {item.Skill}
              </p>

              <p className="flex justify-center items-center gap-2">
                {" "}
                <FaBusinessTime /> {item.Experience} Experience
              </p>

              {/* <p className="flex justify-center items-center gap-2">
                {" "}
                <MdOutlineEmail /> : {item.Email}
              </p> */}
              <p className="flex justify-center items-center gap-2">
                {" "}
                <FaRegBookmark /> {item.bookingCount || "0"}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FeautredClasses;
