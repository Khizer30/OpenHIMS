import puppeteer, { type Browser, type Page } from "puppeteer";
import { NextResponse, type NextRequest } from "next/server";

// Params
interface Params
{
  id: number;
  name: string;
}

// Print
export async function POST(req: NextRequest): Promise<NextResponse<string>>
{
  const { id, name }: Params = await req.json();

  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();
  const url: string = `${ process.env.URL }/print/${ id }`;

  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");
  await page.pdf({
    path: `${ process.env.OUTDIR }/${ name }.pdf`,
    margin: { top: "50px", right: "50px", bottom: "50px", left: "50px" },
    printBackground: true,
    format: "A4"
  });

  await browser.close();

  return NextResponse.json(url);
}