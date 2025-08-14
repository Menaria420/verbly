import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { blog } from "../../../lib/mockData";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((b) => b.slug === slug);

  if (!post) return <div className="p-8">Not found</div>;

  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <article className="prose mt-6">
          <p>This is a demo post content for {post.title}.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
