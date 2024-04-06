import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";
import Form from "@components/Forms/Records";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | Appointment Records",
  keywords: ["OpenHIMS", "Appointment Records"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <h1 className=" m-4 font-primary font-medium text-center text-5xl text-grey"> Appointment Records </h1>
        <Form />
      </div>
    </>
  );
}