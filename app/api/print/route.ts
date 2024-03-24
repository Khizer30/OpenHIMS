import puppeteer, { type Browser, type Page } from "puppeteer";
import { NextResponse, type NextRequest } from "next/server";
//
import { addAppointment } from "@lib/db";
import { type PatientType, type AppointmentType } from "@lib/Interface";

// JSON
interface JSON
{
  patient: PatientType;
  appointment: AppointmentType;
}

// Print
export async function POST(req: NextRequest): Promise<NextResponse<string>>
{
  const { patient, appointment }: JSON = await req.json();

  const appointmentID: number = await addAppointment(patient, appointment);
  /*
    const browser: Browser = await puppeteer.launch();
    const page: Page = await browser.newPage();
    const url: string = "https://www.google.com.pk";
  
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.emulateMediaType("screen");
    await page.pdf({
      path: `${ process.env.OUTDIR }/DOC.pdf`,
      margin: { top: "50px", right: "50px", bottom: "50px", left: "50px" },
      printBackground: true,
      format: "A4"
    });
  
    await browser.close();
  */

  return NextResponse.json("");
}