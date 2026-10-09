import SiteNav from "../site-nav";
import Link from "next/link";

const posts = [
  {
    href: "/blog/experiments-with-ai-portfolio-site",
    title: "Experiments with AI: Portfolio site",
    description:
      "A small experiment in AI, design, taste, and the surprisingly important business of knowing what you like.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#b5d1cc] text-[#1b3644] selection:bg-[#ff616b]/25 selection:text-[#1b3644]">
      <SiteNav />

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-16 sm:px-6 lg:pt-28">
        <section className="overflow-hidden border border-[#253122] bg-[#fbf6f3]">
          <div className="border-b border-[#253122] bg-[#1b3644] p-6 md:p-10">
            <h1 className="heading-page max-w-3xl text-[#fbf6f3]">
              Look, I made this
            </h1>
          </div>

          <div className="grid">
            {posts.map((post) => (
              <article
                key={post.href}
                className="border-b border-[#253122] p-6 last:border-b-0 md:p-10"
              >
                <h2 className="heading-project blog-heading max-w-4xl text-[#1b3644]">
                  <Link
                    href={post.href}
                    className="transition-colors hover:text-[#ff616b]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#1b3644] md:text-base">
                  {post.description}
                </p>
                <Link
                  href={post.href}
                  className="heading-label mt-7 inline-flex items-center gap-2 text-[#1b3644] transition-colors hover:text-[#ff616b]"
                >
                  Read the post <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
