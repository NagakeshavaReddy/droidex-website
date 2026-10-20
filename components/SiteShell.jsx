import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "@/components/MobileNavigation";

const productLinks = [
  ["Aerial drone", "/aerial-drone"],
  ["Marine robot", "/marine-robot"],
  ["E-Boat", "/e-boat"],
  ["Thermal camera", "/thermal-camera"],
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Droidex home">
        <Image src="/images/logo.png" alt="Droidex" width={221} height={48} loading="eager" />
      </Link>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {productLinks.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
        <Link href="/about-us">About</Link>
      </nav>
      <Link className="header-contact" href="/contact-us">
        Get in touch <span aria-hidden="true">↗</span>
      </Link>
      <MobileNavigation />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand--footer" href="/" aria-label="Droidex home">
            <Image src="/images/logo.png" alt="Droidex" width={221} height={48} />
          </Link>
          <p>Robotic systems for agriculture, marine operations and inspection.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <Link href="/about-us">About us</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Systems</span>
          {productLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </div>
        <div className="footer-column footer-column--contact">
          <span className="footer-label">Get in touch</span>
          <a href="mailto:info@droidex.com.au">info@droidex.com.au</a>
          <a href="tel:0420520000">0420 520 000</a>
          <address>Suite A15, 24 Lexington Drive,<br />Bella Vista, NSW 2153, Australia</address>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Droidex Australia</span>
        <span>Robotics for the work ahead.</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</span>;
}

export function SectionTitle({ children, className = "" }) {
  return <h2 className={`section-title ${className}`}>{children}</h2>;
}

export function ContactCTA({ compact = false }) {
  return (
    <section className={`contact-cta${compact ? " contact-cta--compact" : ""}`}>
      <div>
        <Eyebrow light>Start a conversation</Eyebrow>
        <h2>Tell us what the work asks of you.</h2>
      </div>
      <Link className="button button--lime" href="/contact-us">
        Contact Droidex <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}