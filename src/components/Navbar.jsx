import { useEffect, useState } from "react";
import { site } from "../projects.js";
import Icon from "./Icons.jsx";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="badge">{site.name}</span>
          <span className="brand-text">
            <strong>{site.name}</strong>
            <small>{site.full}</small>
          </span>
        </a>
        <nav id="menu" className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
          <a href="#contact" className="btn btn-light only-mobile" onClick={close}>Start a project <Icon name="up" size={16} /></a>
        </nav>
        <a href="#contact" className="btn btn-light only-desktop">Start a project <Icon name="up" size={16} /></a>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
