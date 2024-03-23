//
import prisma from "@lib/prisma";
import { type AppointmentType, type PatientType } from "@lib/Interface";

// Appointment Object
const appointmentObj: AppointmentType =
{
  id: 0,
  date: new Date().toISOString().slice(0, 10),
  type: "",
  fees: 0,
  doctor: "",
  patientPhone: ""
};

// Patient Object
const patientObj: PatientType =
{
  name: "",
  age: 0,
  gender: "",
  phone: "",
  appointments: []
};



export { appointmentObj, patientObj };