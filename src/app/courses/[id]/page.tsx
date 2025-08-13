import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { courses } from "../../../lib/mockData";
import Link from "next/link";

type Props = { params: { id: string } };

export default function CourseDetail({ params }: Props) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) return <div className="p-8">Course not found</div>;
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-2 text-gray-700">{course.description}</p>
        <div className="mt-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Syllabus</h3>
            <ul className="mt-2 list-disc pl-5">
              {course?.syllabus.map((m: any, idx: number) => (
                <li key={idx}>
                  <strong>{m.title}:</strong> {m.lessons.join(", ")}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg font-bold">${course.price}</div>
              <Link
                href="/login"
                className="px-4 py-2 bg-accent text-white rounded"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
