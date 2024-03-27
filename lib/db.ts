import { type Appointment } from "@prisma/client";
//
import prisma from "@lib/prisma";
import { appointmentObj, patientObj } from "@lib/lib";
import { type PatientType, type AppointmentType, type PrintJSON } from "@lib/Interface";

// Add Appointment
async function addAppointment(x: PatientType, y: AppointmentType): Promise<number>
{
  let appointment: Appointment | null = null;

  try
  {
    await prisma.patient.upsert({
      where: { phone: x.phone },
      update:
      {
        name: x.name,
        age: +x.age,
        gender: x.gender
      },
      create:
      {
        name: x.name,
        age: +x.age,
        gender: x.gender,
        phone: x.phone
      }
    });

    appointment = await prisma.appointment.create({
      data:
      {
        date: new Date(y.date),
        service: y.service,
        doctor: y.doctor,
        charges: +y.charges,
        patientPhone: x.phone
      }
    });
  }
  catch (e: unknown)
  {
    console.log(e);
  }
  finally
  {
    await prisma.$disconnect();
  }

  return appointment ? appointment.id : 0;
}

// Get Appointment
async function getAppointment(x: number): Promise<PrintJSON>
{
  let { patient, appointment }: PrintJSON = { patient: patientObj, appointment: appointmentObj };

  try
  {
    const data = await prisma.appointment.findUnique({
      where: { id: x },
      include: { Patient: true }
    });

    if (data)
    {
      patient = { ...data.Patient, appointments: [] };
      appointment =
      {
        id: data.id,
        date: data.date.toLocaleDateString(),
        service: data.service,
        doctor: data.doctor,
        charges: data.charges,
        patientPhone: data.patientPhone
      };
    }
  }
  catch (e: unknown)
  {
    console.log(e);
  }
  finally
  {
    await prisma.$disconnect();
  }

  return { patient, appointment };
}

export { addAppointment, getAppointment };