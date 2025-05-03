import UseTop6communityPost from "@/Hooks/UseTop6communityPost";
import React from "react";


function ForumPage() {
  const { communityPost } = UseTop6communityPost();
  console.log(communityPost);


  return (
    <div className="py-10">
    
   
      <div className="mt-6 px-4 grid sm:grid-cols-2 gap-4">

        {communityPost?.map((item, key) => (
          
          <div key={key} className=" border-2 border-green-400/40  p-4 rounded-md bg-white shadow-xl hover:shadow-slate-100/50">

            <div className="">

              <div className="  w-full  sm:p-3 h-72">

                <img src={item.image} className="rounded-md w-full object-cover h-64" />
              </div>

              <div className="h-24 flex flex-col justify-center">
                <h2 className="text-xl font-semibold">{item.title} </h2>
                <p className="text-sm text-stone-800">{item.message}</p>
              </div>
            </div>
          </div>


        ))}
      </div>
    </div>
  );
}

export default ForumPage;
