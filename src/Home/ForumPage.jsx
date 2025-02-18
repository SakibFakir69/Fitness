import UseTop6communityPost from "@/Hooks/UseTop6communityPost";
import React from "react";


function ForumPage() {
  const { communityPost } = UseTop6communityPost();
  console.log(communityPost);


  return (
    <div className="py-10">
    
   
      <div className="mt-6 px-4 grid sm:grid-cols-2 gap-4">

        {communityPost?.map((item, key) => (
          
          <div key={key} className="border p-4 rounded-md bg-stone-200 shadow-xl hover:shadow-slate-100/50">

            <div className="">
              <div className="h-64 borde-2 w-full border-2 sm:p-3">
                <img src={item.Image} className="rounded-md h-60 w-full object-cover" />
              </div>

              <div className="h-24 flex flex-col justify-center">
                <h2 className="text-xl font-semibold">{item.Title}</h2>
                <p className="text-sm text-stone-800">{item.Message}</p>
              </div>
            </div>
          </div>


        ))}
      </div>
    </div>
  );
}

export default ForumPage;
