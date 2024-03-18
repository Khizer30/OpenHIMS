import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";
import Form from "@components/Forms/Records";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | Patient Records",
  keywords: ["OpenHIMS", "Patient Records"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <p className=" m-4 font-primary font-medium text-5xl text-grey"> Patient Records </p>
        <Form />
      </div>
    </>
  );
}