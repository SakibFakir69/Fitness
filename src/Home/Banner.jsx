import React from "react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import "swiper/css/navigation";
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom'
function Banner() {





  
  return (
    <div className=" w-full flex  items-center mx-auto flex-col space-y-8   bg-green-300 p-4">

      <div className="text-4xl font-bold text-white text-center">
        {/* text Push Your Limits, Redefine Your Strength*/}
        <h2>Push Your Limits, Redefine Your Strength</h2>

      </div>

      <Swiper
      className="rounded   md:h-[250px] w-10/12 flex space-y-5 h-[180px] p-10"
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation
      >
        <SwiperSlide>
          <div className="flex flex-col text-center mt-3 space-y-4 md:space-y-14">

            <h2 className="md:text-2xl text-xl md:font-semibold font-bold">Transform Your Body, Transform Your Life</h2>

            <p>Discover personalized fitness plans and expert guidance to help you achieve your goals. Start your journey today!</p>

            <Link to={'/allclass'} className="btn">Go Class</Link>

          </div>
        </SwiperSlide>

        <SwiperSlide>

          <div className="text-center flex flex-col  mt-3 space-y-2 md:space-y-14 ">

            <h2 className="md:text-2xl md:font-semibold text-xl font-bold">Stronger, Healthier, Happier You</h2>

            <p>From weight loss to muscle building, our programs are tailored to suit every fitness level. Let’s make it happen!</p>
            <Link to={'/allclass'} className="btn btn-success">Go class</Link>
          </div>
        



        </SwiperSlide>




        <SwiperSlide>
          <div className="flex flex-col text-center mt-6 space-y-2 md:space-y-14">

            <h2 className="md:text-2xl text-xl md:font-semibold font-bold">Your Fitness Journey Starts Here</h2>
            <p>Take the first step toward a healthier you. Explore our programs and join us today!</p>
            <Link to={'/allclass'} className="btn btn-warning">Go class</Link>

          </div>



        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Banner;
