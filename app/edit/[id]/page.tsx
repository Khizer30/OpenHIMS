import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";
import Form from "@components/Forms/Edit";
import { getAppointment } from "@lib/db";
import { type PrintJSON } from "@lib/Interface";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | Edit Appointment",
  keywords: ["OpenHIMS", "Edit Appointment"]
};

// Params
interface Params
{
  params:
  {
    id: string;
  };
}

// Page
export default async function Page({ params }: Params): Promise<JSX.Element>
{
  const data: PrintJSON = await getAppointment(+params.id);

  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <p className=" m-4 font-primary font-medium text-center text-5xl text-grey"> Edit Appointment </p>
        <Form { ...data } />
      </div>
    </>
  );
}