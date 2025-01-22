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
      <div className="px-10 rounded-md border  flex-col bg-gradient-to-b from-fuchsia-700  to-blue-600 ">
        <div className="text-center p-4">
          <h1 className="text-4xl font-semibold text-white ">
            {" "}
            Stay Updated with Our Newsletter
          </h1>
          <p className="text-gray-400">
            {" "}
            Subscribe to our newsletter and never miss updates. Just provide
            your name and email to join our community.
          </p>
        </div>
        <form className="flex flex-col space-y-3" onSubmit={handelSubmitNewesLetter}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="text-center rounded-md py-2"
          />

          {/* <input type="text" /> */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="text-center rounded-md py-2"
          />
          <div className="flex justify-center w-full">
            <button type="submit" className="btn w-1/2 btn-primary text-xl mb-6">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
