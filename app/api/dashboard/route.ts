import { NextResponse } from "next/server";
//
import { getDashboard } from "@lib/db";
import { type DashboardType } from "@lib/Interface";

// Dashboard
export async function POST(): Promise<NextResponse<DashboardType>>
{
  return NextResponse.json(await getDashboard());
}