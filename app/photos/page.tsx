import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/polly-davidson" : "";

const featuredPhotos = [
  {
    src: "",
    alt: "Replace this with a description of your first featured photo",
    title: "Your first featured photo",
  },
  {
    src: "",
    alt: "Replace this with a description of your second featured photo",
    title: "Your second featured photo",
  },
  {
    src: "",
    alt: "Replace this with a description of your third featured photo",
    title: "Your third featured photo",
  },
];

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

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-16 sm:px-6 lg:pt-28">
        <section className="overflow-hidden border border-[#253122] bg-[#fbf6f3]">
          <div className="border-b border-[#253122] bg-[linear-gradient(rgba(233,235,116,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(233,235,116,0.58)_1px,transparent_1px)] bg-[#ffb852] bg-[size:2.35rem_2.35rem] p-6 md:p-10">
            <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1b3644]">
              Photos
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,9vw,7rem)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-[#1b3644]">
              Things worth looking at twice
            </h1>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {featuredPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="border-b border-[#253122] bg-[#fbf6f3] p-4 md:border-r md:last:border-r-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-[#253122] bg-[#b5d1cc]">
                  {photo.src ? (
                    <Image
                      src={`${basePath}${photo.src}`}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 30vw, 90vw"
                    />
                  ) : (
                    <div className="grid h-full place-items-center bg-[linear-gradient(rgba(233,235,116,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(233,235,116,0.58)_1px,transparent_1px)] bg-[#ffb852] bg-[size:2.35rem_2.35rem] p-6 text-center">
                      <p className="max-w-40 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#253122]">
                        Add a photo in public/photos
                      </p>
                    </div>
                  )}
                </div>
                <figcaption className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#253122]">
                  {photo.title}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="border-t border-[#253122] bg-[#1b3644] p-6 text-[#bfabcc] md:p-8">
            <h2 className="font-sans text-3xl font-semibold uppercase leading-none tracking-[0.04em] md:text-5xl">
              How to add your photos
            </h2>
            <ol className="mt-6 space-y-3 text-sm leading-relaxed text-[#bfabcc]/85">
              <li>1. Put your image files in the repo folder: <code className="bg-[#fbf6f3] px-1 py-0.5 text-[#253122]">public/photos/</code>.</li>
              <li>2. Name them simply, like <code className="bg-[#fbf6f3] px-1 py-0.5 text-[#253122]">universe-stage.jpg</code> or <code className="bg-[#fbf6f3] px-1 py-0.5 text-[#253122]">berlin-01.png</code>.</li>
              <li>3. In <code className="bg-[#fbf6f3] px-1 py-0.5 text-[#253122]">app/photos/page.tsx</code>, replace the example filenames, titles and alt text in <code className="bg-[#fbf6f3] px-1 py-0.5 text-[#253122]">featuredPhotos</code>.</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
