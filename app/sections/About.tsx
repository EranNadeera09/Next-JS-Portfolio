import React from 'react'

const skills = [
  // Core dev
  "HTML / CSS", "JavaScript", "PHP", "MySQL",
  // CMS
  "WordPress", "Webflow", "Shopify", "WooCommerce",
  // Frameworks
  "React.js","Next.js", "Bootstrap", "Laravel",
  // SEO
  "Technical SEO", "Core Web Vitals", "Schema Markup",
  "Screaming Frog", "SEMrush", "Ubersuggest",
  // Design
  "Figma", "Adobe Illustrator", "Adobe Photoshop",
]

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left — Bio */}
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">About Me</p>
          <h2 id="about-heading" className="font-heading font-black uppercase tracking-tighter text-[clamp(2rem,5vw,4rem)] leading-12 text-stone-900">
            Design Meets<br />&nbsp;
            <span className="text-[#FF4D00]">Performance.</span>
          </h2>

          <div className="space-y-4 mt-5 text-stone-600 font-body text-base leading-relaxed">
            <p>
              I&apos;m <strong className="text-stone-900 font-semibold">Eran Nadeera</strong>&nbsp;— a Creative Web Developer &amp; Technical SEO Developer
              with <strong className="text-stone-900 font-semibold">6+ years of experience</strong>&nbsp;building high-impact web solutions from
              Kurunegala, Sri Lanka. I specialise in crafting websites that don&apos;t just look great — they rank, load fast, and convert.
            </p>
            <p>
              With a <strong className="text-stone-900 font-semibold">B.Sc. in Computer Science &amp; Technology</strong> from Uva Wellassa University
              and hands-on experience at agencies across Sri Lanka and New Zealand, I bridge the gap
              between clean engineering and strategic SEO — so your site works hard in search and
              harder for your users.
            </p>
            <p>
              Currently a <strong className="text-stone-900 font-semibold">Technical SEO Developer at Web Lankan</strong>, and
              previously an SEO-Focused Web Developer at <strong className="text-stone-900 font-semibold">The Permalinks, Auckland</strong>.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/files/Web_Developer_CV_Eran_Nadeera.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Eran Nadeera's CV"
            className="inline-flex items-center gap-3 mt-10 border border-stone-900 text-stone-900 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-stone-900 hover:text-stone-100 transition-colors"
          >
            Download CV
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v9M7 10L3 6M7 10l4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right — Skills + Photo */}
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-6">Skills &amp; Tools</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-stone-300 rounded-full text-sm font-body text-stone-700 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="mt-12 space-y-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body">Experience</p>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] mt-1 shrink-0"></span>
                <span className="w-px flex-1 bg-stone-300 mt-2"></span>
              </div>
              <div className="pb-6">
                <p className="font-heading font-bold text-stone-900 text-base">Technical SEO Developer</p>
                <p className="font-body text-sm text-[#FF4D00] font-medium">Web Lankan — Nugegoda, Sri Lanka</p>
                <p className="font-body text-xs text-stone-400 mb-2">2025 – 2026</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">
                  SEO-driven responsive websites, Core Web Vitals optimization, Schema.org structured data, technical audits with Screaming Frog &amp; SEMrush.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400 mt-1 shrink-0"></span>
                <span className="w-px flex-1 bg-stone-300 mt-2"></span>
              </div>
              <div className="pb-6">
                <p className="font-heading font-bold text-stone-900 text-base">SEO-Focused Web Developer</p>
                <p className="font-body text-sm text-stone-600 font-medium">The Permalinks — Auckland, New Zealand</p>
                <p className="font-body text-xs text-stone-400 mb-2">2023 – 2025</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">
                  Responsive landing pages, on-page SEO fixes, WordPress &amp; Webflow builds, custom forms for lead generation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-300 mt-1 shrink-0"></span>
              </div>
              <div>
                <p className="font-heading font-bold text-stone-900 text-base">Internship Software Engineer</p>
                <p className="font-body text-sm text-stone-600 font-medium">Uva Wellassa University — CS &amp; Informatics Dept.</p>
                <p className="font-body text-xs text-stone-400">2022 (Jul – Oct)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About