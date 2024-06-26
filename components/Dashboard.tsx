"use client";
import { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, type ChartData } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
//
import { dashboardObj } from "@lib/lib";
import { type DashboardType } from "@lib/Interface";

// ChartJS Register
Chart.register(ArcElement, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);

// Dashboard
export default function Dashboard(): JSX.Element
{
  const [dashboard, setDashboard] = useState<DashboardType>(dashboardObj);

  // On Mount
  useEffect(() =>
  {
    getDashboard();
  }, []);

  // Colors
  const colors: string[] = ["#00BFFF", "#14A6E1", "#0080C0", "#3366CC", "#1A5AA1", "#004080"];

  // Doughnut Data
  const doughnutData: ChartData<"doughnut", number[], string> =
  {
    labels: dashboard.portionNames,
    datasets:
      [{
        label: "Revenue",
        data: dashboard.portionRevenues,
        borderColor: colors,
        backgroundColor: colors
      }]
  };

  // Line Data
  const lineData: ChartData<"line", number[], string> =
  {
    labels: dashboard.days,
    datasets:
      [{
        label: "Revenue",
        data: dashboard.revenues,
        tension: 0.2,
        borderColor: colors[0],
        backgroundColor: colors[0]
      }]
  };

  // Get Dashboard
  async function getDashboard(): Promise<void>
  {
    const res: Response = await fetch("/api/dashboard",
      {
        mode: "same-origin",
        cache: "no-cache",
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        }
      });

    const response: DashboardType = await res.json();
    setDashboard(response);
  }

  // Today Revenue
  function todayRevenue(): number
  {
    const today: string = new Date().toDateString().split(" ")[0];
    let revenue: number = 0;

    for (let i: number = 0; i < dashboard.days.length; i++)
    {
      if (today === dashboard.days[i])
      {
        revenue = dashboard.revenues[i];
      }
    }

    return revenue;
  }

  return (
    <>
      <div className=" my-4 h-2/5 flex justify-center items-center">

        <div className=" w-2/5 h-full mx-4 flex flex-col justify-center items-center rounded-lg shadow shadow-gray-200 bg-gray-50">
          <h1 className=" my-2 font-secondary font-semibold text-center text-3xl text-grey"> Today's Revenue </h1>
          <h3 className=" my-2 font-secondary font-bold text-center text-5xl text-grey"> Rs { todayRevenue() } </h3>
        </div>

        <div className=" w-3/5 h-full mx-4 p-6 flex justify-center items-center rounded-lg shadow shadow-gray-200 bg-gray-50">
          { (dashboard.portionNames.length !== 0) &&
            <Doughnut
              data={ doughnutData }
            />
          }
        </div>

      </div>
      <div className=" my-4 h-2/5 flex justify-center items-center">

        <div className=" w-full h-full mx-4 p-6 flex justify-center items-center rounded-lg shadow shadow-gray-200 bg-gray-50">
          { (dashboard.days.length !== 0) &&
            <Line
              data={ lineData }
            />
          }
        </div>

      </div>
    </>
  );
}