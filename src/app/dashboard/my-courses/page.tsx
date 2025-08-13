'use client'
import React from 'react'
import { courses } from '../../../lib/mockData'
import Link from 'next/link'

export default function MyCourses() {
  return (
    <div>
      <h2 className="text-xl font-semibold">My Courses</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map(c => (
          <div key={c.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.duration}</p>
            <div className="mt-2">
              <Link href={`/dashboard/course/${c.id}/player`} className="px-3 py-1 bg-accent text-white rounded">Open</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
