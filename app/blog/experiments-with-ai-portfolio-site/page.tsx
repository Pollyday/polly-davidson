import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiments with AI: Portfolio site | Polly Davidson",
  description:
    "A reflection on building a GitHub Pages portfolio with AI, finding a visual direction, and keeping the joy in creating.",
};

export default function ExperimentsWithAiPortfolioSitePage() {
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

      <main className="mx-auto max-w-4xl px-5 pt-24 pb-16 sm:px-6 lg:pt-28">
        <article className="overflow-hidden border border-[#253122] bg-[#fbf6f3]">
          <header className="border-b border-[#253122] bg-[#1b3644] p-6 md:p-10">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#96bfe6] transition-colors hover:text-[#fbf6f3]"
            >
              <span aria-hidden="true">←</span> All posts
            </Link>
            <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#96bfe6]">
              Experiments with AI
            </p>
            <h1 className="font-serif text-5xl font-light uppercase leading-[0.9] tracking-[-0.055em] text-[#fbf6f3] md:text-7xl">
              Experiments with AI: Portfolio site
            </h1>
          </header>

          <div className="space-y-10 p-6 text-base leading-relaxed text-[#414141] md:p-10 md:text-lg">
            <p>
              You know that feeling when you start off on a small side project,
              and five hours later you emerge a little bleary-eyed, hair somewhat
              mussier, and sporting a side project that’s grown into a labour of
              love? That’s what happened when I started testing a GitHub pages
              tutorial and ended up with this full portfolio site.
            </p>

            <section>
              <h2 className="mb-5 font-sans text-2xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#253122] md:text-3xl">
                Starting at the beginning
              </h2>
              <p>
                At the beginning of this year I worked on{" "}
                <a
                  href="https://youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f&si=qqG9WJhC8LzN9Eej"
                  className="text-[#1b7180] underline decoration-[#ff616b] underline-offset-4 hover:text-[#ff616b]"
                >
                  GitHub for Beginners
                </a>
                : a show by Kedasha Kerr teaching people the basics of GitHub,
                from using GitHub Actions to the basics of Markdown. To make sure
                the episodes made sense, I would try them out as a non-developer.
                And that is how this site was born. You can make your own for free
                by following along{" "}
                <a
                  href="https://github.blog/developer-skills/github/github-for-beginners-getting-started-with-github-pages/"
                  className="text-[#1b7180] underline decoration-[#ff616b] underline-offset-4 hover:text-[#ff616b]"
                >
                  here
                </a>
                .
              </p>
              <p className="mt-5">
                But what I created from the tutorial looked generic. I’d used AI
                for a little extra help, and it was so very purple. There were
                colour sidebars everywhere, some gradients, and, well you get
                the idea. For months it just sat there, not reflecting who I was.
                It was simply a half-tested portfolio with little character. Once
                the Copilot app launched, I decided to do a little experimenting
                with it to see how far I could push AI to create the GitHub Pages
                site I actually wanted.
              </p>
            </section>

            <section>
              <h2 className="mb-5 font-sans text-2xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#253122] md:text-3xl">
                Annoying AI with a flood of colours
              </h2>
              <p>
                Using a few design references I liked and my new favourite book,{" "}
                <a
                  href="https://www.kojoart.com/en/blogs/art-techniques/sanzo-wada-dictionary-of-color-combinations?srsltid=AU7gw4XRAzw3IFONBkPbSJFVkOBwmPlAgqzeFBXCklUVX_GNKhzOFem_"
                  className="text-[#1b7180] underline decoration-[#ff616b] underline-offset-4 hover:text-[#ff616b]"
                >
                  A Dictionary of Color Combinations
                </a>{" "}
                by Sanzo Wada, I curated the colours I liked and started to
                annoy Copilot with changing designs over, and over, and over. It
                was easy to get lost in the details, to tell Copilot to adjust by
                a few mms here or tweak the colour slightly there. I went for
                lunch, liked the colour combinations of my jacket, book, and watch
                against the background colours, and went back to Copilot to tweak
                the look again.
              </p>
              <figure className="mt-8 grid grid-cols-2 gap-px border border-[#253122] bg-[#253122]">
                <Image
                  src="/portfolio-colour-jacket.jpeg"
                  alt="Bright orange jacket against a pink and blue colour palette"
                  width={1500}
                  height={2000}
                  className="h-full w-full object-cover"
                />
                <Image
                  src="/portfolio-colour-book.jpeg"
                  alt="A book held at lunch, alongside a meal and orange jacket"
                  width={1500}
                  height={2000}
                  className="h-full w-full object-cover"
                />
              </figure>
            </section>

            <section>
              <h2 className="mb-5 font-sans text-2xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#253122] md:text-3xl">
                Reining in AI’s enthusiasm
              </h2>
              <p>
                As we all know, AI can be verbose; the site was built with a
                million different labels and subheadings, that created noise
                rather than clarity. More was apparently the answer to
                everything. I stripped all that back, along with the more
                generic text it had put in for the About Me sections.
              </p>
              <p className="mt-5">
                As the site grew, so did my ambitions. It turned from a single
                page with little imagery, to creating spaces for me to highlight
                my photography hobbies, and now my blog. The main page became
                richer with photos and that purple, red toggle over combo.
              </p>
            </section>

            <section>
              <h2 className="mb-5 font-sans text-2xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#253122] md:text-3xl">
                When to retain the joy for yourself
              </h2>
              <p>
                I read an article by my namesake{" "}
                <a
                  href="https://graziadaily.co.uk/author/polly-vernon/"
                  className="text-[#1b7180] underline decoration-[#ff616b] underline-offset-4 hover:text-[#ff616b]"
                >
                  Polly Vernon
                </a>{" "}
                recently that asked why she would ever use AI when writing an
                article—that it would be like asking a robot to go for a walk in
                the woods or appreciate a sunset for her. It struck a chord. With
                work going so quickly these days, we try to use AI to cut corners,
                but is it taking away the pleasure of creating? Of putting pen to
                paper, or fingers to keys, there’s a joy in writing rather than
                tweaking what’s been written in our name.
              </p>
              <p className="mt-5">
                So, it’s been an interesting experiment to work with AI in
                building this portfolio site. In many ways, it gives you a lot of
                freedom to create a site with little UX experience or developer
                knowledge. The robot is letting me see the sunset more clearly in
                some ways. But I've found that it has also constrained my
                thinking. Sometimes I would think about how I could adapt the copy
                it had already given me rather than breaking out from the AI
                created mould entirely. It sometimes took me a few missteps to
                make me sit back and think: does any of this actually make sense?
              </p>
              <p className="mt-5">
                AI was great at getting me to a good point very quickly. But the
                part I enjoyed the most about the process was noticing what I
                liked, diving into the colours, and making it more me. Then
                seeing that output instantly.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
