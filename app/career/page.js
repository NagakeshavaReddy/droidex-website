import Link from "next/link";
import { ContactCTA, Eyebrow } from "@/components/SiteShell";

export const metadata = { title: "Career", description: "Career enquiries at Droidex Australia." };

export default function CareerPage() {
  return (
    <main id="main-content" className="career-page">
      <section className="career-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>Career</div>
        <Eyebrow light>Careers at Droidex</Eyebrow>
        <h1>Build for work that happens out there.</h1>
        <p>Droidex works across robotics, agriculture, underwater inspection and electric marine systems. We welcome thoughtful introductions from people who care about making useful technology.</p>
        <span className="career-index">DX / PEOPLE / 2026</span>
      </section>
      <section className="career-note section-pad">
        <div><Eyebrow>Opportunities</Eyebrow><h2>No current roles are listed.</h2></div>
        <div>
          <p>The Droidex careers page does not currently publish specific vacancies or application requirements. For a general expression of interest, email the team directly with a short introduction and relevant experience.</p>
          <a className="button button--dark" href="mailto:info@droidex.com.au?subject=Career%20enquiry">Email a career enquiry <span aria-hidden="true">↗</span></a>
          <p className="form-note">This opens your email app. Attach a CV or portfolio to your message if relevant.</p>
        </div>
      </section>
      <ContactCTA compact />
    </main>
  );
}