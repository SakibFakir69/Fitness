


import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function MainLayouts() {

  



  return (
    <div>
      

        <header>
            <Navbar/>
        </header>
        
        <main>
            <Outlet/>
        </main>



    </div>
  )
}

export default MainLayouts