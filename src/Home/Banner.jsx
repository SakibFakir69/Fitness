import React from "react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import "swiper/css/navigation";
import Typewriter from "typewriter-effect";
import { Link, NavLink } from "react-router-dom";

function Banner() {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co.com/0RJ4YVTf/pexels-pixabay-260447.jpg",
      text: " Every rep, every step, every drop of sweat brings you closer to your best self. Keep moving forward!",
      btn: "/allclass",
      title: "Push Your Limits, Achieve Your Goals!",
    },

    {
      id: 1,
      image: "https://i.ibb.co.com/9mXd88x5/pexels-leonardho-1552242.jpg",
      text: " Progress isn't about perfection—it's about persistence. Stay consistent, stay committed!",
      btn: "/allclass",
      title: "Stronger Every Day!",
    },

    {
      id: 1,
      image:
        "https://i.ibb.co.com/hFjnj00t/pexels-cesar-galeao-1673528-3253498.jpg",
      text: "Stop doubting, start doing. Crush your excuses and chase your fitness dreams!",
      btn: "/allclass",
      title: "Your Only Competition Is YOU!",
    },

    {
      id: 1,
      image: "https://i.ibb.co.com/5xcSqQY9/pexels-brunogobofoto-2204196.jpg",
      text: " The hardest part is starting. Once you begin, the only way is up!",
      btn: "/allclass",
      title: "Train Hard, Stay Strong, Keep Going!",
    },
  ];

  return (
    <div className="w-full  flex  items-center mx-auto flex-col space-y-8  py-2">
      <Swiper
        className="rounded p-10 md:h-[500px] sm:h-[400px] h-[400px] w-full  flex items-center"
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation
      >
        {data.map((item, key) => (
          <SwiperSlide
            key={key}
            className=" border-black flex items-center justify-center h-full w-11/12"
          >
            <div className=" p-4">
              <img src={item.image} className="relative object-cover blur-sm " />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold z-50  text-center w-11/12">
              <div className="flex flex-col">
                <p className="md:text-2xl sm:text-xl text-white">{item.title}</p>

                <p className="md:text-xl text-sm text-stone-200">{item.text}</p>

                <div className="mt-6">
                <NavLink
                  className={"px-8 border py-2 rounded  text-xl border-white/10 bg-blue-400 hover:bg-blue-300"}
                  to={item.btn}
                >
                  Go class
                </NavLink>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
