import { courses } from "../../../../lib/mockData";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json(course);
}
