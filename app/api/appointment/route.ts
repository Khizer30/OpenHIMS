import { NextResponse, type NextRequest } from "next/server";
//
import { addAppointment } from "@lib/db";
import { type PatientAppointmentType } from "@lib/Interface";

// Appointment
export async function POST(req: NextRequest): Promise<NextResponse<string>>
{
  const { patient, appointment }: PatientAppointmentType = await req.json();
  const appointmentID: number = await addAppointment(patient, appointment);

  return NextResponse.json(`${ appointmentID }`);
}