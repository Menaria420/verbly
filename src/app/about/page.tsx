import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">About Verbly</h1>
        <p className="mt-4 text-gray-700">
          We teach communication skills using practical, hands-on lessons.
        </p>
      </main>
      <Footer />
    </>
  );
}
