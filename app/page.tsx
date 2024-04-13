//
import Sidebar from "@components/Sidebar";
import Dashboard from "@components/Dashboard";
import { getDashboard } from "@lib/db";
import { type DashboardType } from "@lib/Interface";

// Page
export default async function Page(): Promise<JSX.Element>
{
  const data: DashboardType = await getDashboard();

  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col">
        <Dashboard dashboardData={ data } />
      </div>
    </>
  );
}