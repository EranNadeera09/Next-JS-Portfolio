import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-300 px-6 md:px-12 py-8" role="contentinfo">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading font-bold text-sm uppercase tracking-tighter text-stone-900">
          Eran &nbsp; Nadeera
        </p>
        <p className="font-body text-xs text-stone-400 text-center">
          © {year} &nbsp; Eran Nadeera · Web Developer &amp; Technical SEO Developer, Sri Lanka
        </p>
        <a
          href="#intro"
          aria-label="Back to top"
          className="font-body text-xs text-stone-400 hover:text-[#FF4D00] transition-colors uppercase tracking-widest"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer