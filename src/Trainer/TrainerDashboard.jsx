


import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Helmet } from "react-helmet";
function TrainerDashboard() {
  return (

    <div className='w-full flex gap-6'>
            <Helmet>
        <title>Trainer Dashboard</title>
      </Helmet>

        <section className='bg-black text-white flex space-y-6 flex-col list-none h-screen px-4 '>
            <li className='mt-10'>
                <NavLink to={'/trainerdashboard'}>Manage Slot </NavLink>
            </li>
            <li>
                <NavLink to={'/trainerdashboard/addnewslot'}>Add New slot  </NavLink>
            </li>
            <li>
                <NavLink to={'/trainerdashboard/addnewform'}>Add Form </NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>


        </section>

        <section className='border w-full '>
            <Outlet/>
        </section>




    </div>
  )
}

export default TrainerDashboard