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
  LineChart,
  Line,
} from "recharts";
import UseallNewsLetter from "@/Hooks/UseallNewsLetter";

import UsePayment from "@/Hooks/UsePayment";

function Vschart() {
  const { isLoading, allnewsletter } = UseallNewsLetter();
  const { allPayment } = UsePayment();
  

  const data = [
    { name: "Newsletter subscribers", pv: allnewsletter.length },
    { name: "Paid members", pv: allPayment.length },
  ];



  return (
 
  
    // <LineChart
  
    //   width={500}
    //   height={300}
    //   data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    //   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    // </LineChart>
    <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      {/* Optional: You can remove the second line if not needed */}
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>


  );
}

export default Vschart;
