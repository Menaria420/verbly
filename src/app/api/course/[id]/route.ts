import { NextResponse } from 'next/server'
import { courses } from '../../../../../src/lib/mockData'

export async function GET(req: Request, { params }: { params: { id: string }}) {
  const id = params.id
  const course = courses.find(c => c.id === id)
  if (!course) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json(course)
}
