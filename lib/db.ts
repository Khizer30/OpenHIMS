import { type Appointment } from "@prisma/client";
//
import prisma from "@lib/prisma";
import { appointmentObj, patientObj, dashboardObj, dateStringFormatter } from "@lib/lib";
import { type PatientType, type AppointmentType, type PatientAppointmentType, type RecordsType, type DashboardType } from "@lib/Interface";

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
async function getAppointment(x: number): Promise<PatientAppointmentType>
{
  let { patient, appointment }: PatientAppointmentType = { patient: patientObj, appointment: appointmentObj };

  try
  {
    const data = await prisma.appointment.findUnique({
      where: { id: x },
      include: { Patient: true }
    });

    if (data)
    {
      patient = data.Patient;
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

// Get Records
async function getRecords(x: string, y: string): Promise<RecordsType[]>
{
  let records: RecordsType[] = [];

  try
  {
    const data = await prisma.appointment.findMany({
      where: { date: { gte: new Date(x), lte: new Date(y) } },
      include: { Patient: true },
      orderBy: { date: "asc" }
    });

    for (let i: number = 0; i < data.length; i++)
    {
      records.push({
        appointmentID: data[i].id,
        appointmentDate: data[i].date.toLocaleDateString(),
        appointmentService: data[i].service,
        appointmentDoctor: data[i].doctor,
        appointmentCharges: data[i].charges,
        patientName: data[i].Patient.name
      });
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

  return records;
}

// Edit Appointment
async function editAppointment(x: PatientType, y: AppointmentType): Promise<boolean>
{
  let flag: boolean = true;

  try
  {
    await prisma.patient.update({
      where: { phone: x.phone },
      data:
      {
        name: x.name,
        age: +x.age,
        gender: x.gender
      }
    });

    await prisma.appointment.update({
      where: { id: y.id },
      data:
      {
        date: new Date(y.date),
        service: y.service,
        doctor: y.doctor,
        charges: +y.charges
      }
    });
  }
  catch (e: unknown)
  {
    flag = false;
    console.log(e);
  }
  finally
  {
    await prisma.$disconnect();
  }

  return flag;
}

// Delete Appointment
async function deleteAppointment(x: PatientType, y: AppointmentType): Promise<boolean>
{
  let flag: boolean = true;

  try
  {
    await prisma.appointment.delete({
      where: { id: y.id }
    });

    const patient = await prisma.patient.findUnique({
      where: { phone: x.phone },
      include: { appointments: true }
    });

    if (!patient?.appointments.length)
    {
      await prisma.patient.delete({
        where: { phone: x.phone }
      });
    }
  }
  catch (e: unknown)
  {
    flag = false;
    console.log(e);
  }
  finally
  {
    await prisma.$disconnect();
  }

  return flag;
}

// Get Dashboard
async function getDashboard(): Promise<DashboardType>
{
  let dashboard: DashboardType = dashboardObj;

  try
  {
    const startDate: Date = new Date();
    startDate.setDate(startDate.getDate() - 5);
    startDate.setUTCHours(0, 0, 0, 0);

    const endDate: Date = new Date();
    endDate.setDate(endDate.getDate());
    endDate.setUTCHours(0, 0, 0, 0);

    const revenueData = await prisma.appointment.groupBy({
      by: ["date"],
      where:
      {
        date:
        {
          gte: startDate,
          lte: endDate
        }
      },
      _sum:
      {
        charges: true
      }
    });

    const portionsData = await prisma.appointment.groupBy({
      by: ["service"],
      where:
      {
        date:
        {
          equals: endDate
        }
      },
      _sum:
      {
        charges: true
      }
    });

    // Data Processing
    let tempRevenues: number[] = [];
    let tempDays: string[] = [];
    let tempPortionNames: string[] = [];
    let tempPortionRevenues: number[] = [];

    for (let i: number = 0; i < revenueData.length; i++)
    {
      tempRevenues.push(revenueData[i]._sum.charges || 0);
      tempDays.push(revenueData[i].date.toDateString().split(" ")[0]);
    }

    for (let i: number = 0; i < portionsData.length; i++)
    {
      tempPortionNames.push(portionsData[i].service);
      tempPortionRevenues.push(portionsData[i]._sum.charges || 0);
    }

    dashboard =
    {
      revenues: tempRevenues,
      days: tempDays,
      portionNames: tempPortionNames,
      portionRevenues: tempPortionRevenues
    };
  }
  catch (e: unknown)
  {
    console.log(e);
  }
  finally
  {
    await prisma.$disconnect();
  }

  return dashboard;
}

export { addAppointment, getAppointment, getRecords, editAppointment, deleteAppointment, getDashboard };