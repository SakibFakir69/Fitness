import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Home/Banner";
import FeaturedSection from "../Home/FeaturedSection";
import AboutSection from "@/Home/AboutSection";
import ScrollProgress from "@/components/ui/scroll-progress";
import FeautredClasses from "@/Home/FeautredClasses";
import Reviews from "@/Home/Reviews";
import ForumPage from "@/Home/ForumPage";
import Newsletter from "@/Home/Newsletter";
import TeamSection from "@/Home/TeamSection";
import { Helmet } from "react-helmet";

function HomeLayoutes() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section className="py-16">
      <Banner />
      <FeaturedSection />
      <AboutSection />
      
      <FeautredClasses />
      <Reviews />
      <ForumPage />
      <Newsletter  />
      <TeamSection />
      </section>





    </div>
  );
}

export default HomeLayoutes;
