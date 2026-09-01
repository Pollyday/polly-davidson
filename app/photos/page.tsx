import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/polly-davidson" : "";

type PhotoImage = {
  src: string;
  alt: string;
  frameClass: string;
  imageClass: string;
};

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
] satisfies PhotoImage[];

const playImages = [
  {
    src: "/photos/play/garden-flamingo.jpg",
    alt: "Garden table and chairs with a bright inflatable flamingo",
    frameClass: "md:col-span-8 rotate-[-0.8deg]",
    imageClass: "aspect-[16/9]",
  },
  {
    src: "/photos/play/mountain-village.jpg",
    alt: "Sunlit mountain village built into rocky cliffs",
    frameClass: "md:col-span-4 md:mt-14 rotate-[1deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/lantern-shop.jpg",
    alt: "Decorative lanterns hanging in a warm shop window",
    frameClass: "md:col-span-5 md:-mt-2 rotate-[0.7deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/oman-flags.jpg",
    alt: "Oman flags hanging above a shopfront",
    frameClass: "md:col-span-7 md:mt-10 rotate-[-1.1deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/gallery-child.jpg",
    alt: "Child walking through an art gallery",
    frameClass: "md:col-span-7 rotate-[0.9deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/courtyard-stairs.jpg",
    alt: "Large sunlit courtyard with stairs and a person in blue",
    frameClass: "md:col-span-5 md:mt-16 rotate-[-0.6deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/barcelona-balconies.jpg",
    alt: "Apartment balconies and flags on a tree-lined street",
    frameClass: "md:col-span-4 md:mt-8 rotate-[-1deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/coconut-table.jpg",
    alt: "Fresh coconut seen through wooden chair slats",
    frameClass: "md:col-span-4 rotate-[1.1deg]",
    imageClass: "aspect-square",
  },
  {
    src: "/photos/play/heron-shadow.jpg",
    alt: "Heron against a dark wall with its shadow",
    frameClass: "md:col-span-4 md:mt-20 rotate-[-0.7deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/storm-window.jpg",
    alt: "People sitting in front of stormy sea windows",
    frameClass: "md:col-span-8 rotate-[0.6deg]",
    imageClass: "aspect-[16/9]",
  },
  {
    src: "/photos/play/london-street.jpg",
    alt: "Wet cobbled London street at dusk",
    frameClass: "md:col-span-4 md:mt-12 rotate-[-0.9deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/rain-umbrella.jpg",
    alt: "Silhouetted person with an umbrella in misty rain",
    frameClass: "md:col-span-6 rotate-[1deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/restaurant-window.jpg",
    alt: "Restaurant window with wine bottles and a turn off phone sign",
    frameClass: "md:col-span-6 md:mt-14 rotate-[-0.8deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/simpsons-shelf.jpg",
    alt: "Colourful collection of toys on a shelf",
    frameClass: "md:col-span-4 rotate-[0.8deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/archway-shadow.jpg",
    alt: "Sunlit wall seen through a dark archway",
    frameClass: "md:col-span-8 md:mt-10 rotate-[-1deg]",
    imageClass: "aspect-[16/9]",
  },
  {
    src: "/photos/play/coney-island.jpg",
    alt: "Coney Island boardwalk and amusement park signs",
    frameClass: "md:col-span-7 rotate-[1.1deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/snow-volleyball.jpg",
    alt: "People playing volleyball in a snowy park",
    frameClass: "md:col-span-5 md:mt-16 rotate-[-0.6deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/dogs-beach.jpg",
    alt: "Dogs running along a quiet beach with a yellow boat",
    frameClass: "md:col-span-8 rotate-[-0.7deg]",
    imageClass: "aspect-[16/9]",
  },
  {
    src: "/photos/play/black-window.jpg",
    alt: "Dark restaurant window with glasses on a table",
    frameClass: "md:col-span-4 md:mt-14 rotate-[0.8deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/photos/play/lake-reflection.jpg",
    alt: "Mountain reflected in a bright blue lake",
    frameClass: "md:col-span-7 rotate-[0.9deg]",
    imageClass: "aspect-[16/9]",
  },
  {
    src: "/photos/play/snow-mountains.jpg",
    alt: "Snowy mountains across a lake",
    frameClass: "md:col-span-5 md:mt-12 rotate-[-0.8deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/colourful-chair.jpg",
    alt: "Colourful woven chair on a wooden balcony",
    frameClass: "md:col-span-5 rotate-[-1.1deg]",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/photos/play/work-hard-room.jpg",
    alt: "Person relaxing in a dark room with a work hard and be nice poster",
    frameClass: "md:col-span-7 md:mt-10 rotate-[0.7deg]",
    imageClass: "aspect-[16/10]",
  },
] satisfies PhotoImage[];

export default function PhotosPage() {
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
            <Link href="/blog" className="transition-colors hover:text-[#ffb852]">
              Blog
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

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-24 sm:px-6 lg:pt-28">
        <section className="py-8 md:py-12">
          <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-[#bfabcc]">
            Work
          </h1>
        </section>

        <PhotoGrid images={workImages} />

        <section className="pt-20 pb-8 md:pt-28 md:pb-12">
          <h2 className="ml-auto max-w-3xl text-right font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-[#ffa6d9]">
            Play
          </h2>
        </section>

        <PhotoGrid images={playImages} />
      </main>
    </div>
  );
}

function PhotoGrid({ images }: { images: PhotoImage[] }) {
  return (
    <section className="grid items-start gap-x-8 gap-y-12 md:grid-cols-12 md:gap-y-8">
      {images.map((photo) => (
        <div key={photo.src} className={photo.frameClass}>
          <div className={`relative overflow-hidden bg-[#b5d1cc] ${photo.imageClass}`}>
            <Image
              src={`${basePath}${photo.src}`}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 58vw, 90vw"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
