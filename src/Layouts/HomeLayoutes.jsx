

import React from 'react'
import {Outlet} from 'react-router-dom'
import Banner from '../Home/Banner'
import FeaturedSection from '../Home/FeaturedSection'
import AboutSection from '@/Home/AboutSection'
import ScrollProgress from '@/components/ui/scroll-progress'
function HomeLayoutes() {
  return (
    <div>
            

      <Banner/>
      <FeaturedSection/>
      <AboutSection/>

     


    </div>
  )
}

export default HomeLayoutes