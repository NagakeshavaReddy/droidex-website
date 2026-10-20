import Image from "next/image";
import Link from "next/link";
import { ContactCTA, Eyebrow, SectionTitle } from "@/components/SiteShell";

export const metadata = { title: "About Us", description: "Learn about Droidex's customer-driven robotic inspection and drone solutions." };

const values = [
  ["01", "Quality", "High standards in design and manufacturing, with reliability at the centre of every system."],
  ["02", "Client relationships", "Working closely with clients and partners to understand each operation and its needs."],
  ["03", "Innovation", "Continued research and development across agriculture, defence and enterprise applications."],
  ["04", "Sustainability", "Considering environmental impact in the way products are designed and used."],
];

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="interior-hero interior-hero--about">
        <div className="interior-hero__copy">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>About us</div>
          <Eyebrow light>About Droidex</Eyebrow>
          <h1>Engineering shaped by real-world work.</h1>
          <p>Droidex develops customer-driven robotic inspection solutions through research, innovation and collaboration.</p>
        </div>
        <div className="interior-hero__image">
          <Image src="/images/aerial-field.webp" alt="Droidex agricultural spraying drone" fill priority sizes="(max-width: 760px) 100vw, 55vw" />
          <span>Outback DXPRO / Field systems</span>
        </div>
      </section>

      <section className="about-statement section-pad">
        <Eyebrow>Who we are</Eyebrow>
        <SectionTitle>Portable, practical systems for demanding environments.</SectionTitle>
        <div>
          <p>Droidex describes its work across aerial drone systems, underwater robotics, electric marine propulsion and imaging payloads. The company focuses on customer-driven products developed to support operations in agriculture, inspection and marine environments.</p>
          <p>Its teams work with clients and partners to understand the task first, then shape technology around the conditions and people involved.</p>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="values-heading"><Eyebrow light>What guides us</Eyebrow><h2>Principles built into the process.</h2></div>
        <div className="values-list">
          {values.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}