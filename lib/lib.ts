//
import { type PatientType, type AppointmentType } from "@lib/Interface";

// Patient Object
const patientObj: PatientType =
{
  name: "",
  age: 0,
  gender: "",
  phone: "",
  appointments: []
};

// Appointment Object
const appointmentObj: AppointmentType =
{
  id: 0,
  date: new Date().toISOString().slice(0, 10),
  service: "",
  charges: 0,
  doctor: "",
  patientPhone: ""
};

export { patientObj, appointmentObj };