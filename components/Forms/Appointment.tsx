"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Input, Select, Option, Button } from "@material-tailwind/react";
//
import { patientObj, appointmentObj, services, doctors, validatePatient, validateAppointment, generatePDF } from "@lib/lib";
import { type PatientType, type AppointmentType } from "@lib/Interface";

// Form
export default function Form(): JSX.Element
{
  const [patient, setPatient] = useState<PatientType>(patientObj);
  const [appointment, setAppointment] = useState<AppointmentType>(appointmentObj);

  // Handle Submit
  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void>
  {
    e.preventDefault();

    if (validatePatient(patient) && validateAppointment(appointment))
    {
      const res: Response = await fetch("/api/appointment",
        {
          mode: "same-origin",
          cache: "no-cache",
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ patient: patient, appointment: appointment })
        });

      const response: string = await res.json() as string;
      const url: string = `${ process.env.NEXT_PUBLIC_URL }/print/${ response }`;
      generatePDF(url);

      setPatient(patientObj);
      setAppointment(appointmentObj);
    }
    else
    {
      alert("Please, Complete The Form!");
    }
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>): void
  {
    if (e.target.name === "name")
    {
      setPatient((x: PatientType) => ({ ...x, name: e.target.value.toUpperCase() }));
    }
    else if (e.target.name === "age" || e.target.name === "phone")
    {
      setPatient((x: PatientType) => ({ ...x, [e.target.name]: e.target.value }));
    }
    else
    {
      setAppointment((x: AppointmentType) => ({ ...x, [e.target.name]: e.target.value }));
    }
  }

  // Option Mapper
  function optionMapper(x: string): JSX.Element
  {
    return (
      <Option value={ x } key={ x }> { x } </Option>
    );
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
          <Input
            name="name"
            type="text"
            label="Patient's Name"
            variant="outlined"
            size="lg"
            color="gray"
            autoFocus
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
            color="gray"
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
            color="gray"
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
            color="gray"
            value={ patient.phone }
            onChange={ handleChange }
          />
        </div>

        <br />

        <div className=" my-4">
          <Input
            name="date"
            type="date"
            label="Date"
            variant="outlined"
            size="lg"
            color="gray"
            value={ appointment.date }
            onChange={ handleChange }
          />
        </div>

        <div className=" my-4">
          <Select
            name="service"
            label="Service"
            variant="outlined"
            size="lg"
            color="gray"
            value={ appointment.service }
            onChange={ (val: string | undefined) => setAppointment((x: AppointmentType) => ({ ...x, service: val || "" })) }
          >
            { services.map(optionMapper) }
          </Select>
        </div>

        <div className=" my-4">
          <Select
            name="doctor"
            label="Doctor / Referred By"
            variant="outlined"
            size="lg"
            color="gray"
            value={ appointment.doctor }
            onChange={ (val: string | undefined) => setAppointment((x: AppointmentType) => ({ ...x, doctor: val || "" })) }
          >
            { doctors.map(optionMapper) }
          </Select>
        </div>

        <div className=" my-4">
          <Input
            name="charges"
            type="number"
            label="Charges"
            variant="outlined"
            size="lg"
            color="gray"
            value={ appointment.charges || "" }
            onChange={ handleChange }
          />
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

      </form >
    </>
  );
}