import Image from "next/image";
import { type Metadata } from "next";
//
import { getAppointment } from "@lib/db";
import { type PatientAppointmentType } from "@lib/Interface";
import logo from "@images/clinic.webp";

// Metadata
export const metadata: Metadata =
{
  title: "OpenHIMS | Print",
  keywords: ["OpenHIMS", "Print"]
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

  // ID Maker
  function makeID(): string
  {
    const today: Date = new Date();
    const year: string = today.getUTCFullYear().toString().slice(2, 4);
    const month: string = (today.getMonth() + 1).toString().padStart(2, "0");
    const id: string = params.id.padStart(4, "0");

    return `${ year }${ month }${ id }`;
  }

  return (
    <>
      <div className=" w-full m-4 flex flex-col justify-center items-center">

        <div className=" w-full mb-8 flex justify-center items-center">
          <Image
            src={ logo }
            alt="The Owaisi's Clinic"
            draggable="false"
            priority
            className=" w-24 h-24 mx-4"
          />
          <h1 className=" mx-4 font-primary font-semibold text-center text-3xl text-grey"> THE OWAISI'S CLINIC </h1>
        </div>

        <div className=" w-full my-2 grid grid-cols-7 text-sm text-grey">
          <h6 className=" col-span-5 font-primary font-bold"> Name: <span className=" font-secondary font-normal"> { data.patient.name } </span> </h6>
          <h6 className=" col-span-2 font-primary font-bold"> Date: <span className=" font-secondary font-normal"> { data.appointment.date } </span> </h6>
        </div>

        <div className=" w-full my-2 grid grid-cols-7 text-sm text-grey">
          <h6 className=" col-span-5 font-primary font-bold"> Age: <span className=" font-secondary font-normal"> { data.patient.age } years </span> </h6>
          <h6 className=" col-span-2 font-primary font-bold"> Appointment No: <span className=" font-secondary font-normal"> { makeID() } </span> </h6>
        </div>

        <div className=" w-full my-2 grid grid-cols-7 text-sm text-grey">
          <h6 className=" col-span-5 font-primary font-bold"> Gender: <span className=" font-secondary font-normal"> { data.patient.gender } </span> </h6>
          <h6 className=" col-span-2 font-primary font-bold"> Contact No: <span className=" font-secondary font-normal"> { data.patient.phone } </span> </h6>
        </div>

        <div className=" w-full my-8 grid grid-cols-10 text-sm text-grey">
          <h6 className=" p-2 col-span-2 font-primary font-bold text-left border border-grey rounded-l-lg"> { data.appointment.service } </h6>
          <h6 className=" p-2 col-span-8 font-secondary font-normal text-right border border-grey rounded-r-lg"> Rs { data.appointment.charges } /- </h6>
        </div>

        <div className=" w-full my-4 grid grid-cols-7 text-sm text-grey">
          <h6 className={ ` col-span-5 font-primary font-bold ${ (data.appointment.doctor === "None") ? "invisible" : "" }` }> Doctor: <span className=" font-secondary font-normal"> { data.appointment.doctor } </span> </h6>
          <h6 className=" col-span-2 font-primary font-bold"> Receiver's Signature: <span className=" font-secondary font-normal"> ________ </span> </h6>
        </div>

        <hr className=" w-full h-1 my-4 rounded-lg bg-grey" />

      </div>
    </>
  );
}