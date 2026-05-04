import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import FAQs from "./sections/FAQs";
import Contact from "./sections/Contact";

// JSON-LD structured data — tells Google exactly who you are
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eran Nadeera",
  jobTitle: "Creative Web Developer & Technical SEO Developer",
  description:
    "Creative Web Developer and Technical SEO Developer with 6+ years of experience building high-performance websites on WordPress, Webflow, Shopify, and Next.js.",
  url: "https://erannadeera.com",
  sameAs: [
    "https://linkedin.com/in/erannadeera20/",
    "https://menwebdesign.com",
  ],
  email: "menshantha@gmail.com",
  telephone: "+94713819806",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kurunegala",
    addressCountry: "LK",
  },
  knowsAbout: [
    "Web Development",
    "Technical SEO",
    "WordPress",
    "Webflow",
    "Shopify",
    "Next.js",
    "WooCommerce",
    "Core Web Vitals",
    "Schema Markup",
    "UI/UX Design",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Uva Wellassa University of Sri Lanka",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}