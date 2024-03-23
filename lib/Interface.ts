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
  charges: number;
  doctor: string;
  patientPhone: string;
}

export type { Children, PatientType, AppointmentType };