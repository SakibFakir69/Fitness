import UseAxiosSecure from "@/Hooks/UseAxiosSecure";
import UseSptrainer from "@/Hooks/UseSptrainer";

import { useQuery } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import Five from "./Five";
import { IterationCcw } from "lucide-react";
import { Helmet } from "react-helmet";

function AllClass() {
  // TODO :
  // add pagination here
  /// add praviate and proctedt route
  // loading , alert , input
  /// add class serach funtinolity

  const useaxiosSecure = UseAxiosSecure();

  const limit = 6;

  const [currentPage, setcurrentPage] = useState(0);
  const [totalPage, settotalPage] = useState(1);

  const [ queryx , setqueryx ] = useState('');

  const haddelSearch = (event)=>{
    event.prevenrDefault()
    setqueryx(queryx);
    alert(queryx);
  }

  




  const { isLoading, data: allClass } = useQuery({

    queryKey: ["data", currentPage,queryx],
    queryFn: async () => {
      const res = await useaxiosSecure.get(
        `/classpagination?page=${currentPage}&limit=${limit}&Name=${queryx}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  console.log(allClass, "pagi");

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
    <div className="bg-lime-100">
      <Helmet>
        <title>All Class</title>
      </Helmet>



      <div className="text-center">
        <h1>Find the Perfect Class for You</h1>
      </div>
      {/* add pagination */}

      <section>
        <h2 className="md:text-3xl text-center mb-4">Top 5 Trainer </h2>
        <Five />
      </section>

      <section>
        <h2 className="md:text-3xl text-center ">Our all class </h2>
      </section>

      <section className="flex justify-center mt-4">

      
        <input placeholder="Enter your searching name"  value={queryx} onChange={(e)=> setqueryx(e.target.value)} type="search.."  className="border px-8 py-2 focus:bg-black focus:text-white rounded-md "/>
     
   

      </section>


      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-6">
        {result.map((item, key) => (

          <div key={key} class="flex justify-center mx-auto  items-center max-w-md overflow-hidden bg-white rounded-lg shadow-sl dark:bg-gray-800 border p-4 hover:bg-violet-300 border-red-500">

            <div class="w-1/3 bg-cover">
              <img src={item.Image} />
            </div>

            <div class="w-2/3 p-4 md:p-4">
              <h1 class="text-xl font-bold text-gray-800 dark:text-white">
                <p>{item.Name}</p>
              </h1>

              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.Description}
              </p>

              <div class="flex justify-between mt-3 item-center">
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  View
                </button>
              </div>


            </div>
          </div>
        ))}
      </section>
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
