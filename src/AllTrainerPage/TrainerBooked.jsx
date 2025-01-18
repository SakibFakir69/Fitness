import { AuroraText } from "@/components/ui/aurora-text";
import UseAxiosSecure from "@/Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

function TrainerBooked() {
  // jai time select korba oi time akta post kort ahobba tr por daka ta hobba

  // Selected slot
  // Classes
  // packages: (ex: Basic, Standard, Premium)
  // Join now button
  const { id } = useParams();
  const useaxiosSecure = UseAxiosSecure();

  const { data: trainerBookedData = [] } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await useaxiosSecure.get(`/trainerBooked/${id}`);
      return res.data;
    },
  });
  console.log(trainerBookedData, "booked");

  const { Name, Availabledays = [], Skill = [] } = trainerBookedData[0] || {};

  const [selectedSlot, setselectedSlot] = useState([]);
  const [packageName, setpackageName] = useState("");
  const [price, setprice] = useState("");

  const handelPackage = (packege, price) => {
    setpackageName(packege);
    setprice(price);
    console.log("cliekd");
  };
  console.log(packageName, "name");
  console.log(price, "price");

  // recive state from deatils page

  const location = useLocation();
  const { Class, Slot } = location.state || {};

  return (
    <div className="bg-gradient-to-t from-indigo-400 to-pink-500 px-6   ">


      <section className="text-center  ">
        <h1 className="sm:text-4xl font-bold text-white">
          {" "}
          Trainer Booking Details <span className="">
            {" "}
            and Pricing Plans
          </span>{" "}
        </h1>

        <div className="mt-6 border-2 mb-2  bg-black">
          <p>
            {" "}
            <span className="text-xl text-white font-semibold">
              Trainer Name
            </span>{" "}
            :<span className="text-xl text-red-300">{Name}</span>
          </p>
          <p>
            {" "}
            <span className="text-xl text-white font-semibold">
              Classes{" "}
            </span> : <span className="text-xl text-red-300">{Class}</span>
          </p>
          <p>
            {" "}
            <span className="text-xl text-white font-semibold">
              Slot{" "}
            </span> : <span className="text-xl text-red-300"> {Slot}</span>
          </p>
        </div>
      </section>

      {/* pricing  */}

      <section className="">
     
          <div class="">
            <h1 class="text-2xl font-semibold text-center text-white">
              Pricing Plan
            </h1>

            <p class="max-w-2xl mx-auto mt-2 text-center text-gray-300 xl:mt-6 dark:text-gray-500">
              Flexible plans tailored to your fitness goals. Select the package
              that suits your needs and start your fitness journey today!
            </p>

            <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-10 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 ">
              <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 transition bg-violet-300 hover:bg-violet-400">
                <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
                  Basic
                </p>

                <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                  $10
                </h2>

                <p class="font-medium text-gray-500 dark:text-gray-300">
                  1 Month
                </p>
                <div>
                  <p className="">
                    1. Access to gym facilities during regular operating hours.
                  </p>
                  <p className="">
                    2. Use of cardio and strength training equipment.
                  </p>
                  <p className="">
                    3. Access to locker rooms and showers.
                  </p>
                </div>

                <NavLink
                  onClick={() => handelPackage("Basic", 10)}
                  state={{
                    packageName: "Basic",
                    price: 10,
                    TrainerName: Name,
                  }}
                  to={"/payment"}
                  className={"btn w-full btn-primary"}
                  class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Join Now
                </NavLink>
              </div>

              <div class="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
                <p class="font-medium text-gray-200 uppercase">Premium</p>

                <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
                  $50
                </h2>

                <p class="font-medium text-gray-200">Per month</p>
                <div>
                  <p className="">
                    1.All benefits of the basic membership.
                  </p>
                  <p className="">
                    2.Access to group fitness classes such as yoga, spinning,
                    and Zumba.
                  </p>
                  <p className="">
                    3. Use of additional amenities like a sauna or steam room.
                  </p>
                </div>

                <NavLink
                  onClick={() => handelPackage("Premium", 50)}
                  state={{
                    packageName: "Premium",
                    price: 50,
                    TrainerName: Name,
                  }}
                  to={"/payment"}
                  className={"btn w-full"}
                  class=" w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
                >
                  Join Now
                </NavLink>
              </div>

              <div
                class="w-full p-8 space-y-8 text-center border border-gray-200 bg-transparent backdrop-blur-xl rounded-lg dark:border-gray-700 hover:bg-purple-400 transition 
                bg-violet-300"
              >
                <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
                  Enterprise
                </p>

                <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                  $100
                </h2>

                <p class="font-medium text-gray-500 dark:text-gray-300">
                  Life time
                </p>
                <div>
                  <p>1. All benefits of the standard membership.</p>
                  <p>
                    2. Access to personal training sessions with certified
                    trainers.{" "}
                  </p>
                  <p>
                    3.Discounts on additional services such as massage therapy
                    or nutrition counseling{" "}
                  </p>
                </div>

                <NavLink
                  onClick={() => handelPackage("Pro", 100)}
                  to={"/payment"}
                  state={{
                    packageName: "Enterprise",
                    price: 100,
                    TrainerName: Name,
                  }}
                  className={"btn w-full btn-success"}
                  class="btn w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Join Now
                </NavLink>
              </div>
            </div>
          </div>
     
      </section>

      <section className="mt-5 bg-transparent w-full">
        <p className="text-center invisible">End</p>
      </section>
    </div>
  );
}

export default TrainerBooked;
