//
import { type PatientType, type AppointmentType } from "@lib/Interface";

// Patient Object
const patientObj: PatientType =
{
  /*
  name: "",
  age: 0,
  gender: "",
  phone: "",
  appointments: []
  */
  name: "MUHAMMAD KHIZER",
  age: 21,
  gender: "Male",
  phone: "03045149450",
  appointments: []
};

// Appointment Object
const appointmentObj: AppointmentType =
{
  /*
  id: 0,
  date: new Date().toISOString().slice(0, 10),
  service: "",
  doctor: "",
  charges: 0,
  patientPhone: ""
  */

  id: 0,
  date: new Date().toISOString().slice(0, 10),
  service: "Consultation",
  doctor: "Dr. Asad Ali Owaisi",
  charges: 2000,
  patientPhone: ""
};

// Services
const services: string[] = ["Consultation", "Nebulizing", "Injection", "ECG", "Acupuncture"];

// Doctors
const doctors: string[] = ["Dr. Asad Ali Owaisi", "None"];

// Check Number
function checkNumber(y: string): boolean
{
  if (+y >= 0 && +y <= 100000 && y !== "")
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Check String
function checkString(y: string): boolean
{
  if (y !== "" && y.length <= 100)
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Validate Patient
function validatePatient(x: PatientType): boolean
{
  if (checkString(x.name) && checkNumber(x.age.toString()) && checkString(x.gender) && checkString(x.phone))
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Validate Appointment
function validateAppointment(x: AppointmentType): boolean
{
  if (checkString(x.date) && checkString(x.service) && checkString(x.doctor) && checkNumber(x.charges.toString()))
  {
    return true;
  }
  else
  {
    return false;
  }
}

export { patientObj, appointmentObj, doctors, services, validatePatient, validateAppointment };