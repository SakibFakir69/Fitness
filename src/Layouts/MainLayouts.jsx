


import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'

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