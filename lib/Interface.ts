import { type ReactNode } from "react";

// Children
interface Children
{
  children: ReactNode;
}

// Appointment Type
interface AppointmentType
{
  id: number;
  date: string;
  type: string;
  fees: number;
  doctor: string;
  patientPhone: string;
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

export type { Children, AppointmentType, PatientType };