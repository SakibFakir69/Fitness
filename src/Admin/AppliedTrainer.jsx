import UseAppliedTrainer from "@/Hooks/UseAppliedTrainer";
import UseAxiosSecure from "@/Hooks/UseAxiosSecure";

import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

function AppliedTrainer() {
  // use secure

  const { isLoading, error, appliedTrainer } = UseAppliedTrainer();

  // show trainer by table
  // Details all info
  /// accpect or reject button

  if (isLoading) {
    return <p>loading...</p>;
  }

  const onlyPendingTrainer = appliedTrainer.filter(
    (trainer) => trainer.Status === "pending"
  );
  console.log(onlyPendingTrainer<"appliewd");

  // add pagination

  return (
    <div>
      <Helmet>
        <title>Applied Trainer</title>
      </Helmet>

      <section class="container px-4 mx-auto mt-4 border ">
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-gray-800 dark:text-white">
            Application
          </h2>

          <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {onlyPendingTrainer.length} Applied Trainer
          </span>
        </div>

        <div class="flex flex-col mt-6">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Experience
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {onlyPendingTrainer?.map((item, key) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.Name}
                    </th>
                    <td class="px-6 py-4">{item.Email}</td>
                    <td class="px-6 py-4">{item.Experience}</td>
                    <td>
                      <NavLink to={`/admindashboard/appliedTrainerdetails/${item._id}`}>View</NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppliedTrainer;
