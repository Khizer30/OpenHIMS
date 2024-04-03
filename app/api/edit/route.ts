import { NextResponse, type NextRequest } from "next/server";
//
import { editAppointment } from "@lib/db";
import { type PrintJSON, type EditAPI } from "@lib/Interface";

// Edit
export async function POST(req: NextRequest): Promise<NextResponse<EditAPI>>
{
  const { patient, appointment }: PrintJSON = await req.json();
  const flag: boolean = await editAppointment(patient, appointment);

  return NextResponse.json({ success: flag });
}