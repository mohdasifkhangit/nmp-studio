import { site } from "../projects.js";
import Icon from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <span className="pill-eyebrow"><i />Independent video editing studio</span>
        <h1>Good stories deserve <span className="red">great editing.</span></h1>
        <p className="lead">
          NMP transforms raw footage into purposeful, polished videos for creators, educators and brands.
          From engaging short-form content to thoughtful long-form storytelling.
        </p>
        <div className="cta-row">
          <a href="#work" className="btn btn-light btn-lg">Explore our work <Icon name="down" size={16} /></a>
          <a href="#contact" className="btn btn-outline btn-lg">Start a project <Icon name="up" size={16} /></a>
        </div>
        <p className="mono-row">
          <span>Founded by {site.founder}</span>
          <span>Independent by design</span>
        </p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <span className="art-mark">NMP</span>
        <span className="art-caption">Story first. Always.</span>
      </div>
    </section>
  );
}
