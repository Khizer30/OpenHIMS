import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";
import Form from "@components/Forms/Appointment";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | New Appointment",
  keywords: ["OpenHIMS", "New Appointment"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <h1 className=" m-4 font-primary font-medium text-center text-5xl text-grey"> New Appointment </h1>
        <Form />
      </div>
    </>
  );
}