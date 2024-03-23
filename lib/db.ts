import { type Appointment, type Patient } from "@prisma/client";
//
import prisma from "@lib/prisma";
import { type AppointmentType, type PatientType } from "@lib/Interface";

// Add Appointment
async function addAppointment(x: AppointmentType, y: PatientType): Promise<number>
{
  let appointment: Appointment | null = null;

  try
  {
    await prisma.patient.upsert({
      where: { phone: y.phone },
      update:
      {
        name: y.name,
        age: +y.age,
        gender: y.gender
      },
      create:
      {
        name: y.name,
        age: +y.age,
        gender: y.gender,
        phone: y.phone
      }
    });

    appointment = await prisma.appointment.create({
      data:
      {
        date: new Date(x.date),
        type: x.type,
        fees: +x.fees,
        doctor: x.doctor,
        patientPhone: y.phone
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