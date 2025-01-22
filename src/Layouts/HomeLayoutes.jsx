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

      <Banner />
      <FeaturedSection />
      <AboutSection />
      <FeautredClasses />
      <Reviews />
      <ForumPage />
      <Newsletter />
      <TeamSection />
    </div>
  );
}

export default HomeLayoutes;
