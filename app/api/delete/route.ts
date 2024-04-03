import { NextResponse, type NextRequest } from "next/server";
//
import { deleteAppointment } from "@lib/db";
import { type PatientAppointmentType, type APIResponse } from "@lib/Interface";

// Delete
export async function POST(req: NextRequest): Promise<NextResponse<APIResponse>>
{
  const { patient, appointment }: PatientAppointmentType = await req.json();
  const flag: boolean = await deleteAppointment(patient, appointment);

  return NextResponse.json({ success: flag });
}