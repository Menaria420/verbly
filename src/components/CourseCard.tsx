import Link from 'next/link'
import React from 'react'

type Course = {
  id: string
  title: string
  price: number
  duration: string
  description: string
}

export default function CourseCard({course}:{course:Course}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.duration}</p>
      <p className="mt-2 text-gray-700">{course.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold">${course.price}</div>
        <Link href={`/courses/${course.id}`} className="px-3 py-1 bg-accent text-white rounded">View</Link>
      </div>
    </div>
  )
}
