"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Input, Button } from "@material-tailwind/react";
//
import { recordsObj } from "@lib/lib";
import { type RecordsType } from "@lib/Interface";

// Form
export default function Form(): JSX.Element
{
  const [records, setRecords] = useState<RecordsType>(recordsObj);

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>): void
  {
    setRecords((x: RecordsType) => ({ ...x, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <form
        method="get"
        target="_self"
        encType="application/x-www-form-urlencoded"
        autoComplete="off"
        className=" w-1/2"
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
              color="blue"
              value={ records.fromDate }
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
              color="blue"
              value={ records.toDate }
              onChange={ handleChange }
            />
          </div>
        </div>

        <div className=" my-4 flex justify-center items-center">
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            color="blue"
            ripple
          >
            Submit
          </Button>
        </div>

      </form >
    </>
  );
}