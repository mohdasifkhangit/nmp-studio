import { site } from "../projects.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <span className="eyebrow">05 / The studio</span>
          <h2>Independent<br /><span className="dim">by design.</span></h2>
        </div>
        <div className="about-copy">
          <p>{site.name} ({site.full}) is an independent video-editing studio founded by {site.founder}. We focus on clean, intentional editing that lets the message and storytelling lead.</p>
          <p>Starting as a one-person studio, {site.name} brings a personal, detail-oriented approach to every project.</p>
          <p className="mono-sm">Founded by {site.founder} — Video Editor &amp; Creative.</p>
        </div>
      </div>
    </section>
  );
}
