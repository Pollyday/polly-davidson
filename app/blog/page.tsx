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
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#253122] bg-[#6F7862]">
        <div className="mx-auto flex min-h-[calc(4rem-5mm)] max-w-6xl items-center justify-between gap-4 px-5 py-[calc(0.75rem-2.5mm)] sm:px-6">
          <Link
            href="/"
            className="nav-wordmark"
          >
            Polly<span className="nav-wordmark-dot">.</span>
          </Link>
          <div className="heading-label flex flex-wrap justify-end gap-x-4 gap-y-2 text-[#1b3644] sm:gap-x-8">
            <Link href="/#work" className="transition-colors hover:text-[#ff616b]">
              Projects
            </Link>
            <Link href="/photos" className="transition-colors hover:text-[#96bfe6]">
              Photos
            </Link>
            <Link href="/blog" className="transition-colors hover:text-[#ffb852]">
              Blog
            </Link>
            <Link href="/#philosophy" className="transition-colors hover:text-[#bfabcc]">
              About
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-[#e9eb74]">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-16 sm:px-6 lg:pt-28">
        <section className="overflow-hidden border border-[#253122] bg-[#fbf6f3]">
          <div className="border-b border-[#253122] bg-[#1b3644] p-6 md:p-10">
            <p className="heading-label mb-5 text-[#96bfe6]">
              Blog
            </p>
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
