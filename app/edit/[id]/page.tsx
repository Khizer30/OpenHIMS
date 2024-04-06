import { type Metadata } from "next";
//
import Sidebar from "@components/Sidebar";
import Form from "@components/Forms/Edit";
import { getAppointment } from "@lib/db";
import { type PatientAppointmentType } from "@lib/Interface";

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
  const data: PatientAppointmentType = await getAppointment(+params.id);

  return (
    <>
      <Sidebar />
      <div className=" w-full p-4 flex flex-col justify-center items-center">
        <h1 className=" m-4 font-primary font-medium text-center text-5xl text-grey"> Edit Appointment </h1>
        <Form { ...data } />
      </div>
    </>
  );
}