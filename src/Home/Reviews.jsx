import UseReviews from "@/Hooks/UseReviews";
import UseReview from "@/Hooks/UseReviews";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
function Reviews() {
  const { allreviews = [] } = UseReviews();

  console.log(allreviews, "review");

  return (
    <div className="h-[300px] px-4 bg-red-200">
      <h2 className="text-center sm:text-3xl font-semibold">Student Feedback & Reviews</h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper  h-1/2 flex "
      >
        {allreviews.map((item, key) => (
          <SwiperSlide  key={key} className="w-full flex justify-items-center mt-12">
            <p> <i class="ri-double-quotes-l"></i> Trainer name : {item.Name}</p>
            <p>{item.Review} <i class="ri-double-quotes-r"></i> </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
