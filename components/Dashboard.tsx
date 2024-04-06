"use client";
import { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, type ChartData } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

// ChartJS Register
Chart.register(ArcElement, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);

// Dashboard
export default function Dashboard(): JSX.Element
{
  return (
    <>
      <div className=" my-4 h-2/5 flex justify-center items-center">

        <div className=" w-2/5 h-full mx-4 flex flex-col justify-center items-center rounded-lg shadow shadow-gray-200 bg-gray-50">
          <h1 className=" my-2 font-secondary font-semibold text-center text-3xl text-grey"> Today's Revenue </h1>
          <h3 className=" my-2 font-secondary font-bold text-center text-5xl text-grey"> PKR 0 </h3>
        </div>

        <div className=" w-3/5 h-full mx-4 p-4 flex justify-center items-center rounded-lg shadow shadow-gray-200 bg-gray-50">
          <Doughnut
            data={ {
              labels: ["Consultation", "ECG", "Injection", "Acupuncture", "Procedure", "Nebulizing"],
              datasets: [{ label: "Revenue", data: [100, 200, 300, 400, 500, 600] }]
            } }
          />
        </div>

      </div>
      <div className=" my-4 h-2/5 flex justify-center items-center">

        <div className=" w-full h-full mx-4 p-4 flex justify-center items-center rounded-lg shadow shadow-gray-200 bg-gray-50">
          <Line
            data={ {
              labels: ["01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024", "05/04/2024"],
              datasets: [{ label: "Revenue", data: [4000, 6000, 12000, 2000, 8000] }]
            } }
          />
        </div>

      </div>
    </>
  );
}