import Link from "next/link";

const posts = [
  {
    title: "What makes technical stories worth reading?",
    label: "Draft idea",
    description:
      "A place for thoughts on brand, developer storytelling, campaigns, content and the work behind making complicated things feel clear.",
  },
  {
    title: "Notes from building brand moments",
    label: "Draft idea",
    description:
      "A future home for reflections on events, launches, creative strategy and the difference between making noise and making meaning.",
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
          </div>

          <div className="grid md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="border-b border-[#253122] p-6 last:border-b-0 md:border-r md:p-8 md:even:border-r-0"
              >
                <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#ff616b]">
                  {post.label}
                </p>
                <h2 className="font-sans text-3xl font-semibold uppercase leading-none tracking-[0.04em] text-[#253122] md:text-5xl">
                  {post.title}
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#414141]">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
