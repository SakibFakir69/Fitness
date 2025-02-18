import React from "react";
import Lottie from "react-lottie";
import aniData from '../../public/Animation - 1737295311021'
import { Autoplay } from "swiper/modules";
import { data } from "react-router-dom";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import { toast, ToastContainer } from "react-toastify";


import { Helmet } from "react-helmet";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Image_hostin_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

import UseTrainer from "@/Hooks/UseTrainer";
import UseAdminHooks from "@/Hooks/UseAdminHooks";
function AddNewform() {
  // add from page
  // set user role admin or  trainer

  // add like system

  // pic , title , des

  const aniOptois= {
    loop:true,
    Autoplay:true,
    animationData:aniData,
  }

  const useaxiosPublic = UseAxiosPublic();
  const {TrainerIstrainer} = UseTrainer();
  let Role= ""
  if(TrainerIstrainer)
  {
    Role="trainer"


  }
  const {isAdmin} = UseAdminHooks();
  if(isAdmin)
  {
    Role="Admin";
  }
  console.log(Role,"df");

  // 

  const formAddtoComunity =async (event)=>{
    event.preventDefault();

    const form_data = new FormData(event.target);
    const data = Object.fromEntries(form_data);

    // image 
   

    const imgFile = new FormData();
    imgFile.append('image',form_data.get('image'));


    const res = await useaxiosPublic.post(Image_hostin_api,imgFile,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }

    });
    console.log(res)

    const {image,title,Message,name} = data;
    if(name.length<=5)
    {
      toast.error("Name length must be 5 word")
      return;
    };


    if(title.length<6)
    {
      toast.error("title must be 6 word");
      return;
    }
    if(!image)
    {
      toast.error("must upload img")
      return;
    }
    if(Message.length<20)
    {
      toast.error("message must be 20 word")
      return;
    }

    const formData_info = {
      Name : name,
      Title: title,
      Image: res.data.data.display_url,
      Message: Message,
      role:Role,

   
    }
    console.log(formData_info)

    // post api 
    useaxiosPublic.post('addnewform',formData_info)
    .then((res)=>{
      toast.success("form added done!")
      
      
    })
    .catch((error)=>{
      toast.error(error.message)
    })
    




  }




  return (
    <div className="w-full h-screen  bg-violet-400">
          <Helmet>
        <title>Add new form</title>
      </Helmet>
      <ToastContainer/>
     
      <section className="bg-violet-400">
        <section class="">
          <div class="container px-6 py-12 mx-auto">
          

            <div class="flex w-full justify-center items-center">
            
              <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form onSubmit={formAddtoComunity}>
                  <div class="-mx-2 md:items-center md:flex">
                    <div class="flex-1 px-2">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                         Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John "
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="flex-1 px-2 mt-4 md:mt-0">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Upload photo
                      </label>
                      <input
                        type="file"
                        name="image"
                        placeholder="Doe"
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div class="mt-4">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter your title"
                      class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="w-full mt-4">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                    name="Message"
                      class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AddNewform;
