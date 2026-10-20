import Image from "next/image";
import Link from "next/link";
import { ContactCTA, Eyebrow } from "@/components/SiteShell";

export default function ProductDetail({ product }) {
  return (
    <main id="main-content" className={`product-page product-page--${product.slug}`}>
      <section className="product-hero">
        <div className="product-hero__copy">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>{product.label}</div>
          <Eyebrow>{product.category}</Eyebrow>
          <h1>{product.title}</h1>
          <p>{product.intro}</p>
          <div className="hero-actions">
            {product.buyUrl ? (
              <a className="button button--lime" href={product.buyUrl} target="_blank" rel="noreferrer">
                Buy THERMAX PRO <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link className="button button--lime" href="/contact-us?topic=product">
                Enquire about this system <span aria-hidden="true">↗</span>
              </Link>
            )}
            <a className="text-link text-link--light" href="tel:0420520000">
              Call 0420 520 000 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <figure className={`product-hero__visual product-hero__visual--${product.visualStyle}`}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
          />
          <figcaption>{product.imageCaption}</figcaption>
        </figure>
        <span className="product-hero__index">{product.index}</span>
      </section>

      <section className="product-overview section-pad">
        <div>
          <Eyebrow>At a glance</Eyebrow>
          <h2>{product.overviewTitle}</h2>
        </div>
        <div className="product-overview__copy">
          <p>{product.overview}</p>
          <p>{product.detail}</p>
        </div>
      </section>

      <section className="product-facts section-pad">
        <div className="product-facts__heading">
          <Eyebrow light>{product.featureEyebrow}</Eyebrow>
          <h2>{product.featureTitle}</h2>
        </div>
        <div className="feature-list">
          {product.features.map((feature, index) => (
            <article key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {product.specifications?.length > 0 && (
        <section className="specification-section section-pad">
          <div>
            <Eyebrow>Technical details</Eyebrow>
            <h2>Specifications</h2>
            <p>Published details for the {product.model}.</p>
          </div>
          <dl className="specification-list">
            {product.specifications.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {product.applications?.length > 0 && (
        <section className="applications-section section-pad">
          <Eyebrow>Applications</Eyebrow>
          <div className="applications-heading">
            <h2>{product.applicationTitle}</h2>
            <p>{product.applicationIntro}</p>
          </div>
          <ul>
            {product.applications.map((application, index) => (
              <li key={application}>
                <span>{String(index + 1).padStart(2, "0")}</span>{application}
              </li>
            ))}
          </ul>
        </section>
      )}

      <ContactCTA compact />
    </main>
  );
}