"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About",          href: "#about" },
  { label: "Selected Works", href: "#projects" },
  { label: "Testimonials",   href: "#testimonials" },
  { label: "FAQs",           href: "#faqs" },
  { label: "Contact",        href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-1000 px-6 py-4 md:px-12 transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-stone-200/85 backdrop-blur-md border-b border-stone-300 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="relative z-1001 font-heading font-black text-sm md:text-base tracking-tighter uppercase text-stone-900"
          >
            Eran &nbsp; Nadeera
          </Link>

          <div className="flex items-center gap-3">

            {/*
              ── HAMBURGER BUTTON ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="nav-overlay"
              className="relative z-1001 flex items-center justify-center w-10 h-10 rounded-full border border-stone-400 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-200 cursor-pointer"
            >
              {/* Icon wrapper — flex-col so bars stack vertically */}
              <div className="flex flex-col justify-center gap-1 w-4 h-4">
                {/* Bar 1 — rotates to top of X */}
                <div
                  className={`h-2 w-full bg-stone-900 rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  }`}
                />
                {/* Bar 2 — fades out */}
                <div
                  className={`h-2 w-full bg-stone-900 rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                {/* Bar 3 — rotates to bottom of X */}
                <div
                  className={`h-2 w-full bg-stone-900 rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                  }`}
                />
              </div>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:block bg-[#FF4D00] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-stone-900 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* ── Fullscreen nav overlay ── */}
      <div
        id="nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-999 flex flex-col items-center justify-center gap-6 md:gap-8
          bg-stone-200/97 backdrop-blur-md
          transition-opacity duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={close}
            className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter text-stone-900 hover:text-[#FF4D00] transition-colors duration-200"
            style={{
              opacity:    isOpen ? 1 : 0,
              transform:  isOpen ? "translateY(0px)" : "translateY(20px)",
              transition: `color 200ms, opacity 500ms ${i * 70}ms ease-out, transform 500ms ${i * 70}ms ease-out`,
            }}
          >
            {item.label}
          </a>
        ))}

        {/* Mobile contact CTA */}
        <a
          href="#contact"
          onClick={close}
          className="md:hidden mt-4 bg-[#FF4D00] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-stone-900 transition-colors duration-200"
          style={{
            opacity:    isOpen ? 1 : 0,
            transition: `opacity 500ms ${navItems.length * 70}ms ease-out`,
          }}
        >
          Contact Me
        </a>
      </div>
    </>
  );
}