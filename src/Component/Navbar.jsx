import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { use } from "react";
import UseAdminHooks from "@/Hooks/UseAdminHooks";
import UseTrainer from "@/Hooks/UseTrainer";
import { toast } from "react-toastify";

function Navbar() {
  const [isclosed, setisclosed] = useState(!true);
  console.log(isclosed);
  const loc = useLocation();
  console.log(loc);

  const { user, logoutButton, setloading, setuser } = UseAuth();

  const logoutHandleButton = () => {
    setloading(true);

    logoutButton()
      .then((result) => {
        toast.success("Log out");

        setuser(null);
        setloading(false);
      })
      .cathc((error) => {
        console.log(`this error from navbar ${error.message}`);
      });

    console.log("log out button cliced");
  };

  console.log(user);

  // review user admin
  // then payment
  /// complelte admin page today

  const { isAdmin } = UseAdminHooks();

  // trainer
  const { TrainerIstrainer } = UseTrainer();

  console.log(isAdmin?.admin, TrainerIstrainer?.Trainer);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>

        {!TrainerIstrainer?.Trainer && !isAdmin?.admin && (
          <NavLink to={"/alltrainer"} className={'display'}>All Trainer</NavLink>
        )}
      </li>
      <li>
        <NavLink to={"/allclass"}>All classes</NavLink>
      </li>
      <li>
        {!TrainerIstrainer?.Trainer && !isAdmin?.admin && (
          <NavLink to={"/userbookedtrainer"}>Booked</NavLink>
        )}
      </li>

      <li className={`${isAdmin?.admin ? "" : "hidden"}`}>
  <NavLink to="/admindashboard">Admin Dashboard</NavLink>
</li>


      <li className={`${TrainerIstrainer?.Trainer ? "" : "hidden"}`}>
  <NavLink to="trainerdashboard">Trainer Dashboard</NavLink>
</li>

      <li>
        <NavLink to={"/formcomunity"}>Form</NavLink>
      </li>

      {/* admin */}
    </>
  );

  return (
    <div className="">

      <div className="navbar  bg-stone-950 text-white fixed z-50 rounded backdrop-blur-md">


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
                  className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52  shadow p-4 bg-black"
                >
                  {links}

                  {/* conditional profile */}
                  <li className="flex flex-row justify-around">
                    <div className="w-14 rounded-full">
                      <NavLink to={"/profile"}>
                        <img src={user?.photoURL} className="rounded-full" />
                      </NavLink>
                    </div>

                    {/* close button */}
                    <div>
                      <button className="px-5 py-1 border rounded" onClickCapture={() => setisclosed(false)}>
                        close
                      </button>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
         <NavLink to={'/'} className={'md:text-4xl text-2xl font-semibold'}>Fitness</NavLink>
         {/* add logo */}
          {/* make color  on motion */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div>
              <div className="flex gap-4">
                <div className="avatar online lg:visible invisible">
                  <div className="w-14 rounded-full">
                    <NavLink to={"/profile"}>
                      <img src={user?.photoURL} />
                      {/* chnage this only text mid device */}
                    </NavLink>
                  </div>
                </div>

                <button className="btn text-white lg:px-9 border rounded  md:px-7 px-5 bg-violet-500 sm:text-xl border-white/10 " onClick={logoutHandleButton}>
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to={"/accountpage/login"} className="btn lg:px-9 border rounded  md:px-7 px-5 sm:text-xl text-white bg-violet-600">
                Log in{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
