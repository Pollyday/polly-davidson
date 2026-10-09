"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";

const links = [
  { label: "Projects", href: "/#work", hover: "hover:text-[#ff616b]" },
  { label: "Photos", href: "/photos", hover: "hover:text-[#96bfe6]" },
  { label: "Blog", href: "/blog", hover: "hover:text-[#ffb852]" },
  { label: "About", href: "/#philosophy", hover: "hover:text-[#bfabcc]" },
  { label: "Contact", href: "/#contact", hover: "hover:text-[#e9eb74]" },
];

export default function SiteNav({ concept = false }: { concept?: boolean }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const button = useRef<HTMLButtonElement>(null);
  const items = concept
    ? [
        { label: "Work", href: "/concept#work", hover: "hover:text-[#ff616b]" },
        { label: "About", href: "/concept#about", hover: "hover:text-[#ff616b]" },
        links[2],
        links[1],
      ]
    : links;

  return (
    <nav
      aria-label="Main navigation"
      className={`${concept ? "sticky" : "fixed inset-x-0"} top-0 z-50 bg-[#6F7862]`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          button.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className={`mx-auto flex flex-wrap items-center justify-between gap-x-4 px-5 py-[calc(0.75rem-2.5mm)] sm:px-6 ${concept ? "max-w-5xl" : "max-w-6xl"} min-h-[calc(4rem-5mm)]`}>
        <Link href="/" className="nav-wordmark" onClick={() => setOpen(false)}>
          Polly<span className="nav-wordmark-dot">.</span>
        </Link>
        <button
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center text-[#fbf6f3] md:hidden"
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
          </svg>
        </button>
        <div
          id={menuId}
          className={`heading-label ${open ? "flex" : "hidden"} w-full flex-col pb-3 text-[#fbf6f3] md:flex md:w-auto md:flex-row md:flex-wrap md:justify-end md:gap-x-8 md:gap-y-2 md:pb-0`}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex min-h-11 items-center py-2 transition-colors md:min-h-0 md:py-0 ${item.hover}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
