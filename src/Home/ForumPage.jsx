import UseTop6communityPost from "@/Hooks/UseTop6communityPost";
import React from "react";

function ForumPage() {
  const { communityPost } = UseTop6communityPost();
  console.log(communityPost);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Most recent post</h2>
      <div className="mt-6 px-4 grid sm:grid-cols-2 gap-4">
        {communityPost.map((item, key) => (
          <div key={key} className="border p-4 rounded-md bg-green-200">
            <div className="flex gap-4">
              <div className="flex-1  borde-2">
                <img src={item.Image} className="rounded-md" />
              </div>
              <div>
                <h2>{item.Title}</h2>
                <p>{item.Message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumPage;
