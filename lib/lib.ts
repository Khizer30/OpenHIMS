//
import { type PatientType, type AppointmentType, type DatesType, type DashboardType } from "@lib/Interface";

// Patient Object
const patientObj: PatientType =
{
  name: "",
  age: 0,
  gender: "",
  phone: "",
  appointments: []
};

// Appointment Object
const appointmentObj: AppointmentType =
{
  id: 0,
  date: new Date().toISOString().slice(0, 10),
  service: "",
  doctor: "",
  charges: 0,
  patientPhone: ""
};

// Dates Object
const datesObj: DatesType =
{
  fromDate: new Date().toISOString().slice(0, 10),
  toDate: new Date().toISOString().slice(0, 10)
};

// Dashboard Object
const dashboardObj: DashboardType =
{
  revenues: [],
  days: [],
  portionNames: [],
  portionRevenues: []
};

// Services
const services: string[] = ["Consultation", "ECG", "Injection", "Acupuncture", "Procedure", "Nebulizing"];

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

// Generate PDF
function generatePDF(x: Blob): void
{
  const pdfURL: string = URL.createObjectURL(x);
  const pdfWindow: Window | null = window.open(pdfURL);

  if (pdfWindow)
  {
    pdfWindow.onload = () =>
    {
      pdfWindow.print();
    };
  }
}

// Date String Formatter
function dateStringFormatter(x: string): string
{
  const [day, month, year] = x.split("/");

  return `${ year }-${ month }-${ day }`;
}

export { patientObj, appointmentObj, datesObj, dashboardObj, services, doctors, validatePatient, validateAppointment, generatePDF, dateStringFormatter };