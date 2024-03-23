"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Input, Select, Option, Button } from "@material-tailwind/react";
//
import { appointmentObj, patientObj } from "@lib/lib";
import { type AppointmentType, type PatientType } from "@lib/Interface";

// Form
export default function Form(): JSX.Element
{
  const [appointment, setAppointment] = useState<AppointmentType>(appointmentObj);
  const [patient, setPatient] = useState<PatientType>(patientObj);

  // Handle Submit
  async function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    await fetch("/api/print",
      {
        mode: "same-origin",
        cache: "no-cache",
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment: appointment, patient: patient })
      });
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>)
  {
    if (e.target.name === "date" || e.target.name === "type"
      || e.target.name === "fees" || e.target.name === "doctor")
    {
      setAppointment((x: AppointmentType) => ({ ...x, [e.target.name]: e.target.value }));
    }
    else if (e.target.name === "name")
    {
      setPatient((x: PatientType) => ({ ...x, name: e.target.value.toUpperCase() }));
    }
    else
    {
      setPatient((x: PatientType) => ({ ...x, [e.target.name]: e.target.value }));
    }
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

        <div className=" my-4">
          <Select
            name="type"
            label="Type"
            variant="outlined"
            size="lg"
            color="blue"
            value={ appointment.service }
            onChange={ (val: string | undefined) => setAppointment((x: AppointmentType) => ({ ...x, type: val || "" })) }
          >
            <Option value="Consultation"> Consultation </Option>
            <Option value="Procedure"> Procedure </Option>
            <Option value="ECG"> ECG </Option>
          </Select>
        </div>

        <div className=" my-4">
          <Input
            name="date"
            type="date"
            label="Date"
            variant="outlined"
            size="lg"
            color="blue"
            value={ appointment.date }
            onChange={ handleChange }
          />
        </div>

        <div className=" my-4">
          <Input
            name="fees"
            type="number"
            label="Fees"
            variant="outlined"
            size="lg"
            color="blue"
            value={ appointment.charges || "" }
            onChange={ handleChange }
          />
        </div>

        <div className=" my-4">
          <Select
            name="doctor"
            label="Doctor"
            variant="outlined"
            size="lg"
            color="blue"
            value={ appointment.doctor }
            onChange={ (val: string | undefined) => setAppointment((x: AppointmentType) => ({ ...x, doctor: val || "" })) }
          >
            <Option value="None"> None </Option>
            <Option value="Asad Ali Owaisi"> Dr. Asad Ali Owaisi </Option>
          </Select>
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
            value={ patient.name }
            onChange={ handleChange }
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
            value={ patient.age || "" }
            onChange={ handleChange }
          />
        </div>

        <div className=" my-4">
          <Select
            name="gender"
            label="Patient's Gender"
            variant="outlined"
            size="lg"
            color="blue"
            value={ patient.gender }
            onChange={ (val: string | undefined) => setPatient((x: PatientType) => ({ ...x, gender: val || "" })) }
          >
            <Option value="Male"> Male </Option>
            <Option value="Female"> Female </Option>
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
            value={ patient.phone }
            onChange={ handleChange }
          />
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