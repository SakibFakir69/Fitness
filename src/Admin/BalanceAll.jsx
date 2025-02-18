import UseallNewsLetter from "@/Hooks/UseallNewsLetter";
import UsePayment from "@/Hooks/UsePayment";
import UsetrnsHIstory from "@/Hooks/UsetrnsHIstory";
import { Helmet } from "react-helmet";
import React from "react";
import Vschart from "./Vschart";

function BalanceAll() {
  const { allPayment } = UsePayment();
  console.log(allPayment, "taka");

  const totalRevenu = Array.isArray(allPayment)
    ? allPayment.reduce((pay, item) => {
        return pay + (parseFloat(item?.amount) || 0);
      }, 0)
    : 0;

  const { history } = UsetrnsHIstory();
  const { allnewsletter } = UseallNewsLetter();

  return (
    <div className="bg-gradient-to-t from-violet-400 to-indigo-950 min-h-screen p-4 ">

      <Helmet>
        <title>Balance</title>
      </Helmet>

      {/* Stats Section */}
      <section className="flex flex-col items-center gap-4 w-full">

        <div className="stats shadow border w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="stat place-items-center">
            <div className="stat-title">Total Payment</div>
            <div className="stat-value">{totalRevenu} $</div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="border mt-6 mx-auto bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
  <h2 className="text-2xl text-gray-800 font-semibold text-center mb-4">
    Latest 6 Payments
  </h2>

  {/* Scrollable Table Container */}
  <div className="overflow-x-auto w-full">
    <table className="table-auto w-full min-w-[600px] border-collapse border border-gray-300">
      {/* Table Head */}
      <thead>
        <tr className="bg-gray-100 text-gray-700">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Date</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {history?.map((item, index) => (
          <tr key={index} className="text-gray-800 text-center">
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">{item.Name}</td>
            <td className="p-2 border">{item.Email}</td>
            <td className="p-2 border">{item?.TransictionID}</td>
            <td className="p-2 border">{item.Time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      {/* Chart Section */}
      <section className="bg-white p-4 rounded-lg shadow-lg mt-6 mx-auto w-full max-w-4xl">
        <Vschart />
      </section>
    </div>
  );
}

export default BalanceAll;
