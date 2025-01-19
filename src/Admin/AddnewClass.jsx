import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import UseAxiosSecure from "@/Hooks/UseAxiosSecure";
import React, { useState } from "react";


const image_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;

const photoUpload = `https://api.imgbb.com/1/upload?key=${image_key}`

import { toast,ToastContainer } from "react-toastify";

function AddnewClass() {

  const useaxiosPublic = UseAxiosPublic();
  const useaxiosSecure = UseAxiosSecure();

  const [ error , seterror ] = useState('');


  const addClasstoStudent =async(event)=>{
    event.preventDefault();


    const form_data = new FormData(event.target);
    const data = Object.fromEntries(form_data);
    const {Duration,Description,Name,image} = data;

    if(!Duration || !Description || !Name|| !image)
    {
      seterror("Must fill up all filed")
      return;

    }
   if(!(Description.length>=10)){
    seterror("Description must be 10 word");
    return ;
   }else{
    seterror('')
   }

    const imgFile = new FormData();
    imgFile.append('image',form_data.get('image'));

    const res =await useaxiosPublic.post(photoUpload,imgFile,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }

    })
    const image2 = res.data?.data?.display_url
    ;
    const Classdetails ={
      Name: Name,
      Image:image2,
      Description: Description,
      Duration:Duration,
      Time : new Date()

    }

    useaxiosSecure.post('/class',{Classdetails})
    .then((result)=>{
      
      toast.success("New class added Done!")
    })
    .catch((error)=>{
      console.log("error we founded error on", error.message)
    })


  









  }




  return (
    <div className="w-full  bg-violet-400 h-screen ">
      <div className="mb-6 invisible">d</div>
      <ToastContainer/>

      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add new Class
        </h2>

        <form onSubmit={addClasstoStudent}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Name
              </label>
              <input
                id="username"
                type="text"
                name="Name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Enter your class Name"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Image
              </label>
              <input
                id="file"
                type="file"
                name="image"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Enter your image"
              />
            </div>

            <div>
              <div>
                <label
                  for="Description"
                  class="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Description
                </label>

                <textarea
                  placeholder="lorem..."
                  name="Description"
                  class="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                ></textarea>
              </div>
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Class Duration
              </label>
              <input
                id="classDuration"
                type="text"
                name="Duration"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Enter your class Duration"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button type="submit" class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
          {
            error && <p className="text-red-500">{error}</p>

          }
        </form>
      </section>
    </div>
  );
}

export default AddnewClass;
