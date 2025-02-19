import UseReviews from "@/Hooks/UseReviews";
import UseReview from "@/Hooks/UseReviews";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { delay } from "framer-motion";
function Reviews() {
  const { allreviews = [] } = UseReviews();

  console.log(allreviews, "review");

  return (
    <div className="h-[300px] p-4">

      <h2 className="text-center sm:text-3xl font-semibold invisible">
        Student Feedback & Reviews
      </h2>

      <Swiper
        navigation={true}
        modules={[Navigation,Autoplay]}
        Autoplay={{delay:2500}}
        loop={true}
        className="mySwiper  h-full flex border  rounded"
      >
        {allreviews.map((item, key) => (
          <SwiperSlide
            key={key}
            className="w-full flex justify-items-center mt-12 text-center"
          >
            <p>
              {" "}
              <i class="ri-double-quotes-l md:text-4xl text-2xl text-yellow-600"></i>
              <span className="text-3xl"> {item.Name}</span>
            </p>

            <p>
              {" "}
              <span className="md:text-2xl font-semibold text-xl tracking-wide">
                {item.review}
              </span>{" "}
              {" "}
              <br/>


              <span>{item.comment}</span>
              <i class="ri-double-quotes-r md:text-4xl text-2xl text-yellow-600"></i>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
