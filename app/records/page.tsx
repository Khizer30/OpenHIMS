import { type Metadata } from "next";
//
import Form from "@components/Forms/Records";

// Metadata
export const metadata: Metadata =
{
  title: "Clinic Run | Records",
  keywords: ["Clinic Run", "Records"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <div className=" p-6 flex flex-col justify-center items-center">
        <p className=" m-4 md:m-6 font-primary font-medium text-3xl md:text-5xl text-grey"> Patient Records </p>
        <Form />
      </div>
    </>
  );
}