import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink>All Trainer</NavLink>
      </li>
      <li>
        <NavLink>All classes</NavLink>
      </li>
      <li>
        <NavLink>DashBoard</NavLink>
      </li>
      <li>
        <NavLink>Form</NavLink>
      </li>
    </>
  );

  return (
    <div className="border ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
              
              {/* conditional profile */}
              <li>
                profile
              <div className="w-14 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="rounded-full"/>
                </div>
       

                

              </li>
              

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-4">
            <div className="avatar online lg:visible invisible">
              <div className="w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
