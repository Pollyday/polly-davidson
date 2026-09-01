import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/polly-davidson" : "";

const workImages = [
  {
    src: "/photos/work/github-for-beginners-sketching.jpg",
    alt: "Child sketching GitHub characters in a notebook",
    frameClass: "md:col-span-5 rotate-[-1deg]",
    imageClass: "aspect-square",
  },
  {
    src: "/photos/work/github-for-beginners-mug.jpg",
    alt: "GitHub for Beginners mug and drawing materials",
    frameClass: "md:col-span-4 md:mt-14 rotate-[1.1deg]",
    imageClass: "aspect-square",
  },
  {
    src: "/photos/work/github-for-beginners-hoodie.jpg",
    alt: "GitHub for Beginners hoodie",
    frameClass: "md:col-span-3 md:mt-6 rotate-[-0.7deg]",
    imageClass: "aspect-square",
  },
  {
    src: "/photos/work/universe-cat-sculpture.jpg",
    alt: "Person posing inside a large GitHub cat sculpture at Universe",
    frameClass: "md:col-span-4 md:-mt-4 rotate-[1.3deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/universe-collaboration-wall.jpg",
    alt: "GitHub Universe collaboration wall with attendees writing notes",
    frameClass: "md:col-span-8 md:mt-10 rotate-[-0.8deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/work/universe-rainbow-arch.jpg",
    alt: "Colourful GitHub Universe arch installation",
    frameClass: "md:col-span-4 rotate-[-1.1deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/universe-stage-signage.jpg",
    alt: "GitHub Universe event signage",
    frameClass: "md:col-span-4 md:mt-16 rotate-[0.8deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/universe-shop-display.jpg",
    alt: "GitHub Shop merchandise display at an event",
    frameClass: "md:col-span-4 md:mt-4 rotate-[-0.5deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/work/universe-furby-stage.jpg",
    alt: "Furby-inspired GitHub Universe display",
    frameClass: "md:col-span-5 md:mt-2 rotate-[1deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/universe-badge.jpg",
    alt: "GitHub event badge with checklist",
    frameClass: "md:col-span-7 md:mt-12 rotate-[-0.8deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/work/universe-shop-moment.jpg",
    alt: "GitHub Shop event moment",
    frameClass: "md:col-span-4 rotate-[0.6deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/universe-wall-detail.jpg",
    alt: "GitHub Universe wall detail",
    frameClass: "md:col-span-4 md:mt-16 rotate-[-1deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/universe-outdoor-moment.jpg",
    alt: "GitHub Universe outdoor moment",
    frameClass: "md:col-span-4 md:mt-6 rotate-[1.2deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/work/github-for-beginners-cards.jpg",
    alt: "GitHub for Beginners printed cards",
    frameClass: "md:col-span-6 md:ml-16 rotate-[-0.7deg]",
    imageClass: "aspect-[4/5]",
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
          <h1 className="max-w-3xl font-serif text-[clamp(3.25rem,9vw,7rem)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-[#1b3644]">
            Work
          </h1>
        </section>

        <section className="grid items-start gap-x-8 gap-y-12 md:grid-cols-12 md:gap-y-8">
          {workImages.map((photo) => (
            <div key={photo.src} className={photo.frameClass}>
              <div className={`relative overflow-hidden bg-[#fbf6f3] ${photo.imageClass}`}>
                <Image
                  src={`${basePath}${photo.src}`}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 90vw"
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
