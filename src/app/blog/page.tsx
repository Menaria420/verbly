import React from "react";

import { blog } from "../../lib/mockData";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blog.map((b) => (
          <article key={b.slug} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.excerpt}</p>
            <Link
              href={`/blog/${b.slug}`}
              className="mt-3 inline-block text-accent"
            >
              Read
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
