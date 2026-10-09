import SiteNav from "../site-nav";
import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/polly-davidson" : "";

const selectedWork = [
  {
    title: "GitHub Universe",
    description:
      "Five years shaping GitHub's flagship developer event across brand, social, content, community and ticket sales, helping attract 3.5K attendees.",
    meta: "Flagship event / brand strategy / audience growth",
    href: "https://githubuniverse.com",
    image: "https://githubuniverse.com/og-image-26-2.png",
    imageAlt: "GitHub Universe event artwork",
  },
  {
    title: "The GitHub Shop",
    description:
      "A brand commerce proposition built around community affection, useful merch and the strange joy of developer culture.",
    meta: "Brand commerce / community",
    href: "https://thegithubshop.com",
    image:
      "https://thegithubshop.com/cdn/shop/files/gh-esc-og-img_31f452f2-5c1a-4039-a721-f4240d58d291.png?v=1779987255",
    imageAlt: "The GitHub Shop campaign artwork",
  },
  {
    title: "GitHub for Beginners",
    description:
      "A content series that makes intimidating developer tooling feel approachable, useful and worth coming back to.",
    meta: "Content strategy / education / video",
    href: "https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f",
    image: "https://i.ytimg.com/vi/r8jQ9hVA2qs/hqdefault.jpg",
    imageAlt: "GitHub for Beginners video thumbnail",
  },
  {
    title: "The GitHub Podcast",
    description:
      "Developer stories shaped around people, context and the human bits behind software.",
    meta: "Storytelling / editorial / developer culture",
    href: "https://www.youtube.com/playlist?list=PL0lo9MOBetEHmIDpT8KA-qt7Ebb2GhesV",
    image: "https://i.ytimg.com/vi/rE2zRhZdjFU/hqdefault.jpg",
    imageAlt: "GitHub video thumbnail",
  },
];

const visualReferences = [
  {
    label: "GitHub Universe",
    image: "https://githubuniverse.com/og-image-26-2.png",
    alt: "GitHub Universe event artwork",
  },
  {
    label: "The GitHub Shop",
    image:
      "https://thegithubshop.com/cdn/shop/files/gh-esc-og-img_31f452f2-5c1a-4039-a721-f4240d58d291.png?v=1779987255",
    alt: "The GitHub Shop campaign artwork",
  },
  {
    label: "GitHub for Beginners",
    image: "https://i.ytimg.com/vi/-RZ03WHqkaY/hqdefault.jpg",
    alt: "GitHub for Beginners video thumbnail",
  },
];

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-[#fbf6f3] text-[#1b3644] selection:bg-[#ff616b]/25 selection:text-[#1b3644]">
      <SiteNav concept />

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-6 md:py-20">
        <section className="grid gap-10 border-b border-[#253122] pb-14 md:grid-cols-[1.25fr_0.75fr] md:items-end md:pb-20">
          <div>
            <p className="heading-label mb-7 text-[#ff616b]">
              Brand strategist / marketing leader / GitHub
            </p>
            <h1 className="heading-page max-w-4xl text-[#1b3644]">
              Hi, I&apos;m Polly.
            </h1>
          </div>

          <div className="border border-[#253122] bg-[#ffb852] p-3">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#b5d1cc]">
              <Image
                src={`${basePath}/about-me-sketch.png`}
                alt="Polly Davidson"
                fill
                className="object-cover grayscale"
                sizes="(min-width: 768px) 28vw, 90vw"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#253122] py-12 md:grid-cols-[0.7fr_1.3fr] md:py-16">
          <p className="heading-label text-[#ff616b]">
            What I do
          </p>
          <div className="space-y-6">
            <p className="max-w-3xl text-2xl leading-snug text-[#1b3644] md:text-4xl">
              I make complicated things easier to understand, harder to ignore and
              occasionally more fun.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-[#1b3644]">
              I&apos;m a senior brand strategist and marketing leader at GitHub, working across
              brand, campaigns, content and experiences. I care about the big idea, the words
              that make it land and the practical business of getting good work into the world.
            </p>
          </div>
        </section>

        <section className="border-b border-[#253122] py-12 md:py-16">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="heading-label mb-3 text-[#ff616b]">
                Visual language
              </p>
              <h2 className="heading-section ">
                More to look at
              </h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-relaxed text-[#1b3644] md:block">
              Public imagery loaded from the project sites and YouTube thumbnails, keeping the
              GitHub Pages build static and lightweight.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {visualReferences.map((visual) => (
              <figure
                key={visual.label}
                className="overflow-hidden border border-[#253122] bg-[#ffb852]"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-[#253122] bg-[#b5d1cc]">
                  <img
                    src={visual.image}
                    alt={visual.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="heading-label bg-[#fbf6f3] px-4 py-3 text-[#1b3644]">
                  {visual.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="work" className="py-12 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#253122] pb-5">
            <div>
              <p className="heading-label mb-3 text-[#ff616b]">
                Selected work
              </p>
              <h2 className="heading-section ">
                Proof points
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#1b3644] md:block">
              Fewer boxes, more emphasis: the work reads like an editorial shortlist.
            </p>
          </div>

          <div className="divide-y divide-[#253122] border-y border-[#253122]">
            {selectedWork.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-5 py-7 transition-colors hover:bg-[#f5f5b8] md:grid-cols-[12rem_0.55fr_1.45fr_auto] md:items-start md:px-5"
              >
                <div className="aspect-[16/10] overflow-hidden border border-[#253122] bg-[#b5d1cc]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="heading-label text-[#ff616b]">
                  {project.meta}
                </p>
                <div>
                  <h3 className="heading-project ">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1b3644]">
                    {project.description}
                  </p>
                </div>
                <span className="text-2xl text-[#ff616b]" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 border-y border-[#253122] bg-[#1b3644] p-6 text-[#bfabcc] md:grid-cols-3 md:p-8"
        >
          <div>
            <h2 className="heading-section ">
              Clear beats clever.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#bfabcc]/85">
            The work should make people understand the thing, feel why it matters and know
            what to do next.
          </p>
          <p className="text-base leading-relaxed text-[#bfabcc]/85">
            Data is useful. Good writing is useful. A bit of personality is often what makes
            useful work memorable.
          </p>
        </section>

        <section className="py-12 md:py-16">
          <div className="grid gap-6 border border-[#253122] bg-[#ffb852] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <h2 className="heading-section max-w-2xl text-[#1b3644]">
              Want this brain on your brand?
            </h2>
            <div className="heading-label grid gap-3">
              <a
                href="https://github.com/pollyday"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#253122] bg-[#fbf6f3] px-5 py-3 transition-colors hover:bg-[#6f7862] hover:text-[#e9eb74] focus-visible:bg-[#6f7862] focus-visible:text-[#e9eb74]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/polly-davidson/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#253122] bg-[#fbf6f3] px-5 py-3 transition-colors hover:bg-[#6f7862] hover:text-[#e9eb74] focus-visible:bg-[#6f7862] focus-visible:text-[#e9eb74]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
