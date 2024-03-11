"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Input, Select, Option, Button } from "@material-tailwind/react";
//
import { appointmentObj } from "@lib/lib";
import { type Appointment } from "@lib/Interface";

// Form
export default function Form(): JSX.Element
{
  const [inputs, setInputs] = useState<Appointment>(appointmentObj);

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    console.log(inputs);
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>)
  {
    setInputs((x: Appointment) => ({ ...x, [e.target.name]: e.target.value }));
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
          <Input
            name="id"
            type="number"
            label="Appointment No."
            variant="outlined"
            size="lg"
            color="blue"
            autoFocus
            value={ inputs.id || "" }
            onChange={ handleChange }
            crossOrigin={ undefined }
          />
        </div>

        <div className=" my-4">
          <Input
            name="date"
            type="date"
            label="Date"
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.date }
            onChange={ handleChange }
            crossOrigin={ undefined }
          />
        </div>

        <div className=" my-4">
          <Select
            name="doctor"
            label="Doctor"
            placeholder="Doctor"
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.doctor }
            onChange={ (val: string | undefined) => setInputs((x: Appointment) => ({ ...x, doctor: val || "" })) }
          >
            <Option value="Asad Ali Owaisi"> Dr. Asad Ali Owaisi </Option>
          </Select>
        </div>

        <div className=" my-4">
          <Input
            name="fees"
            type="number"
            label="Fees"
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.fees || "" }
            onChange={ handleChange }
            crossOrigin={ undefined }
          />
        </div>

        <br />

        <div className=" my-4">
          <Input
            name="name"
            type="text"
            label="Patient's Name"
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.name }
            onChange={ handleChange }
            crossOrigin={ undefined }
          />
        </div>

        <div className=" my-4">
          <Input
            name="age"
            type="number"
            label="Patient's Age"
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.age || "" }
            onChange={ handleChange }
            crossOrigin={ undefined }
          />
        </div>

        <div className=" my-4">
          <Select
            name="gender"
            label="Patient's Gender"
            placeholder="Patient's Gender"
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.gender }
            onChange={ (val: string | undefined) => setInputs((x: Appointment) => ({ ...x, gender: val || "" })) }
          >
            <Option value="M"> Male </Option>
            <Option value="F"> Female </Option>
          </Select>
        </div>

        <div className=" my-4">
          <Input
            name="phone"
            type="tel"
            label="Patient's Contact No."
            variant="outlined"
            size="lg"
            color="blue"
            value={ inputs.phone }
            onChange={ handleChange }
            crossOrigin={ undefined }
          />
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