"use client";
import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@material-tailwind/react";
import { PencilSquareIcon, PrinterIcon } from "@heroicons/react/24/solid";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
//
import { datesObj, generatePDF } from "@lib/lib";
import { type DatesType, type RecordsType } from "@lib/Interface";

// Form
export default function Form(): JSX.Element
{
  const [dates, setDates] = useState<DatesType>(datesObj);
  const [records, setRecords] = useState<RecordsType[]>([]);
  const router: AppRouterInstance = useRouter();

  // On Mount
  useEffect(() =>
  {
    handleSubmit();
  }, []);

  // Handle Submit
  async function handleSubmit(e?: FormEvent<HTMLFormElement>)
  {
    e?.preventDefault();

    const res: Response = await fetch("/api/records",
      {
        mode: "same-origin",
        cache: "no-cache",
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dates)
      });

    const response: RecordsType[] = await res.json();
    setRecords(response);
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>): void
  {
    setDates((x: DatesType) => ({ ...x, [e.target.name]: e.target.value }));
  }

  // Row Mapper
  function rowMapper(x: RecordsType): JSX.Element
  {
    return (
      <div className=" grid grid-cols-12" key={ x.appointmentID }>
        <div className=" p-2 col-span-3 flex justify-start items-center border border-r-gray-300">
          <h6 className=" font-secondary text-sm text-gray-700"> { x.patientName } </h6>
        </div>
        <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-secondary text-sm text-gray-700"> { x.appointmentDate } </h6>
        </div>
        <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-secondary text-sm text-gray-700"> { x.appointmentService } </h6>
        </div>
        <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-secondary text-sm text-gray-700"> { x.appointmentDoctor } </h6>
        </div>
        <div className=" p-2 col-span-1 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-secondary text-sm text-gray-700"> { `Rs ${ x.appointmentCharges }` } </h6>
        </div>
        <div className=" p-2 col-span-1 flex justify-center items-center border border-x-gray-300">
          <Button
            type="button"
            onClick={ () => edit(x.appointmentID) }
            variant="gradient"
            size="sm"
            color="gray"
            ripple
            className=" rounded-full"
          >
            <PencilSquareIcon className=" w-5 h-5" />
          </Button>
        </div>
        <div className=" p-2 col-span-1 flex justify-start items-center border border-l-gray-300">
          <Button
            type="button"
            onClick={ () => print(x) }
            variant="gradient"
            size="sm"
            color="gray"
            ripple
            className=" rounded-full"
          >
            <PrinterIcon className=" w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  }

  // Edit
  function edit(x: number): void
  {
    router.push(`/edit/${ x }`);
  }

  // Print
  async function print(x: RecordsType): Promise<void>
  {
    const res: Response = await fetch("/api/print",
      {
        mode: "same-origin",
        cache: "no-cache",
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: x.appointmentID, name: x.patientName })
      });

    const response: Blob = await res.blob();
    generatePDF(response);
  }

  return (
    <>
      <form
        method="get"
        target="_self"
        encType="application/x-www-form-urlencoded"
        autoComplete="off"
        className=" w-full px-6"
        onSubmit={ handleSubmit }
      >

        <div className=" flex justify-center items-center">
          <div className=" m-4">
            <Input
              name="fromDate"
              type="date"
              label="From Date"
              variant="outlined"
              size="lg"
              color="gray"
              value={ dates.fromDate }
              onChange={ handleChange }
            />
          </div>

          <div className=" m-4">
            <Input
              name="toDate"
              type="date"
              label="To Date"
              variant="outlined"
              size="lg"
              color="gray"
              value={ dates.toDate }
              onChange={ handleChange }
            />
          </div>
        </div>

        <div className=" my-4 flex justify-center items-center">
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            color="gray"
            ripple
          >
            Submit
          </Button>
        </div>

        <div className=" h-[50vh] my-10 border border-gray-300 rounded-lg overflow-y-scroll">

          <div className=" h-10 grid grid-cols-12 bg-gray-100">
            <div className=" p-2 col-span-3 flex justify-start items-center border border-r-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Name </h6>
            </div>
            <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Date </h6>
            </div>
            <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Service </h6>
            </div>
            <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Doctor </h6>
            </div>
            <div className=" p-2 col-span-1 flex justify-start items-center border border-x-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Charges </h6>
            </div>
            <div className=" p-2 col-span-1 flex justify-start items-center border border-x-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Edit </h6>
            </div>
            <div className=" p-2 col-span-1 flex justify-start items-center border border-l-gray-300">
              <h6 className=" font-secondary font-semibold text-sm text-gray-700"> Print </h6>
            </div>
          </div>

          { records.map(rowMapper) }

        </div>

      </form >
    </>
  );
}