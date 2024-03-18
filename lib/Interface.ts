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
  type: string;
  fees: number;
  doctor: string;

  name: string;
  age: number;
  gender: string;
  phone: string;
}

export type { Children, Appointment };