"use client";

import React from "react";
import Image from "next/image";

const roles = [
  "Web Developer",
  "Frontend Developer",
  "Technical SEO Developer",
  "WordPress Developer",
  "Webflow Developer",
];

const Hero = () => {
  return (
    <section
      id="intro"
      aria-label="Eran Nadeera – Web Developer, Frontend Developer & Technical SEO Developer"
      className="min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12 pt-32">
      <div className="w-full mx-auto">
        {/* Top Row — Badge */}
        <div className="flex items-center justify-between mb-10">
          {/* Availability dot */}
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse"
              aria-hidden="true"></span>
            <span className="text-xs font-body uppercase tracking-widest text-stone-500">
              Available for freelance projects
            </span>
          </div>
        </div>

        {/* Middle — H1 + Avatar */}
        <div className="flex flex-col md:flex-row my-10 gap-4 items-center justify-between">
          <h1 className="w-full font-heading font-black uppercase tracking-tighter text-[clamp(2.8rem,9vw,8.5rem)] leading-[0.9] text-stone-900 mb-6">
            Web<br />
            <span className="text-[#FF4D00]">Developer</span>
          </h1>

          {/* Avatar */}
          <div className="relative w-100 h-100 md:w-150 overflow-hidden shadow-md shadow-stone-500 rounded-md">
            <Image
              src="/images/eran-avatar.jpeg"
              alt="Eran Nadeera — Web Developer & Technical SEO Developer based in Sri Lanka"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Role pills — visible keyword signals for users AND search engines */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="list"
          aria-label="Specialisations">
          {roles.map((role) => (
            <span
              key={role}
              role="listitem"
              className="w-fit px-4 py-1.5 border border-stone-400 rounded-full text-xs font-body uppercase tracking-wider text-stone-600 bg-white/40 backdrop-blur-sm">
              {role}
            </span>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-stone-300 pt-8">
          {/* Tagline */}
          <p className="font-body text-stone-600 text-base md:text-lg max-w-md leading-relaxed">
            SEO-focused web developer &amp; designer based in Sri Lanka —
            building fast, accessible, and conversion-ready websites on
            WordPress(Custom Themes), Webflow, Shopify, React.js &amp; Next.js.
          </p>

          {/* Stats */}
          <div className="flex gap-10 shrink-0">
            <div>
              <p className="font-heading font-black text-4xl md:text-5xl tracking-tighter text-stone-900">
                6+
              </p>
              <p className="font-body text-xs text-stone-500 uppercase tracking-widest mt-1">
                Years Exp.
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-4xl md:text-5xl tracking-tighter text-stone-900">
                10+
              </p>
              <p className="font-body text-xs text-stone-500 uppercase tracking-widest mt-1">
                Projects
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-4xl md:text-5xl tracking-tighter text-stone-900">
                2
              </p>
              <p className="font-body text-xs text-stone-500 uppercase tracking-widest mt-1">
                Countries
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 mt-12">
          <div className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center animate-bounce">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true">
              <path
                d="M6 1v10M6 11L2 7M6 11l4-4"
                stroke="#57534e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs text-stone-400 uppercase tracking-widest font-body">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
