import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { use } from "react";

function Navbar() {
  const [isclosed, setisclosed] = useState(!true);
  console.log(isclosed);
  const loc = useLocation();
  console.log(loc);

  const { user,logoutButton ,setloading,setuser } = UseAuth();


  const logoutHandleButton = ()=>{
    setloading(false);
    logoutButton()
    .then((result)=>{
      setuser(null);
      setloading(true);
    })
    .cathc((error)=>{
      console.log(`this error from navbar ${error.message}`)
    });

    console.log('log out button cliced')
    
  }

  console.log(user);

  let isAdmin = true;




  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/alltrainer'}>All Trainer</NavLink>
      </li>
      <li>
        <NavLink to={'/allclass'}>All classes</NavLink>
      </li>
      <li>
        {/* show trainer and admin dashboard  */}

     {
      isAdmin &&    <NavLink to={'/admindashboard'}>DashBoard</NavLink>
     }

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
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                onClick={() => setisclosed(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
            <div>
              {isclosed && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {links}

                  {/* conditional profile */}
                  <li className="flex flex-row justify-around">
                    <div className="w-14 rounded-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        className="rounded-full"
                      />
                    </div>

                    {/* close button */}
                    <div>
                      <button onClickCapture={() => setisclosed(false)}>
                        X
                      </button>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Fitnesss</a>
          {/* make color  on motion */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div>
              <div className="flex gap-4">
                <div className="avatar online lg:visible invisible">
                  <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>

                <button className="btn" onClick={logoutHandleButton}>
                  Log out 

                </button>

              </div>
            </div>
          ) : (



            <div>
              <Link to={'/accountpage/login'} className="btn">Log in </Link>


            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
