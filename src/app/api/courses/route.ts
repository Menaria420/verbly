import { NextResponse } from "next/server";
import { courses } from "../../../../src/lib/mockData";

export async function GET() {
  return NextResponse.json(courses);
}
