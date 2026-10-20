import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/SiteShell";

export const metadata = { title: "Contact Us", description: "Contact Droidex Australia about aerial drones, marine robotics and electric propulsion." };

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="contact-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>Contact</div>
        <Eyebrow light>Contact Droidex</Eyebrow>
        <h1>Let’s talk about the work.</h1>
        <p>Share a little about your project and the system you’re exploring. Our team is based in Bella Vista, New South Wales.</p>
      </section>
      <section className="contact-content section-pad">
        <div className="contact-information">
          <Eyebrow>Get in touch</Eyebrow>
          <h2>Talk directly with our team.</h2>
          <a href="tel:0420520000"><span>Phone</span>0420 520 000</a>
          <a href="mailto:info@droidex.com.au"><span>Email</span>info@droidex.com.au</a>
          <address><span>Visit</span>Suite A15, 24 Lexington Drive,<br />Bella Vista, NSW 2153, Australia</address>
          <div className="contact-product-links">
            <span>Looking for a specific system?</span>
            <Link href="/aerial-drone">Aerial drone ↗</Link>
            <Link href="/marine-robot">Marine robot ↗</Link>
            <Link href="/e-boat">E-Boat ↗</Link>
            <Link href="/thermal-camera">Thermal camera ↗</Link>
          </div>
        </div>
        <div className="contact-form-wrap">
          <Eyebrow>Send an enquiry</Eyebrow>
          <h2>What are you working on?</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}