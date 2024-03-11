//
import { type Appointment } from "@lib/Interface";

// Appointment Object
const appointmentObj: Appointment =
{
  id: 0,
  date: new Date().toISOString().slice(0, 10),
  doctor: "",
  fees: 2000,

  name: "",
  age: 0,
  gender: "",
  phone: ""
};

export { appointmentObj };