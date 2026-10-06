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
    <div className="min-h-screen bg-[#b5d1cc] text-[#414141] selection:bg-[#ff616b]/25 selection:text-[#253122]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#253122] bg-[#fbf6f3]/92 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link
            href="/"
            className="font-serif text-xl font-semibold uppercase leading-none tracking-[-0.04em] text-[#ff616b] transition-colors hover:text-[#253122]"
          >
            Polly Davidson
          </Link>
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#253122] sm:gap-x-8">
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
            <Link href="/#contact" className="transition-colors hover:text-[#ffa6d9]">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-16 sm:px-6 lg:pt-28">
        <section className="overflow-hidden border border-[#253122] bg-[#fbf6f3]">
          <div className="border-b border-[#253122] bg-[#1b3644] p-6 md:p-10">
            <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#96bfe6]">
              Blog
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-light uppercase leading-[0.9] tracking-[-0.055em] text-[#fbf6f3] md:text-7xl">
              Look, I made this
            </h1>
          </div>

          <div className="grid">
            {posts.map((post) => (
              <article
                key={post.href}
                className="border-b border-[#253122] p-6 last:border-b-0 md:p-10"
              >
                <h2 className="max-w-4xl font-sans text-3xl font-semibold uppercase leading-none tracking-[0.04em] text-[#253122] md:text-5xl">
                  <Link
                    href={post.href}
                    className="transition-colors hover:text-[#ff616b]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#414141] md:text-base">
                  {post.description}
                </p>
                <Link
                  href={post.href}
                  className="mt-7 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#1b3644] transition-colors hover:text-[#ff616b]"
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
