import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | 404",
  keywords: ["OpenHIMS", "404"]
};

// Not Found
export default function NotFound(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <h1 className=" m-4 font-primary font-medium text-center text-7xl text-grey"> 404 </h1>
        <h2 className=" m-4 font-primary font-medium text-center text-5xl text-grey"> Page Not Found! </h2>
      </div>
    </>
  );
}