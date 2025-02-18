import React from "react";
import { WarpBackground } from "@/components/ui/warp-background";
import { BorderBeam } from "@/components/ui/border-beam";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
function Newsletter() {


  const useaxiosPublic = UseAxiosPublic();

  const handelSubmitNewesLetter = (event)=>{
    event.preventDefault();
    const Data_newsLetter  = new FormData(event.target);
    const data = Object.fromEntries(Data_newsLetter);
    const {email , name}= data;

    const NewsLetterInfo = {
      Name:name,
      Email : email
    }
    // send to api 

    useaxiosPublic.post('/newsletter',NewsLetterInfo)
    .then((result)=>{
      console.log("newsLetter done")
    })
    .catch((error)=>{
      console.log('find error on newsletter')
    })



  }



  
  return (
    <div className="px-10 mb-6">
      <div className="px-10 rounded-md    bg-gradient-to-b from-fuchsia-700  to-blue-600 flex  md:flex-row flex-col">

        <div className="text-center  flex-1 flex items-center flex-col">
          <h1 className="text-2xl font-semibold text-white justify-center md:py-8 mt-6">
            {" "}
            Stay Updated with Our Newsletter
          </h1>
          <p className="text-gray-300 text-sm md:-mt-6">
            {" "}
            Subscribe to our newsletter and never miss updates. Just provide
            your name and email to join our community.
          </p>
        </div>

        <form className="flex gap-1 justify-center items-center flex-col flex-1 w-full " onSubmit={handelSubmitNewesLetter}>

         <div className=" w-10/12 flex flex-col space-y-6 py-8 md:mt-6">
         <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="text-center rounded md:py-3 px-12 py-2"
          />

          {/* <input type="text" /> */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="text-center rounded md:py-3 py-2"
          />
         </div>
          <div className="flex justify-center w-full">
            <button type="submit" className="btn w-1/2  text-xl mb-6  bg-teal-200/10
            
            text-white border-white/30 hover:bg-black">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
