import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";

import Lottie from "react-lottie";

import RegAnimtion from "../../public/Animation - 1736852299839.json";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
// problem google reg 
// google sign ar time kivava db ta rakbo

function Registation() {
  const {
    CreateAccountWIthGoole,
    CreateAccountWithEmailAndPassword,
    setloading,
    setuser,
  } = UseAuth();
  const goHome = useNavigate();

  // eror catching 

  const [Error , setError ] = useState('');

  const useaxiosPublic=UseAxiosPublic();


  










  const CreateAccountwithEmailand_password_handle = (event) => {

    event.preventDefault();
    console.log("account email");

    const Data_Form = new FormData(event.target);
    const Data = Object.fromEntries(Data_Form);
    // also added data to database

    const { name, email, photoURL, password,ConfirmPassword } = Data;
    console.log(Data)

    






    setloading(true);

    // 
    if(!name || !email  || !password || !photoURL)
    {
      setError('All fields are required');
      // setloading(false);
      return ;
    }
    if(password!==ConfirmPassword)
    {
      setError('Password do not match');
      // setloading(false);
      return;

    }
    const cKpassword = (pass)=>
    {
      const passlength = pass.length>=6;
      const Uppercase = /[A-Z]/.test(pass);
      const lowercase = /[a-z]/.test(pass);
      const number = /[0-9]/.test(pass);


      if(!passlength)
      {
        setError('password must be minmum 6 length')
        return;
      }
      if(!Uppercase)
      {
        setError('Password must be one uppercase');
        return ;
      }
      if(!lowercase)
      {
        setError('Password must be one lowercase');
        return;
      }
      if(!number)
      {
        setError('Password must be one number');
        return;
      }

    }
   



    // email
    // const EmailValidation = (email)=>{
    //   return email.includes('@');

    // }
    // const EmailCk = EmailValidation(email);
    // if(!EmailCk)
    // {
    //   setError('Email must have @ symbol')
    // }

    const passwordChceker = cKpassword(password);
    if(passwordChceker)
    {
      setError(passwordChceker);
      return ;
    }

    // error end 
    
    const usersGetformRegData = {
      Name: name,
      Email: email,
      PhotoUrl: photoURL,
      Password: password,

    };




    CreateAccountWithEmailAndPassword(email,password)
    .then((result)=>{
      const users = result.user;
      setloading(false);
      setuser(users);
      goHome('/');

      toast.success('Successfully Registation!');
      // add data to DB

      if(users)
      {
        useaxiosPublic.post('/users',usersGetformRegData)
        .then((res)=>{
          console.log("data added done")
        })
        .catch((error)=>{
          console.log("error get to db")
        })
      }

     





      

    })
    .catch((error)=>{
      console.log(`this erorr from  reg page com create user  ${error.code}`);
      toast.error("Failed to registation")
    })






  };
  // createuser with google login

  const Create_user_Google_Handle_Button = (event) => {

    event.preventDefault();
    setloading(true);
    CreateAccountWIthGoole()
    .then((result)=>{
      const users = result.user;
      setuser(users);
      setloading(false);
      goHome('/');
      toast.success('Successfully Registation!')
      // send data to DB
      const userData = {
        Name : users.displayName,
        email : users.email,
        photoURL: users.photoURL,
      }

      if(users)
      {
      useaxiosPublic.post('/users', userData)
      .then((res)=>{
        console.log("data done to google")
      })
      .catch((error)=>{
        console.log(`error founded ${error.name}`)
      })

      }

    })
    .catch((error)=>{
      console.log(`error founed on reg page ${error.code}`)
      setError(error.message);
      toast.error(`${error.message}`)
    })

    console.log('google button clickled')
  };

  const options = {
    loop: true,
    autoplay: true,
    animationData: RegAnimtion,
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <section className="flex-1 justify-center  flex flex-col bg-sky-600">
          <h1 className="text-center text-5xl lg:font-bold lg:text-6xl font-semibold text-white">
            Registration to Achieve Your Fitness Goals
          </h1>

          <div className="mx-auto  -mt-56">
            <Lottie options={options} />
          </div>
        </section>
        {/* toast container */}
        <ToastContainer/>

        <section class="bg-white dark:bg-gray-900 flex-1 ">
          
          <div class="container flex items-center justify-center min-h-screen px-6 mx-auto flex-col">
            <form
              class="w-full max-w-md"
              onSubmit={CreateAccountwithEmailand_password_handle}
            >
              <div class="flex justify-center mx-auto">
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

              <div class="relative flex items-center mt-8">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  minLength={3}
                  min={'3'}
                  name="name"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Username"
                />
              </div>

              <div class="relative flex items-center mt-8">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="url"
                  name="photoURL"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="PhotoURL"
                />
              </div>

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
                  name="email"
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
                  name="password"
                  class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
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
                  name="ConfirmPassword"
                  class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
               {
                Error && <p className="text-red-500">{Error}</p>

               }
              </div>
              <div class="mt-6">
                <button
                  type="submit"
                  class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* text */}

            <div className="divider divider-accent text-white">or</div>
            {/* google button */}

            <button onClick={Create_user_Google_Handle_Button} class="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
              <svg
                class="w-5 h-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3033_94454)">
                  <path
                    d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3033_94454">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>Sign in with Google</span>
            </button>

            <div class="mt-6 text-center ">
              <a
                href="#"
                class="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?{" "}
                <Link to={"/accountpage/login"}>Login</Link>
              </a>
            </div>

            {/*  */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Registation;
