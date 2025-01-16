import TextRevealByWord from "@/components/ui/text-reveal";
import React from "react";
import TextReveal from "@/components/ui/text-reveal";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutSection() {
  return (
    <div className="mt-10 px-10 bg-BgCustome">

      <div>
        <h2 className="text-4xl text-center font-bold mb-5">
          {" "}
          About Our Organization
        </h2>
      </div>

      <section className="grid">

        <div className="flex">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 10 }}
            transition={{ duration: 1 }}
            className="rounded-md border flex-1 p-4 bg-white"
          >
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p>
              Our mission is to create an inclusive, innovative, and efficient
              fitness ecosystem. We believe in optimizing every aspect of the
              fitness experience, from tracking progress to offering
              personalized workouts, and providing valuable insights that help
              individuals make informed decisions about their health
            </p>
          </motion.div>
          <div className="flex-1"></div>
        </div>

        <div className="flex mt-10">
          <div className="flex-1"></div>
          <motion.div
            whileInView={{ x: -100}}
            initial={{ x: 900 }}

            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="flex-1 border p-4 bg-black text-white rounded-md"
          >
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              We aim to be at the forefront of fitness technology, setting the
              standard for how individuals approach their health and wellness.
              By continuously improving our solutions and listening to our
              users, we aspire to make a positive impact on the global fitness
              community
            </p>
          </motion.div>

        </div>


        {/* 3rd */}

        <div className="flex mt-6">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 10 }}
            transition={{ duration: 1 }}
            className="border flex-1 p-4 bg-red-200 rounded-md shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              {" "}
              Empowering Individuals, Transforming Lives
            </h2>
            <p>
              Our organization is dedicated to empowering individuals with the
              tools and resources they need to achieve their fitness goals. By
              combining advanced technology, expert guidance, and a user-centric
              approach, we strive to enhance lives and foster healthier habits.
              Join us in shaping a world where fitness is not just a goal, but a
              lifestyle that benefits everyone.
            </p>
          </motion.div>
          <div className="flex-1"></div>
        </div>
        {/* 4th */}

        
        <div className="flex mt-10 mb-6 ">
          <div className="flex-1"></div>
          <motion.div
            whileInView={{ x: -100 }}
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="flex-1 border p-4 bg-emerald-200 rounded-md "
          >
            <h2 className="text-2xl font-bold">Making Wellness Simple and Smart</h2>
            <p>
            Our goal is to make living healthy easy and accessible for all. We combine technology with practical solutions to help people improve their physical and mental well-being. By offering personalized workouts and tracking progress, we make it simple for anyone to live a healthier, happier life every day
            </p>
          </motion.div>

        </div>



      </section>
    </div>
  );
}

export default AboutSection;
