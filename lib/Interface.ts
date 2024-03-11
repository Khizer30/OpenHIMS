import { type ReactNode } from "react";

// Children
interface Children
{
  children: ReactNode;
}

// Appointment
interface Appointment
{
  id: number;
  date: string;
  doctor: string;
  fees: number;

  name: string;
  age: number;
  gender: string;
  phone: string;
}

export type { Children, Appointment };