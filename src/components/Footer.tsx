import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Verbly — Learn communication skills.
      </div>
    </footer>
  )
}
