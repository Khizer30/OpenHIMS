import { NextResponse, type NextRequest } from "next/server";
//
import { getRecords } from "@lib/db";
import { type DatesType, type RecordsType } from "@lib/Interface";

// Records
export async function POST(req: NextRequest): Promise<NextResponse<RecordsType[]>>
{
  const { fromDate, toDate }: DatesType = await req.json();
  const records: RecordsType[] = await getRecords(fromDate, toDate);

  return NextResponse.json(records);
}