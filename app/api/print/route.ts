import puppeteer, { type Browser, type Page } from "puppeteer";
import { type NextRequest, NextResponse } from "next/server";
//
import { addAppointment } from "@lib/db";
import { type AppointmentType, type PatientType } from "@lib/Interface";

// Print
export async function POST(req: NextRequest): Promise<NextResponse<string>>
{
  const data: { appointment: AppointmentType, patient: PatientType; } = await req.json();

  await addAppointment(data.appointment, data.patient);
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
  console.log(data);

  return NextResponse.json("");
}