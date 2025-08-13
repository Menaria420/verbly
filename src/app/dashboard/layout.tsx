'use client'
import React from 'react'
import NavBar from '../../components/NavBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="col-span-1 bg-white p-4 rounded shadow">
            <nav className="space-y-2">
              <a href="/dashboard" className="block">Overview</a>
              <a href="/dashboard/my-courses" className="block">My Courses</a>
              <a href="/dashboard/profile" className="block">Profile</a>
              <a href="/dashboard/certificates" className="block">Certificates</a>
            </nav>
          </aside>
          <section className="col-span-3">
            {children}
          </section>
        </div>
      </div>
    </>
  )
}
