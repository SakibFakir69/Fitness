import { useState } from "react";
import UseAuth from "@/Hooks/UseAuth";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaBars } from "react-icons/fa";

function AdminDashboard() {
  const { user } = UseAuth();

  // dark mode ||  profile page  || redegsine more 


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-2 bg-gray-800 text-white fixed top-4 left-4 rounded-md z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>

      <section className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative top-0 left-0 w-64 bg-black min-h-screen p-4 transition-all duration-300 z-50 
          ${
            isSidebarOpen
              ? "translate-x-0 "
              : "-translate-x-full md:translate-x-0"
          } `}
        >
          {/* Admin Profile */}
          <div className="flex flex-col justify-center items-center">
            <img
              src={user?.photoURL || "not found"}
              className="h-16 w-16 rounded-full border"
            />
            <p className="text-white">Admin {user?.email}</p>
            <p className="text-white">{user.displayName}</p>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4 mt-6">
            <li className="text-white">
              <NavLink to="/admindashboard" className="flex items-center gap-2">
                <i className="ri-article-line text-red-400"></i> All Newsletter
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/admindashboard/alltrainer"
                className="flex items-center gap-2"
              >
                <i className="ri-presentation-fill text-green-500"></i> All
                Trainer
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/admindashboard/appliedtrainer"
                className="flex items-center gap-2"
              >
                <i className="ri-mail-add-line text-blue-600"></i> Applied
                Trainer
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/admindashboard/balanceall"
                className="flex items-center gap-2"
              >
                <i className="ri-money-dollar-circle-line text-yellow-400"></i>{" "}
                Balance
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/admindashboard/addnewclass"
                className="flex items-center gap-2"
              >
                <i className="ri-artboard-line text-blue-500"></i> Add New Class
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/admindashboard/alluser"
                className="flex items-center gap-2"
              >
                <i className="ri-id-card-fill text-violet-600"></i> All Users
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/admindashboard/addnewform"
                className="flex items-center gap-2"
              >
                <i className="ri-p2p-fill text-green-500"></i> Community
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/" className="flex items-center gap-2">
                <i className="ri-home-4-line"></i> Home
              </NavLink>
            </li>
          </ul>

          <button
            className="md:invisible border px-7 py-2 rounded-md bg-red-500  text-white mt-4 border-white/10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Close
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1  w-10/11">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default AdminDashboard;
