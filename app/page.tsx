//
import Sidebar from "@components/Sidebar";
import Dashboard from "@components/Dashboard";

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col">
        <Dashboard />
      </div>
    </>
  );
}