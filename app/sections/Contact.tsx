import React from 'react'

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/erannadeera20/",
    ariaLabel: "Eran Nadeera on LinkedIn",
  },
  {
    label: "Portfolio",
    href: "https://menswebdesign.com",
    ariaLabel: "Eran Nadeera's web design portfolio",
  },
  {
    label: "GitHub",
    href: "https://github.com/EranNadeera09",
    ariaLabel: "Eran Nadeera on GitHub",
  },
]

// ── Fiverr Icon SVG ────────────────────────────────────────────────────────────
const FiverrIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.33c-.25 0-.345.094-.345.345v4.366h-1.361v-4.367c0-.25-.094-.344-.345-.344h-.649c-.251 0-.346.094-.346.344v4.367h-1.36v-6.4h1.36v.498c.314-.373.81-.624 1.48-.624h.86c.594 0 1.02.186 1.267.53.397-.35.94-.53 1.611-.53h.532v1.615zm-7.95 1.647H10.51c.031.692.439 1.11 1.075 1.11.5 0 .844-.25 1-.656l1.267.375c-.344.938-1.204 1.49-2.267 1.49-1.517 0-2.45-1.017-2.45-2.45 0-1.423.964-2.45 2.45-2.45 1.455 0 2.42 1.04 2.42 2.45 0 .063 0 .126-.031.13zm-1.33-.782c-.063-.595-.44-.97-1.048-.97-.594 0-.97.375-1.048.97zm-4.054 2.514H7.32c-.72 0-1.173-.436-1.173-1.174v-2.889h-.782v-1.27h.782V8.44h1.36v1.484h1.143v1.267H7.507v2.67c0 .25.095.345.344.345h.823zm-5.32-5.067c0-.47-.375-.75-.876-.75H.973V8.44H.001v7.55h1.361v-2.86h.5l1.267 2.86h1.548L3.2 13.09c.72-.343 1.154-1 1.154-1.895zM1.362 9.722h.532c.406 0 .657.22.657.563 0 .344-.25.563-.657.563h-.532z"/>
  </svg>
)

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-6 md:px-12">

      {/* CTA Heading */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">Let&apos;s Work Together</p>
        <h2 id="contact-heading" className="font-heading font-black uppercase tracking-tighter text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-stone-900">
          Got a project<br />
          <span className="text-[#FF4D00]">in mind?</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left — contact details ── */}
        <div>
          <p className="font-body text-stone-500 text-base leading-relaxed mb-8 max-w-md">
            I&apos;m available for freelance web development and technical SEO projects.
            Whether it&apos;s a WordPress Site, a Webflow Build, a Shopify Store, a React.js Site or a
            Next.js application — let&apos;s talk and see how I can help.
          </p>

          {/* Email */}
          <a
            href="mailto:menswebdesign@gmail.com"
            aria-label="Email Eran Nadeera"
            className="group inline-flex items-center gap-4"
          >
            <span className="font-heading font-black text-xl md:text-2xl tracking-tight text-stone-900 underline decoration-[#FF4D00] decoration-2 underline-offset-4 group-hover:text-[#FF4D00] transition-colors break-all">
              menswebdesign@gmail.com
            </span>
            <div className="w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H5M15 1v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+94713819806"
            aria-label="Call Eran Nadeera"
            className="flex items-center gap-3 mt-5 text-stone-500 hover:text-[#FF4D00] transition-colors font-body text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 1h3l1.5 3.5-1.75 1.75a11 11 0 005 5L12.5 9.5 16 11v3a2 2 0 01-2 2A15 15 0 011 3a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            (+94) 71 381 9806
          </a>

          {/* ── Fiverr Gig Card ─────────────────────────────────────────────── */}
          <div className="mt-10 p-5 rounded-2xl border border-stone-300 bg-white/60 hover:border-[#1DBF73] transition-colors duration-300 group max-w-sm">
            {/* Header row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {/* Fiverr green dot */}
                <div className="w-8 h-8 rounded-full bg-[#1DBF73] flex items-center justify-center shrink-0">
                  <FiverrIcon />
                </div>
                <div>
                  <p className="font-heading font-bold text-stone-900 text-sm leading-tight">Available on Fiverr</p>
                  <p className="font-body text-xs text-stone-400">@erannadeera</p>
                </div>
              </div>
              {/* Live badge */}
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1DBF73]/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1DBF73] animate-pulse inline-block" />
                <span className="text-[10px] font-body font-semibold text-[#1DBF73] uppercase tracking-wider">Live</span>
              </span>
            </div>

            {/* Gig title */}
            <p className="font-heading font-bold text-stone-900 text-base leading-snug mb-1">
              I will build a professional WordPress or Webflow website with SEO
            </p>
            <p className="font-body text-xs text-stone-500 leading-relaxed mb-4">
              Fast delivery · SEO optimised · Mobile responsive · Revision included
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["WordPress", "Webflow", "Technical SEO"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-stone-100 rounded-full text-[10px] font-body text-stone-600 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://www.fiverr.com/s/ljwyL0b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Eran Nadeera's Fiverr gig"
              className="w-full flex items-center justify-center gap-2 bg-[#1DBF73] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#19a463] transition-colors duration-200"
            >
              <FiverrIcon />
              View Gig on Fiverr
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.ariaLabel}
                className="px-4 py-2 border border-stone-300 rounded-full text-xs font-body uppercase tracking-wider text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — Contact Form ── */}
        <div className="space-y-4" role="form" aria-label="Contact Eran Nadeera">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              className="col-span-2 md:col-span-1 w-full px-5 py-4 rounded-xl border border-stone-300 bg-transparent font-body text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              className="col-span-2 md:col-span-1 w-full px-5 py-4 rounded-xl border border-stone-300 bg-transparent font-body text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Project Type (e.g. WordPress site, Webflow build…)"
            className="w-full px-5 py-4 rounded-xl border border-stone-300 bg-transparent font-body text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Tell me about your project — goals, timeline, budget…"
            className="w-full px-5 py-4 rounded-xl border border-stone-300 bg-transparent font-body text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors resize-none"
          />
          <button
            type="button"
            className="w-full bg-stone-900 text-white font-body font-bold text-xs uppercase tracking-widest py-4 rounded-full hover:bg-[#FF4D00] transition-colors"
          >
            Send Message
          </button>

          {/* Fiverr quick-link below form on desktop */}
          <p className="text-center font-body text-xs text-stone-400 pt-2">
            Prefer Fiverr?{" "}
            <a
              href="https://www.fiverr.com/s/ljwyL0b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DBF73] hover:underline font-semibold"
            >
              Order directly on Fiverr →
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact