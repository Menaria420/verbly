import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CourseCard from "../../components/CourseCard";
import { courses } from "../../lib/mockData";

export default function CoursesPage() {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Courses</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c as any} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
