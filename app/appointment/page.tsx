import { type Metadata } from "next";
//
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
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <p className=" m-4 font-primary font-medium text-5xl text-grey"> New Appointment </p>
        <Form />
      </div>
    </>
  );
}