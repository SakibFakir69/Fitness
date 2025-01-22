import UseallNewsLetter from "@/Hooks/UseallNewsLetter";
import UsePayment from "@/Hooks/UsePayment";
import UsetrnsHIstory from "@/Hooks/UsetrnsHIstory";
import { all } from "axios";
import { PieChart } from "lucide-react";
import { Helmet } from "react-helmet";
import React from "react";
import {
  Pie,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  ReferenceLine,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
import Vschart from "./Vschart";

function BalanceAll() {
  const { allPayment } = UsePayment();
  console.log(allPayment);

  const totalRevenu = Array.isArray(allPayment)
  ? allPayment.reduce((pay, item) => {
      return pay + (parseFloat(item?.amount) || 0); 
    }, 0)
  : 0;

  console.log(totalRevenu.amount, "rev");
  const { history } = UsetrnsHIstory();
  
  console.log(history, "history");
  const { allnewsletter } = UseallNewsLetter();

  return (
    <div className="bg-gradient-to-t from-violet-400 to-indigo-950 h-screen px-6">
          <Helmet>
        <title>Balance</title>
      </Helmet>
      {allPayment.length}

      <section className="w-full md:flex  items-center gap-4 justify-center">
        <section className="flex-1">
          <div>
            <div className="stats shadow border">
              <div className="stat place-items-center">
                <div className="stat-title">Total Payment</div>
                <div className="stat-value">{ totalRevenu} $</div>
              </div>
            </div>
          </div>
        </section>

        {/* history */}
        <section className="flex-1 border-1">
          <h2 className="text-2xl text-white font-semibold text-center">
            Latest 6 item payment history
          </h2>

          <div className="text-white border">
            <div className="overflow-x-scroll">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-red-500">
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Id</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {history?.map((item, key) => (
                    <tr>
                      <th>{key + 0}</th>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item?.TransictionID}</td>
                      <td>{item.Time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>

      {/* add pie cart here */}
      {/* total newsletter subscribers vs total paid members.  */}

      <section className=" bg-white flex justify-center px-4 mb-10 md:mt-4">
        <Vschart />
      </section>
    </div>
  );
}

export default BalanceAll;
