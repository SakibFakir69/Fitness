import UseAuth from "@/Hooks/UseAuth";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminDashboard() {
  // '/admindashboard/addnewclass' ,  "/admindashboard/balanceall",'/admindashboard/appliedtrainer','/admindashboard/alltrainer',

  const {user} = UseAuth();
  
  return (
    <div className="w-full">

      <section className="border flex gap-6">

        <aside className="bg-red-400 h-screen flex flex-col space-y-10 list-none sm:px-2 md:p-6 ">

            <div>
                {/* simple profile */}
                <p>Admin {user?.email}</p>

            </div>

          <li>
            <NavLink to={"/admindashboard/allnewsletter"}>
              All Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admindashboard/alltrainer"}>All Trainer</NavLink>
          </li>
          
          <li>
            <NavLink to={"/admindashboard/appliedtrainer"}>
              Applied Trainer
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/admindashboard/balanceall"}>Balance</NavLink>
          </li>
          <li>
            <NavLink to={'/admindashboard/addnewclass'}>Add New class</NavLink>
          </li>
          <li>
            <NavLink to={'/admindashboard/alluser'}>All user</NavLink>
          </li>
          

        </aside>


        {/* outlet  */}
        <aside className="border w-4/5">
          <Outlet />
        </aside>
      </section>
    </div>
  );
}

export default AdminDashboard;
