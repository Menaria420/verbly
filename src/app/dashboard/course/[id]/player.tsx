'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import ReactPlayer from 'react-player'
import { courses } from '../../../../lib/mockData'

export default function PlayerPage() {
  const params = useParams()
  const course = courses.find(c => c.id === params.id)
  if (!course) return <div>Course not found</div>
  const lesson = course.lessons[0]
  return (
    <div>
      <h2 className="text-xl font-semibold">{course.title} — {lesson?.title}</h2>
      <div className="mt-4 bg-black rounded">
        {lesson?.videoUrl ? <ReactPlayer url={lesson.videoUrl} controls width="100%" height="480px" /> : <div className="p-8 text-white">No video</div>}
      </div>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Transcript (mock)</h3>
        <p className="text-sm text-gray-700 mt-2">This is a mock transcript for the lesson.</p>
      </div>
    </div>
  )
}
