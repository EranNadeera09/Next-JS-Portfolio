"use client"

import React, { useState } from 'react'

const faqs = [
  {
    q: "What web development services do you offer?",
    a: "I offer end-to-end web design and development — responsive website design, WordPress and Webflow builds, Shopify/WooCommerce e-commerce stores, technical SEO implementation, and Next.js web applications. I also handle ongoing maintenance, performance audits, and CMS training.",
  },
  {
    q: "Do you specialise in SEO as well as web development?",
    a: "Yes — this is actually my biggest differentiator. I'm a Technical SEO Developer, meaning I build websites that are fast, crawlable, and structured for search engines from day one. This includes Core Web Vitals optimisation, schema markup (Schema.org), canonical tags, proper H1–H6 hierarchy, sitemap setup, and integration with tools like Screaming Frog, SEMrush, and Ubersuggest.",
  },
  {
    q: "Which platforms and technologies do you work with?",
    a: "I work with WordPress, Webflow, Shopify, WooCommerce, React.js, and Next.js for most client projects. On the code side: HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, and Tailwind CSS. For design I use Figma, Adobe Illustrator, and Adobe Photoshop.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page typically takes 1–2 weeks. A full website usually ranges from 3–6 weeks depending on the number of pages, custom features, and content availability. E-commerce builds with product catalogues may take 4–8 weeks. I'll give you a specific timeline after our initial call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I have hands-on agency experience working remotely with clients in New Zealand (The Permalinks, Auckland). I regularly collaborate across time zones via email, video call, and project management tools. Geographic distance is no barrier.",
  },
  {
    q: "How much does it cost to hire you?",
    a: "Pricing depends on project scope and complexity. A simple landing page starts from $100–$300 USD. A full website build starts from $500–$2,500 USD. I'm happy to provide a detailed quote after a free 20-minute discovery call — no obligations.",
  },
]

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16">

        {/* Left */}
        <div className="md:sticky md:top-32 self-start">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">Got Questions?</p>
          <h2 id="faqs-heading" className="font-heading font-black uppercase tracking-tighter text-[clamp(2rem,4vw,3.5rem)] leading-12 text-stone-900">
            FAQs
          </h2>
          <p className="font-body text-stone-500 text-sm mt-5 leading-relaxed">
            Can&apos;t find your answer? Send me a message and I&apos;ll reply within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest text-[#FF4D00] hover:underline font-body"
            aria-label="Contact Eran Nadeera"
          >
            Contact me
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 11L11 1M11 1H4M11 1v7" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        {/* Right — Accordion */}
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
              >
                <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-stone-900 group-hover:text-[#FF4D00] transition-colors">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${openIndex === i ? 'border-[#FF4D00] bg-[#FF4D00]' : 'border-stone-300'}`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>
                    <path d="M6 1v10M1 6h10" stroke={openIndex === i ? '#fff' : '#57534e'} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <p id={`faq-answer-${i}`} className="font-body text-stone-500 text-base leading-relaxed mt-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs