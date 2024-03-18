import Image from "next/image";
import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";
import logo from "@images/clinic.webp";

// Metadata
export const metadata: Metadata =
{
  title: "Loading...",
  keywords: ["OpenHIMS", "Loading"]
};

// Loading
export default function Loading(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex justify-center items-center">
        <Image
          src={ logo }
          alt="The Owaisi's Clinic"
          draggable="false"
          className=" w-40 h-40 animate-pulse"
        />
      </div>
    </>
  );
}