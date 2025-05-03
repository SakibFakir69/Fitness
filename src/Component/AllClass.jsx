import UseAxiosSecure from "@/Hooks/UseAxiosSecure";


import { useQuery } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";


import { Helmet } from "react-helmet";

function AllClass() {
  // TODO :
  // add pagination here
  /// add praviate and proctedt route
  // loading , alert , input
  /// add class serach funtinolity

  const useaxiosSecure = UseAxiosSecure();

  const limit = 6;

  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, settotalPage] = useState(1);

  const [queryx, setqueryx] = useState("");



  const { isLoading, data: allClass } = useQuery({
    queryKey: ["data", currentPage, queryx],
    queryFn: async () => {
      const res = await useaxiosSecure.get(
        `/classpagination?page=${currentPage}&limit=${limit}&name=${queryx}`
      );
      console.log(res,"red");
      return res.data;
    },
    keepPreviousData: true,
  });

  console.log(queryx)
  

  const result = allClass?.result || [];
  const totalCount = allClass?.totalCount || [];
  console.log(result, totalCount);

  useEffect(() => {
    const count = Math.ceil(totalCount / limit);
    const ans = parseInt(count);

    settotalPage(ans);
  }, [allClass, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPage) {
      setcurrentPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage((prev) => prev - 1);
    }
  };

  const selectPage = (num) => {
    setcurrentPage(num);
  };

  console.log(totalPage, "df");

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(allClass);

  // serach button

  return (
    <div className="bg-stone-200 py-24">
      <Helmet>
        <title>All Class</title>
      </Helmet>

      <div className="w-full p-3 fixed bg-transparent backdrop-blur-md flex justify-center items-center mx-auto -mt-6">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            onChange={(e) => setqueryx(e.target.value)}
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </div>

      {isLoading ? (
        <div className="w-full flex justify-center py-36 ">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-6 py-16 cursor-pointer ">
          {result.map((item, key) => (
            <div
              key={key}
              class=" border border-black/10 bg-white shadow-lg hover:shadow-2xl hover:shadow-slate-700 rounded w-full"
            >
              <div class="  p-4 rounded-md h-72 w-10/11">
                <img src={item.image} className="h-72 rounded w-full"/>
              </div>

              <div class="w-4/5 p-4 md:p-4">
                <h1 class="text-xl font-bold text-gray-800 dark:text-white">
                  <p>{item.name}</p>
                </h1>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
      {/* step */}

      <div class="flex justify-center gap-6">
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

            <span class="mx-1 cursor-pointer" onClick={prevPage}>
              previous
            </span>
          </div>
        </a>

        {/*  */}

        {/* {
          Array.from({length:totalPage}).map((_,index)=> <button onClick={selectPage(index+1)} className="btn">s{index+1}</button>)
        } */}

        {Array.from({ length: totalPage }).map((_, index) => (
          <button
            className="btn"
            onClick={() => selectPage(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}

        <a
          href="#"
          class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          <div class="flex items-center -mx-1">
            <span class="mx-1" onClick={nextPage}>
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
    </div>
  );
}

export default AllClass;
