import { useState } from "react";
import Icon from "./Icons.jsx";
import { site, services } from "../projects.js";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...data }).toString(),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow">06 / Get in touch</span>
        <h2 className="contact-h">Have a project<br /><span className="dim">in mind?</span></h2>
        <p className="lead">Tell us what you're creating, and let's discuss how NMP can help.</p>

        <div className="contact-grid">
          <form className="form" name="contact" onSubmit={onSubmit}>
            <p className="hp" aria-hidden="true"><label>Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
            <div className="row">
              <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Your name" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="email">Your email</label><input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" /></div>
            </div>
            <div className="field">
              <label htmlFor="projectType">Project type</label>
              <select id="projectType" name="projectType" required defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" placeholder="What are you making, and by when?" required minLength={10} />
            </div>
            <button className="btn btn-light btn-lg" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : <>Send project inquiry <Icon name="up" size={16} /></>}
            </button>
            {status === "sent" && <p className="msg ok" role="status">Thank you. Your inquiry was sent and I'll reply by email.</p>}
            {status === "error" && <p className="msg err" role="alert">It didn't send. Please email <a href={`mailto:${site.email}`}>{site.email}</a> directly.</p>}
          </form>

          <aside className="side">
            <span className="eyebrow">Let's make it good</span>
            <h3>Clear communication.<br />Thoughtful execution.</h3>
            <p className="muted">Every project begins with understanding the story you want to tell.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
