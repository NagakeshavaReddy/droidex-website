import Image from "next/image";
import Link from "next/link";
import { ContactCTA, Eyebrow, SectionTitle } from "@/components/SiteShell";

const products = [
  {
    number: "01",
    name: "Aerial drone",
    descriptor: "Outback DXPRO 15",
    href: "/aerial-drone",
    image: "/images/hero-drone.webp",
    alt: "Droidex Outback agricultural spraying drone",
    className: "product-tile--aerial",
  },
  {
    number: "02",
    name: "Marine robot",
    descriptor: "DeepDive / ROMAR",
    href: "/marine-robot",
    image: "/images/marine-robot.webp",
    alt: "Underwater diver and coral reef, shown as an inspection context image",
    className: "product-tile--marine",
  },
  {
    number: "03",
    name: "Electric boat",
    descriptor: "Retrofit propulsion",
    href: "/e-boat",
    image: "/images/electric-boat.webp",
    alt: "Droidex electric outboard propulsion system",
    className: "product-tile--boat",
  },
  {
    number: "04",
    name: "Thermal camera",
    descriptor: "THERMAX PRO X16 Mini",
    href: "/thermal-camera",
    image: "/images/thermal-pod.webp",
    alt: "THERMAX PRO X16 Mini optical and thermal camera pod",
    className: "product-tile--thermal",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="home-hero__copy">
          <Eyebrow light>Robotics, engineered for real work</Eyebrow>
          <h1>Technology that takes on the hard-to-reach.</h1>
          <p>
            From precision agriculture to underwater inspection, Droidex builds
            practical robotic systems for demanding environments.
          </p>
          <div className="hero-actions">
            <Link className="button button--lime" href="/aerial-drone">
              Explore our systems <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link text-link--light" href="/contact-us">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="home-hero__visual">
          <div className="hero-index">DXPRO&nbsp; / &nbsp;15</div>
          <Image
            src="/images/hero-drone.webp"
            alt="Droidex Outback DXPRO agricultural drone"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
            className="hero-drone"
          />
          <div className="hero-caption">
            <span>Outback series</span>
            <span>Designed for the field</span>
          </div>
        </div>
        <div className="hero-baseline" aria-hidden="true">
          <span>Built around the mission</span>
          <span>Australia&nbsp; / &nbsp;Global applications</span>
        </div>
      </section>

      <section className="intro-band section-pad">
        <div className="intro-band__label">
          <Eyebrow>Our approach</Eyebrow>
          <span className="section-number">01 / 04</span>
        </div>
        <div className="intro-band__content">
          <SectionTitle>Purpose-built robotics for work that matters.</SectionTitle>
          <p>
            Droidex brings together aerial, underwater and electric marine
            technology. Our systems are shaped around practical operations:
            agricultural spraying, inspection, monitoring and propulsion.
          </p>
          <Link className="text-link" href="/about-us">
            Get to know Droidex <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="section-heading-row">
          <div>
            <Eyebrow>Product portfolio</Eyebrow>
            <SectionTitle>Different terrain. One clear purpose.</SectionTitle>
          </div>
          <p className="section-heading-note">
            Explore our systems for air, water and the work between.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <Link
              className={`product-tile ${product.className}`}
              href={product.href}
              key={product.number}
            >
              <div className="product-tile__image">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
                <span className="product-tile__number">{product.number}</span>
                <span className="product-tile__arrow" aria-hidden="true">
                  ↗
                </span>
                {product.className === "product-tile--marine" && (
                  <span className="product-tile__note">Field context</span>
                )}
              </div>
              <div className="product-tile__text">
                <span>{product.descriptor}</span>
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="capabilities-section section-pad">
        <div className="capabilities-section__intro">
          <Eyebrow light>Where we work</Eyebrow>
          <h2>Designed to meet the environment on its own terms.</h2>
          <p>
            Droidex technology supports field operations on land and below the
            waterline, with systems developed around specific jobs.
          </p>
        </div>
        <div className="capability-list">
          <article>
            <span>01</span>
            <div>
              <h3>Precision agriculture</h3>
              <p>
                Aerial spraying and crop monitoring for modern farming
                operations.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Underwater inspection</h3>
              <p>
                Remotely operated robotics for infrastructure, industry and
                environmental work.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Electric marine propulsion</h3>
              <p>
                Retrofit electric propulsion designed to work with existing
                boats.
              </p>
            </div>
          </article>
        </div>
        <span className="capabilities-mark" aria-hidden="true">D.</span>
      </section>

      <section className="story-section section-pad">
        <div className="story-section__image">
          <Image
            src="/images/aerial-spraying-drone.webp"
            alt="Outback agricultural drone photographed from the front"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <span className="image-note">Outback DXPRO&nbsp; / &nbsp;15</span>
        </div>
        <div className="story-section__copy">
          <Eyebrow>Made to be useful</Eyebrow>
          <SectionTitle>Built around the people doing the work.</SectionTitle>
          <p>
            Droidex develops customer-driven robotic inspection solutions
            through research, innovation and collaboration. We focus on
            technology that is practical to deploy, clear to operate and suited
            to demanding environments.
          </p>
          <Link className="text-link" href="/about-us">
            More about Droidex <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}