import { type ReactNode } from "react";

// Children
interface Children
{
  children: ReactNode;
}

// Patient Type
interface PatientType
{
  name: string;
  age: number;
  gender: string;
  phone: string;
  appointments: AppointmentType[];
}

// Appointment Type
interface AppointmentType
{
  id: number;
  date: string;
  service: string;
  doctor: string;
  charges: number;
  patientPhone: string;
}

// Print JSON
interface PrintJSON
{
  patient: PatientType;
  appointment: AppointmentType;
}

// Records Type
interface RecordsType
{
  fromDate: string;
  toDate: string;
  appointments: AppointmentType[];
}

export type { Children, PatientType, AppointmentType, PrintJSON, RecordsType };