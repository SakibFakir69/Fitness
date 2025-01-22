import UseAuth from "@/Hooks/UseAuth";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { Helmet } from "react-helmet";
function AdminDashboard() {
  // '/admindashboard/addnewclass' ,  "/admindashboard/balanceall",'/admindashboard/appliedtrainer','/admindashboard/alltrainer',

  const {user} = UseAuth();
  
  return (
    <div className="w-full">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>

      <section className="border flex gap-6">

        <aside className="bg-red-400 h-screen flex flex-col space-y-10 list-none sm:px-2 md:p-6 ">

            <div>
                {/* simple profile */}
                <p>Admin {user?.email} </p>

            </div>

          <li className=" ">
            <NavLink to={"/admindashboard"}>
              All Newsletter <i class="ri-article-line"></i> 
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admindashboard/alltrainer"}>All Trainer <i class="ri-presentation-fill"></i></NavLink>
          </li>
          
          <li>
            <NavLink to={"/admindashboard/appliedtrainer"}>
              Applied Trainer <i class="ri-mail-add-line"></i>
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/admindashboard/balanceall"}>Balance <i class="ri-money-dollar-circle-line"></i></NavLink>
          </li>
          <li>
            <NavLink to={'/admindashboard/addnewclass'}>Add New class <i class="ri-artboard-line"></i></NavLink>
          </li>
          <li>
            <NavLink to={'/admindashboard/alluser'}>All user <i class="ri-id-card-fill"></i></NavLink>
          </li>
          <li>
            <NavLink to={'/admindashboard/addnewform'}>Form/Community</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Home</NavLink>
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
