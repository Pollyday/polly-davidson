import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/polly-davidson" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#b5d1cc] text-[#414141] selection:bg-[#ff616b]/25 selection:text-[#253122]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(255,184,82,0.28),transparent_34rem),radial-gradient(circle_at_bottom_right,rgba(255,166,217,0.22),transparent_32rem)]" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#253122] bg-[#fbf6f3]/92 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link
            href="/"
            className="font-serif text-xl font-semibold uppercase leading-none tracking-[-0.04em] text-[#ff616b] transition-colors hover:text-[#253122]"
          >
            Polly Davidson
          </Link>
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#253122] sm:gap-x-8">
            <Link href="#work" className="transition-colors hover:text-[#ff616b]">
              Projects
            </Link>
            <Link href="/blog" className="transition-colors hover:text-[#ff616b]">
              Blog
            </Link>
            <Link href="/photos" className="transition-colors hover:text-[#ff616b]">
              Photos
            </Link>
            <Link href="#philosophy" className="transition-colors hover:text-[#ff616b]">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-[#ff616b]">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pt-24 pb-16 sm:px-6 lg:pt-28">
        <section className="overflow-hidden border border-[#253122] bg-[#ffb852]">
          <div className="grid border-b border-[#253122] bg-[linear-gradient(rgba(233,235,116,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(233,235,116,0.58)_1px,transparent_1px)] bg-[size:2.35rem_2.35rem] px-5 py-12 sm:px-8 md:px-12 md:py-20">
            <p className="mb-8 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1b3644]">
              Brand strategist / marketing leader / GitHub
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(3.25rem,10vw,8rem)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-[#1b3644] [font-stretch:condensed]">
              I make complicated things interesting.
              <span className="mt-5 block font-sans text-[0.48em] font-semibold leading-[0.9] tracking-[0.04em] text-[#ff616b] md:mt-8">
                Hi, I&apos;m Polly.
              </span>
            </h1>
          </div>

          <div className="bg-[#fbf6f3] p-5 md:p-8">
            <p className="max-w-2xl text-lg leading-relaxed text-[#414141] md:text-xl">
              Senior brand strategist and marketing leader at GitHub. I work somewhere between
              the big idea and the messy business of making it happen.
            </p>
          </div>
        </section>

        <section id="work" className="py-16 md:py-20">
          <SectionHeader
            eyebrow="Selected work"
            title="Brand stories, launches and moments"
          />

          <div className="grid grid-cols-1 gap-0 border-x border-t border-[#253122] md:grid-cols-2">
            <ProjectCard
              title="GitHub Universe"
              eyebrow="Flagship work"
              description="How do you make thousands of developers want to spend two days talking about software? GitHub Universe is GitHub's flagship developer event, and I've worked on it for five years running, helping attract 3.5K attendees across brand, social, content, community and ticket sales."
              tags={["EVENTS", "DEVELOPER MARKETING", "TICKET SALES"]}
              href="https://githubuniverse.com"
              featured
              fullWidth
            />
            <ProjectCard
              title="The GitHub Shop"
              eyebrow="Brand commerce"
              description="A brand and commercial proposition outside conventional B2B marketing, built around GitHub gear, community affection and things people actually want to own."
              tags={["BRAND", "COMMERCE", "COMMUNITY"]}
              href="https://thegithubshop.com"
              rightBorder
            />
            <ProjectCard
              title="GitHub for Beginners"
              eyebrow="Audience understanding"
              description="A YouTube series that turns intimidating developer tooling into useful, friendly lessons for people just getting started."
              tags={["CONTENT STRATEGY", "EDUCATION", "VIDEO"]}
              href="https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f"
            />
            <ProjectCard
              title="The GitHub Podcast"
              eyebrow="Developer stories"
              description="Conversations and narrative work designed to make the people behind software feel more human, more specific and more worth listening to."
              tags={["PODCAST", "CONTENT", "STORYTELLING"]}
              href="https://www.youtube.com/playlist?list=PL0lo9MOBetEHmIDpT8KA-qt7Ebb2GhesV"
              rightBorder
            />
            <ProjectCard
              title="Log4J"
              eyebrow="Complexity made clear"
              description="A security story that needed to be important without being impenetrable, created with the video team for a developer audience."
              tags={["VIDEO", "SECURITY", "STORYTELLING"]}
              href="https://www.youtube.com/watch?v=t74ClffSUW0&t=11s"
            />
            <ProjectCard
              title="Anders Hejlsberg"
              eyebrow="Profile"
              description="A story about the creator of Turbo Pascal, Delphi, C# and TypeScript, and the kind of technical legacy that deserves a better-than-average interview."
              tags={["VIDEO", "PROFILE", "DEVELOPER HISTORY"]}
              href="https://www.youtube.com/watch?v=uMqx8NNT4xY&t=1s"
              fullWidth
            />
          </div>
        </section>

        <section
          id="philosophy"
          className="grid overflow-hidden border border-[#253122] bg-[#fbf6f3] md:grid-cols-12"
        >
          <div className="border-b border-[#253122] bg-[linear-gradient(rgba(233,235,116,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(233,235,116,0.58)_1px,transparent_1px)] bg-[#ffb852] bg-[size:2.35rem_2.35rem] p-5 md:col-span-4 md:border-r md:border-b-0 md:p-8">
            <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#253122]">
              About me
            </p>
            <div className="relative aspect-[4/5] overflow-hidden border border-[#253122] bg-[#b5d1cc]">
              <Image
                src={`${basePath}/about-me-sketch.png`}
                alt="Polly Davidson"
                fill
                className="object-cover grayscale transition duration-500 hover:grayscale-0"
                sizes="(min-width: 768px) 33vw, 90vw"
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="border-b border-[#253122] p-5 md:p-8">
              <h2 className="mb-5 font-sans text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-[#ff616b] md:text-6xl">
                Strategy, but make it interesting
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-[#414141] md:text-lg">
                I make complicated things easier to understand, harder to ignore and occasionally
                more fun.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#414141] md:text-lg">
                I&apos;ve spent the last 15+ years working in marketing and brand, mostly in
                technology. These days I&apos;m at GitHub, where I work across brand, campaigns,
                content and experiences: figuring out what we should say, how we should say it
                and, importantly, whether anyone will care.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#414141] md:text-lg">
                I like big ideas, useful data, good writing and work that doesn&apos;t take itself
                too seriously.
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              <InfoList
                title="What I do"
                items={["Brand and campaign strategy", "Developer marketing", "Content and social", "Events and experiences"]}
              />
              <InfoList
                title="How I think"
                items={["Make the complicated clear", "Use data without becoming boring", "Find the human reason to care"]}
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <SectionHeader
            eyebrow="Side quest"
            title="Off the clock"
            description="Because not everything useful has to look like a case study."
          />

          <div className="border-x border-t border-[#253122]">
            <ProjectCard
              title="Days of Deutsch"
              eyebrow="Personal project"
              description="A little passion project helping people learn German, one day at a time, with a more playful kind of storytelling."
              tags={["LANGUAGE", "LEARNING", "STORYTELLING"]}
              href="https://daysofdeutsch.com"
              fullWidth
            />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20">
          <div className="grid overflow-hidden border border-[#253122] bg-[#1b3644] md:grid-cols-[1fr_auto]">
            <div className="p-6 md:p-10">
              <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#96bfe6]">
                Contact
              </p>
              <h2 className="max-w-3xl font-sans text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-[#bfabcc] md:text-6xl">
                Want this brain on your brand?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#bfabcc]/80 md:text-lg">
                Want to talk brand, content, or creative strategy? Let&apos;s connect.
              </p>
            </div>
            <div className="grid gap-0 border-t border-[#253122] bg-[#ffb852] md:min-w-80 md:border-t-0 md:border-l">
              <SocialLink href="https://github.com/pollyday" label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/polly-davidson/" label="LinkedIn" />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#253122] bg-[#fbf6f3] px-5 py-6 text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#414141]">
        <p>
          Made by{" "}
          <a
            href="https://github.com/pollyday"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff616b] transition-colors hover:text-[#253122]"
          >
            Polly Davidson
          </a>
        </p>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 grid gap-4 border border-[#253122] bg-[#1b3644] p-5 md:grid-cols-[auto_1fr] md:items-end md:p-8">
      <div>
        <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#96bfe6]">
          {eyebrow}
        </p>
        <h2 className="font-sans text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-[#bfabcc] md:text-6xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-lg text-sm leading-relaxed text-[#bfabcc]/80 md:justify-self-end md:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectCard({
  title,
  eyebrow,
  description,
  result,
  tags,
  href,
  featured = false,
  fullWidth = false,
  rightBorder = false,
}: {
  title: string;
  eyebrow?: string;
  description: string;
  result?: string;
  tags: string[];
  href: string;
  featured?: boolean;
  fullWidth?: boolean;
  rightBorder?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block border-b border-[#253122] bg-[#fbf6f3] p-5 transition-colors hover:bg-[#bfabcc] md:p-8 ${
        fullWidth ? "md:col-span-2" : rightBorder ? "md:border-r" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#ff616b]">
          {eyebrow}
        </p>
      ) : null}
      <div className="mb-8 flex items-start justify-between gap-6">
        <h3
          className={`font-sans font-semibold uppercase leading-none tracking-[0.04em] text-[#253122] transition-colors group-hover:text-[#ff616b] ${
            featured ? "text-4xl md:text-7xl" : "text-3xl md:text-5xl"
          }`}
        >
          {title}
        </h3>
        <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-[#ff616b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className={`${featured ? "max-w-3xl text-base" : "max-w-xl text-sm"} leading-relaxed text-[#414141]`}>
        {description}
      </p>
      {result ? (
        <p className="mt-5 max-w-2xl border border-[#253122] bg-[#ffb852] px-4 py-3 text-sm font-bold uppercase leading-relaxed tracking-[0.08em] text-[#253122]">
          {result}
        </p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-[#253122] bg-[#ffa6d9] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.1em] text-[#253122]"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-b border-[#253122] p-5 last:border-b-0 md:border-r md:border-b-0 md:p-8 even:md:border-r-0">
      <h3 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#ff616b]">
        {title}
      </h3>
      <ul className="space-y-3 text-sm leading-relaxed text-[#414141]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 border border-[#253122] bg-[#ffa6d9]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between border-b border-[#253122] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#253122] transition-colors last:border-b-0 hover:bg-[#96bfe6] hover:text-[#1b3644]"
    >
      {label}
      <ArrowUpRightIcon className="h-3.5 w-3.5" />
    </a>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
