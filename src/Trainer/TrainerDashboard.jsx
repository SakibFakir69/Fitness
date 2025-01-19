


import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function TrainerDashboard() {
  return (
    <div>
        <section>
            <li>
                <NavLink to={'/trainerdashboard/manageslot'}>Manage Slot </NavLink>
            </li>
            <li>
                <NavLink to={'/trainerdashboard/manageslot'}>Add News slot  </NavLink>
            </li>
            <li>
                <NavLink to={'/trainerdashboard/addnewform'}>Add Form </NavLink>
            </li>

        </section>

        <section>
            <Outlet/>
        </section>




    </div>
  )
}

export default TrainerDashboard