import UseAuth from "@/Hooks/UseAuth";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { Helmet } from "react-helmet";
function AdminDashboard() {


  // '/admindashboard/addnewclass' ,  "/admindashboard/balanceall",'/admindashboard/appliedtrainer','/admindashboard/alltrainer',

  const { user } = UseAuth();

  console.log(user);

  return (
    <div className="w-full">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>

      <section className="border grid grid-cols-12">

        <aside className=" h-screen flex flex-col space-y-8 list-none sm:px-2 md:p-6 py-4 bg-black min-h-screen col-span-3">

          <div className="flex flex-col justify-center items-center">

            <img src={user?.photoURL || "not founed"} className="h-16 w-16 rounded-full border "/>
            {/* simple profile */}
            <p className="text-white">Admin {user?.email} </p>
          </div>

          <li className="text-white ">
            <NavLink to={"/admindashboard"}>
            <i class="ri-article-line text-red-400"></i> All Newsletter 
            </NavLink>
          </li>
          <li>

            <NavLink to={"/admindashboard/alltrainer"} className={"text-white"}>
            <i class="ri-presentation-fill text-green-500"></i> All Trainer 
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to={"/admindashboard/appliedtrainer"}>
            <i class="ri-mail-add-line text-blue-600"></i>  Applied Trainer 
            </NavLink>
          </li>{" "}
          <li className="text-white">
            <NavLink to={"/admindashboard/balanceall"}>
            <i class="ri-money-dollar-circle-line text-yellow-400"></i> Balance 
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to={"/admindashboard/addnewclass"}>
            <i class="ri-artboard-line text-blue-500"></i> Add New class 
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to={"/admindashboard/alluser"}>
            <i class="ri-id-card-fill text-violet-600"></i> All user 
            </NavLink>
          </li>
          <li className="text-white flex">
            <NavLink to={"/admindashboard/addnewform"}><i class="ri-p2p-fill text-green-500 "></i> Community</NavLink>
          </li>



          <div className="">
          <li className="text-white">
            <NavLink to={"/"}><i class="ri-home-4-line"></i>  Home</NavLink>
          </li>
          </div>

         
        </aside>
        

        {/* outlet  */}
        <aside className="border col-span-9">
          <Outlet />
        </aside>
      </section>
    </div>
  );
}

export default AdminDashboard;
