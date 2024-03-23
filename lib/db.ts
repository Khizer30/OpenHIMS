import { type Appointment } from "@prisma/client";
//
import prisma from "@lib/prisma";
import { type PatientType, type AppointmentType } from "@lib/Interface";

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
        charges: +y.charges,
        doctor: y.doctor,
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

export { addAppointment };