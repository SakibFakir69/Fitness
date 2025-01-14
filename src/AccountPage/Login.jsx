import React from "react";
import { Link } from "react-router-dom";

import Lottie from "react-lottie";
import animLogin from "../../public/Animation - 1736851204044.json";

function Login() {
  
  const options = {
    loop: true,
    autoplay: true,
    animationData: animLogin,
  };




  return (
    <div className="border-2">
      <div className="flex flex-col lg:flex-row">
        <section className="flex-1 justify-center bg-green-200  ">
          <h1 className="text-center text-2xl md:text-6xl lg:text-6xl md:font-bold font-semibold text-black px-5">
            Log In to Unlock Your Fitness Potential
          </h1>
          <div className="flex justify-center">
            <Lottie options={options} />
          </div>
        </section>
        {/* bg-white dark:bg-gray-900 */}

        <section class=" flex-1 -mt-2  bg-white dark:bg-gray-900  text-white">
          <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form class="w-full max-w-md">
              <div class="flex justify-center mx-auto">
                {/* logo */}
                <img
                  class="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>

              <div class="flex items-center justify-center mt-6">
                {/* text logo */}
              </div>

              {/* photo url */}

              <div class="relative flex items-center mt-6">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>

              <div class="relative flex items-center mt-4">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>

              <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Log in
                </button>

                <div class="mt-6 text-center ">
                  <a
                    href="#"
                    class="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Already have an account?{" "}
                    <Link to={"/accountpage/registation"}>Registation</Link>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
