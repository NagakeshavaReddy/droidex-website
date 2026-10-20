"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["Aerial drone", "/aerial-drone"],
  ["Marine robot", "/marine-robot"],
  ["E-Boat", "/e-boat"],
  ["Thermal camera", "/thermal-camera"],
  ["About", "/about-us"],
  ["Career", "/career"],
  ["Contact", "/contact-us"],
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="mobile-navigation">
      <button
        type="button"
        className={`menu-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!open}
      >
        <div className="mobile-menu__inner">
          <span className="eyebrow eyebrow--light">Explore Droidex</span>
          {links.map(([label, href], index) => (
            <Link href={href} onClick={() => setOpen(false)} key={href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <a className="mobile-menu__phone" href="tel:0420520000">
            0420 520 000
          </a>
        </div>
      </nav>
      {open && (
        <button
          type="button"
          className="menu-scrim"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}