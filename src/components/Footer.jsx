import { site } from "../projects.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{site.name} — {site.full}</p>
          <p className="muted small">Independent video-editing studio.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <p className="mono-sm">Founded by {site.founder}. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
