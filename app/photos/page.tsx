import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/polly-davidson" : "";

const journalImages = [
  {
    src: "/project-images/github-universe.jpg",
    alt: "GitHub Universe event signage",
    title: "Universe",
    frameClass: "md:col-span-7 rotate-[-1.4deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/project-images/github-shop.jpeg",
    alt: "GitHub Shop campaign image with summer-themed merchandise",
    title: "Shop",
    frameClass: "md:col-span-5 md:mt-16 rotate-[1.2deg]",
    imageClass: "aspect-square",
  },
  {
    src: "/project-images/github-for-beginners.jpg",
    alt: "GitHub for Beginners video set with presenter and GitHub props",
    title: "GitHub for Beginners",
    frameClass: "md:col-span-5 md:-mt-8 rotate-[0.8deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/project-images/github-podcast.png",
    alt: "GitHub Podcast channel artwork with Mona and Hubot characters",
    title: "Podcast",
    frameClass: "md:col-span-7 md:mt-10 rotate-[-0.9deg]",
    imageClass: "aspect-[16/9]",
  },
  {
    src: "/project-images/days-of-deutsch.jpeg",
    alt: "Franzbroetchen pastry with a handwritten Days of Deutsch label",
    title: "Days of Deutsch",
    frameClass: "md:col-span-4 md:ml-12 rotate-[-1deg]",
    imageClass: "aspect-square",
  },
  {
    src: "/about-me-illustration-lines.png",
    alt: "Line illustration portrait of Polly Davidson",
    title: "Sketch",
    frameClass: "md:col-span-4 md:mt-24 rotate-[1.5deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/project-images/wunderlist.png",
    alt: "Wunderlist visual with pink background and orange abstract shapes",
    title: "Wunderlist",
    frameClass: "md:col-span-4 md:mt-8 rotate-[-0.7deg]",
    imageClass: "aspect-[4/3]",
  },
];

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-[#fbf6f3] text-[#414141] selection:bg-[#ff616b]/25 selection:text-[#253122]">
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
            <Link href="/blog" className="transition-colors hover:text-[#ff616b]">
              Blog
            </Link>
            <Link href="/photos" className="transition-colors hover:text-[#ff616b]">
              Photos
            </Link>
            <Link href="/#philosophy" className="transition-colors hover:text-[#ff616b]">
              About
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-[#ff616b]">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-24 sm:px-6 lg:pt-28">
        <section className="py-8 md:py-14">
          <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#ff616b]">
            Photos
          </p>
          <h1 className="max-w-3xl font-serif text-[clamp(3.25rem,9vw,7rem)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-[#1b3644]">
            A visual journal
          </h1>
        </section>

        <section className="grid items-start gap-x-8 gap-y-12 md:grid-cols-12 md:gap-y-6">
          {journalImages.map((photo) => (
            <figure key={photo.src} className={photo.frameClass}>
              <div className={`relative overflow-hidden bg-[#fbf6f3] ${photo.imageClass}`}>
                <Image
                  src={`${basePath}${photo.src}`}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 90vw"
                />
              </div>
              <figcaption className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#253122]">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </div>
  );
}
