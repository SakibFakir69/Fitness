import UseAxiosSecure from "@/Hooks/UseAxiosSecure";
import Useform from "@/Hooks/Useform";
import { useQuery } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
function FormCommunity() {
  const useaxiosSecure = UseAxiosSecure();

  /// countDocument / current page
  const limit = 6;

  const [currentPage, setcurrentPage] = useState(1);
  const [totalpage, settotalPage] = useState(0);

  const { isLoading, data: paginationForm } = useQuery({
    queryKey: ["data", currentPage],
    queryFn: async () => {
      const res = await useaxiosSecure.get(
        `https://server-vert-two-78.vercel.app/addnewform?page=${currentPage}&limit=${limit}`
      );

      return res.data;
    },
    keepPreviousData: true,
  });
  console.log(paginationForm);
  console.log(currentPage);

  useEffect(() => {
    const totalDocument = paginationForm?.totalCount;
    const ans = Math.ceil(totalDocument / limit);
    settotalPage(parseInt(ans));
  }, [paginationForm]);
  console.log(totalpage);

  //   const { result } = paginationForm || [];

  const result = paginationForm?.result || [];
  console.log(result);

  const prevButton = () => {
    alert("prev");
    if (currentPage > 1) {
      setcurrentPage((prev) => prev - 1);
    }
  };
  const nextButton = () => {
    alert("next");
    if (currentPage < totalpage) {
      setcurrentPage((prev) => prev + 1);
    }
  };
  //   select page
  const selectPage = (num) => {
    setcurrentPage(num);
  };

  return (
    <div className="w-full bg-stone-200 py-16">
      <Helmet>
        <title>Community</title>
      </Helmet>

      {/* show card and pagination */}
      {/* {result.map((item, key) => (
        <p>{item.Name}</p>
      ))} */}

      {/*  */}

      {isLoading ? (
        <div className="w-full flex justify-center py-8">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <section className="grid lg:grid-cols-3 gap-6 justify-center items-center w-full mx-auto mt-8 p-6">
            {result?.map((item, key) => (
              <div key={key} class="">

                <div class=" py-8  duration-300 border cursor-pointer rounded-xl  group bg-white  justify-center items-center p-4 border-black/20 hover:shadow-slate-700 hover:shadow-2xl md:h-[450px] shadow-xl">

                  <div class="flex flex-col    ">
                    <img
                      class="flex-shrink-0 object-cover  h-60   w-full rounded"
                      src={item.image}
                      alt=""
                    />

                    <div className="flex flex-col justify-center  border my-5  gap-4
                    ">
                      <p className="text-xl font-semibold">{item.name} {item.role==="trainer" ? <i class="text-red-400 ri-presentation-line"></i> : <i class="text-green-400  ri-user-settings-line"></i> }</p>
                    

                      

                    </div>

                    <p class="  capitalize text-gray-200 group-hover:text-gray-300">
                      <p className="text-xl text-black font-semibold">{item.title}</p>
                      
                    </p>
                    <p className="text-sm">{item.message}</p>
                 
                  </div>

              
                </div>
              </div>
            ))}
          </section>

          <section className="">
            <div class="flex justify-around mt-6 ">
              <a
                href="#"
                class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
              >
                <div class="flex items-center -mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-1 rtl:-scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>

                  <span class="mx-1 cursor-pointer" onClick={prevButton}>
                    previous
                  </span>
                </div>
              </a>
              {/* add number  */}

              <div>
                {Array.from({ length: totalpage }).map((_, index) => (
                  <button
                    className="btn ml-4"
                    onClick={() => selectPage(index + 1)}
                  >
                    {" "}
                    {index + 1}
                  </button>
                ))}
              </div>

              <a
                href="#"
                class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                <div class="flex items-center -mx-1">
                  <span class="mx-1" onClick={nextButton}>
                    Next
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-1 rtl:-scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default FormCommunity;
