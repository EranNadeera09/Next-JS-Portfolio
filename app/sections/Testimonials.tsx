import React from 'react'

const testimonials = [
  {
    quote:
      "Working remotely with Eran from New Zealand was seamless. He translated our SEO audit into real fixes fast — page speed, schema, canonicals — all sorted.",
    name: "Team — The Permalinks",
    title: ", Auckland NZ",
    initials: "PL",
  },
  {
    quote:
      "Working remotely with Eran from New Zealand was seamless. He translated our SEO audit into real fixes fast — page speed, schema, canonicals — all sorted.",
    name: "Team — The Permalinks",
    title: "Sri Lanka",
    initials: "PL",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 px-6 md:px-12 border-t border-stone-300 bg-stone-900">

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-stone-500 font-body mb-3">Social Proof</p>
        <h2 id="testimonials-heading" className="font-heading font-black uppercase tracking-tighter text-[clamp(2rem,5vw,4rem)] leading-12 text-stone-100">
          What Clients<br />&nbsp;
          <span className="text-[#FF4D00]">Are Saying</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure key={i} className="flex flex-col justify-between p-8 rounded-2xl border border-stone-700 hover:border-[#FF4D00] transition-colors">
            {/* Quote Mark */}
            <div className="mb-6" aria-hidden="true">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.667 3.6 8 6.133 8 10H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0l1.6 2.4C28.267 3.6 25.6 6.133 25.6 10H32V24H17.6Z" fill="#FF4D00" fillOpacity="0.4"/>
              </svg>
            </div>

            <blockquote className="font-body text-stone-300 text-base leading-relaxed mb-8 flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center shrink-0" aria-hidden="true">
                <span className="font-heading font-black text-white text-xs">{t.initials}</span>
              </div>
              <div>
                <p className="font-heading font-bold text-stone-100 text-sm">{t.name}</p>
                <p className="font-body text-stone-500 text-xs">{t.title}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Note — swap with real testimonials when available */}
      {/* Remove this comment block once you have real client quotes */}
    </section>
  )
}

export default Testimonials