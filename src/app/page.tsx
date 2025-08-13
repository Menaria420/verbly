import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { courses } from "../lib/mockData";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">Communicate with Confidence</h1>
            <p className="mt-4 text-gray-700">
              Verbly helps professionals and learners become better
              communicators.
            </p>
            <div className="mt-6">
              <a
                href="/courses"
                className="px-5 py-3 bg-accent text-white rounded-lg"
              >
                Browse Courses
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
