import { Button } from "@/components/ui/button";
import HyperText from "@/components/ui/hyper-text";
import { TextAnimate } from "@/components/ui/text-animate";

import img01 from "../../public/group.jpg";
import img02 from "../../public/live.jpg";
import img03 from "../../public/meeting.jpg";
import img04 from "../../public/join.jpg";
import img05 from "../../public/feedback.jpg";
import img06 from "../../public/foood.jpg";

import React from "react";
import ShineBorder from "@/components/ui/shine-border";

import { motion } from "framer-motion";

function FeaturedSection() {
  // use magic ui make eye catching
  const section = [
    {
      Title: "Engaging & Interactive Workout Routines",
      description:
        "Get personalized workout plans that adapt to your progress, featuring interactive videos, timers, and live feedback",
      image: img01,
    },
    {
      Title: " Tailored Nutrition Plans",
      description:
        "Receive meal plans and nutritional guidance to support your fitness goals, with healthy recipes, portion sizes, and calorie tracking",
      image: img02,
    },
    {
      Title: "One-on-One Coaching",
      description:
        "Get personalized fitness coaching tailored to your specific needs, with expert advice on workouts, nutrition, and recovery",
      image: img03,
    },
    {
      Title: "Join Fitness Challenges",
      description:
        "Participate in fun, community-driven fitness challenges to push yourself further, with rewards and recognition for achievements",
      image: img04,
    },
    {
      Title: "Real-Time Feedback",
      description:
        "Get instant feedback from coaches or the app on your performance, form, and technique.",
      image: "https://i.ibb.co.com/4Rwc9FnP/pexels-moose-photos-170195-1036641.jpg",
    },
    {
      Title: "Live Virtual Training",
      description:
        "Participate in live virtual training sessions with certified coaches for real-time guidance and motivation",
      image: img05,
    },
  ];

  return (
    <div className="px-4 bg-stone-200/40  border-2 border-green-400 ">

      <div className="text-center mt-4">
        {/* title */}

        
      </div>

      <section className="grid md:grid-cols-3 gap-4 mt-6 grid-cols-1 p-2 ">

        {section.map((item, key) => (
          <div className="w-full border flex justify-center items-center">

            <ShineBorder
              className="p-4 shadow-lg "
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              key={key}
            >
              <motion.div
                className="flex gap-4 "
             
           
              >


                <div className="p-2 flex flex-col space-y-2 h-80">

                  {/* font 16 12 */}
                  <p className="text-xl font-semibold">{item.Title}</p>
                  <p className="text-sm ">{item.description}</p>

                  <div className="h-52 flex justify-start items-center">
                    <img src={item.image} className="h-48 rounded-md"/>
                  </div>
                </div>




              </motion.div>
            </ShineBorder>




          </div>
        ))}
      </section>
    </div>
  );
}

export default FeaturedSection;
