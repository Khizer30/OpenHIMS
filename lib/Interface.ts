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
  appointments?: AppointmentType[];
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

// Patient Appointment Type
interface PatientAppointmentType
{
  patient: PatientType;
  appointment: AppointmentType;
}

// Dates Type
interface DatesType
{
  fromDate: string;
  toDate: string;
}

// Records Type
interface RecordsType
{
  appointmentID: number;
  appointmentDate: string;
  appointmentService: string;
  appointmentDoctor: string;
  appointmentCharges: number;
  patientName: string;
}

// Edit API Interface
interface EditAPI
{
  success: boolean;
}

export type { Children, PatientType, AppointmentType, PatientAppointmentType, DatesType, RecordsType, EditAPI };