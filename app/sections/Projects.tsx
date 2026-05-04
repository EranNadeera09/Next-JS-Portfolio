import React from 'react'

const projects = [
  {
    number: "01",
    title: "Men's Web Design — Personal Blog & Portfolio",
    shortDesc: "Personal brand hub showcasing web design work, blog posts, and client case studies.",
    description:
      "A fully custom WordPress build using a hand-crafted PHP theme — no page builders. Features a blog CMS, project showcase, SEO-optimised post structure with schema markup, and Core Web Vitals tuned for fast load times.",
    tags: ["WordPress", "Custom Theme", "PHP", "SEO"],
    year: "2026",
    color: "bg-[#FF4D00]",
    link: "https://menswebdesign.com",
    linkLabel: "menswebdesign.com",
    // Replace with a real screenshot: /public/images/projects/menswebdesign.jpg
    image: "/images/projects/my-portfolio-wordpress.png",
  },
  {
    number: "02",
    title: "Center For Lean — Website Redesign",
    shortDesc: "Full redesign of a lean consultancy firm's website — cleaner UX, faster performance.",
    description:
      "Redesigned and rebuilt the Center For Lean website on WordPress using the Astra theme with a fully customised layout. Implemented on-page SEO best practices including meta structure, heading hierarchy, and mobile-first responsive design.",
    tags: ["WordPress", "Astra Theme", "Redesign", "On-Page SEO"],
    year: "2025",
    color: "bg-stone-800",
    link: "https://centerforlean.com",
    linkLabel: "centerforlean.com",
    image: "/images/projects/center-for-lean.png",
  },
]

// ── External link icon ─────────────────────────────────────────────────────────
const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Image placeholder (replace with next/image once you have screenshots) ──────
const ProjectImage = ({ title, image }: { title: string; image: string | null }) => {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={`Screenshot of ${title}`} className="w-full h-full object-cover object-top" />
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-stone-200">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="#a8a29e" strokeWidth="1.5"/>
        <path d="M3 17l4-4 3 3 4-5 4 6" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-[10px] text-stone-400 font-body uppercase tracking-wider text-center px-2">
        Add screenshot to<br/>/public/images/projects/
      </span>
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 px-6 md:px-12 border-t border-stone-300"
    >
      {/* ── Section header ── */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">My Work</p>
          <h2
            id="projects-heading"
            className="font-heading font-black uppercase tracking-tighter text-[clamp(2rem,5vw,4rem)] leading-12 text-stone-900"
          >
            Selected<br />
            <span className="text-[#FF4D00]">Works.</span>
          </h2>
        </div>
        <a
          href="https://menswebdesign.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all projects on menswebdesign.com"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-[#FF4D00] transition-colors font-body"
        >
          View All
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* ── Project cards ── */}
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group grid md:grid-cols-[1fr_260px] rounded-2xl border border-stone-300 hover:border-stone-900 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-stone-200"
          >
            {/* ── Left — content ── */}
            <div className="flex flex-col justify-between p-6 md:p-8">

              {/* Top row — number + year */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${project.color} shrink-0`} aria-hidden="true" />
                  <span className="font-heading font-black text-stone-300 text-xl tracking-tighter">
                    {project.number}
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-body tracking-widest uppercase">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <div className="mb-3">
                <h3 className="font-heading font-black text-xl md:text-2xl tracking-tight text-stone-900 group-hover:text-[#FF4D00] transition-colors duration-200 leading-tight mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-sm font-medium text-stone-500">
                  {project.shortDesc}
                </p>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-stone-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Bottom — tags + live link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-stone-200">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-stone-100 rounded-full text-xs font-body text-stone-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live site link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live site`}
                  className="inline-flex items-center gap-2 shrink-0 text-xs font-body font-bold uppercase tracking-wider text-stone-500 hover:text-[#FF4D00] transition-colors duration-200 group/link"
                >
                  <span className="underline underline-offset-2 decoration-stone-300 group-hover/link:decoration-[#FF4D00] transition-colors">
                    {project.linkLabel}
                  </span>
                  <span className="w-6 h-6 rounded-full border border-stone-300 group-hover/link:border-[#FF4D00] group-hover/link:bg-[#FF4D00] group-hover/link:text-white flex items-center justify-center transition-all duration-200">
                    <ExternalIcon />
                  </span>
                </a>

              </div>
            </div>

            {/* ── Right — project image / screenshot ── */}
            {/*
              HOW TO ADD A REAL SCREENSHOT:
              1. Take a screenshot of the live site
              2. Save it to: /public/images/projects/menwebdesign.jpg (or centerforlean.jpg)
              3. Update the `image` field in the projects array above:
                 image: "/images/projects/menwebdesign.jpg"
              The placeholder will automatically be replaced.
            */}
            <div className="hidden md:block relative h-full min-h-60 border-l border-stone-200 overflow-hidden">
              <ProjectImage title={project.title} image={project.image} />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-all duration-300 pointer-events-none" />
            </div>

          </article>
        ))}
      </div>

    </section>
  )
}

export default Projects