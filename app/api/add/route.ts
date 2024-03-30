import puppeteer, { type Browser, type Page } from "puppeteer";
import { NextResponse, type NextRequest } from "next/server";
//
import { addAppointment } from "@lib/db";
import { type PrintJSON } from "@lib/Interface";

// Add
export async function POST(req: NextRequest): Promise<NextResponse<Blob>>
{
  const { patient, appointment }: PrintJSON = await req.json();
  const appointmentID: number = await addAppointment(patient, appointment);

  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();
  const url: string = `${ process.env.URL }/print/${ appointmentID }`;

  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");
  const pdfBuffer: Buffer = await page.pdf({
    path: `${ process.env.OUTDIR }/${ patient.name }.pdf`,
    margin: { top: "50px", right: "50px", bottom: "50px", left: "50px" },
    printBackground: true,
    format: "A4"
  });
  const pdf: Blob = new Blob([pdfBuffer.buffer]);

  await browser.close();

  const response: NextResponse<Blob> = new NextResponse(pdf);
  response.headers.set("Content-Type", "application/pdf");

  return response;
}