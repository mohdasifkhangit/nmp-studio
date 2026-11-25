import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import Placeholder from "./Placeholder.jsx";
import Icon from "./Icons.jsx";
import { longForm as d } from "../projects.js";

export default function LongForm() {
  const [started, setStarted] = useState(false);
  const has = Boolean(d.youtubeId);

  return (
    <section id="long-form" className="section">
      <div className="container">
        <SectionHead
          label="02 / Long-form"
          line1="Stories that need" line2="room to breathe."
          text="Space for context, character and ideas to unfold."
        />
        <div className="lcard">
          {has && started ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${d.youtubeId}?autoplay=1&rel=0`}
              title={d.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <>
              <Placeholder note="Paste your YouTube ID in src/projects.js" />
              {has && (
                <>
                  <img className="thumb" src={`https://img.youtube.com/vi/${d.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" />
                  <button className="bigplay" onClick={() => setStarted(true)} aria-label={`Play ${d.title}`}><Icon name="play" size={26} /></button>
                </>
              )}
              <div className="vtop"><span className="tag">{d.tag}</span></div>
              <div className="vinfo">
                <h3>{d.title}</h3>
                <p className="mono-sm">{d.category}</p>
              </div>
            </>
          )}
        </div>
        <div className="lf-info">
          <p className="muted">{d.description}</p>
          <div>
            <p className="mono-sm">My role</p>
            <ul className="rows">{d.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
            <p className="mono-sm">Software: {d.software}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
