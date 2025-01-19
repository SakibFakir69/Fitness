


import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function TrainerDashboard() {
  return (

    <div className='w-full flex gap-6'>

        <section className='bg-black text-white flex space-y-6 flex-col list-none h-screen px-4 '>
            <li className='mt-10'>
                <NavLink to={'/trainerdashboard/manageslot'}>Manage Slot </NavLink>
            </li>
            <li>
                <NavLink to={'/trainerdashboard/addnewslot'}>Add New slot  </NavLink>
            </li>
            <li>
                <NavLink to={'/trainerdashboard/addnewform'}>Add Form </NavLink>
            </li>

        </section>

        <section className='border w-full '>
            <Outlet/>
        </section>




    </div>
  )
}

export default TrainerDashboard