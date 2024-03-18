//
import { type Appointment } from "@lib/Interface";

// Appointment Object
const appointmentObj: Appointment =
{
  id: 0,
  date: new Date().toISOString().slice(0, 10),
  type: "",
  fees: 0,
  doctor: "",

  name: "",
  age: 0,
  gender: "",
  phone: ""
};

export { appointmentObj };