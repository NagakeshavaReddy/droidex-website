"use client";

import { useState } from "react";

export default function ContactForm({ subject = "Website enquiry" }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Name: ${fields.get("name")}`,
      `Email: ${fields.get("email")}`,
      `Phone: ${fields.get("phone") || "Not provided"}`,
      "",
      fields.get("message"),
    ].join("\n");
    const mailto = `mailto:info@droidex.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage("Your email app should open with this enquiry. If it does not, email info@droidex.com.au directly.");
    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Phone <span className="optional-label">Optional</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        What can we help with?
        <textarea name="message" rows={5} required minLength={10} />
      </label>
      <div className="form-submit-row">
        <button className="button button--dark" type="submit">
          Prepare enquiry <span aria-hidden="true">↗</span>
        </button>
        <p id="form-note" className="form-note">
          This form opens your email app; it does not send or store your message.
        </p>
      </div>
      <p className="form-status" role="status" aria-live="polite">{message}</p>
    </form>
  );
}