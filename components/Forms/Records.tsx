"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Select, Option, Button } from "@material-tailwind/react";
//
import { type AppointmentType } from "@lib/Interface";

// Form
export default function Form(): JSX.Element
{
  const [input, setInput] = useState<string>("");
  const [dates, setDates] = useState<string[]>(["02/03/2024", "30/11/2002"]);

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    console.log(input);
  }

  // Options Mapper
  function optionsMapper(x: string): JSX.Element
  {
    return <Option key={ x } value={ x }> { x } </Option>;
  }

  return (
    <>
      <form
        method="get"
        target="_self"
        encType="application/x-www-form-urlencoded"
        autoComplete="off"
        className=" w-3/4 md:w-1/2"
        onSubmit={ handleSubmit }
      >

        <div className=" my-4">
          <Select
            name="date"
            label="Date"
            placeholder="Date"
            variant="outlined"
            size="lg"
            color="blue"
            value={ input }
            onChange={ (val: string | undefined) => setInput(val || "") }
          >
            { dates.map(optionsMapper) }
          </Select>
        </div>

        <div className=" my-4 flex justify-center items-center">
          <Button
            type="submit"
            placeholder=""
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