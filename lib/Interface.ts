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

// JSON
interface JSON
{
  patient: PatientType;
  appointment: AppointmentType;
}

export type { Children, PatientType, AppointmentType, JSON };