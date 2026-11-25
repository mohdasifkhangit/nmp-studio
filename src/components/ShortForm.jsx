import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead.jsx";
import Placeholder from "./Placeholder.jsx";
import Icon from "./Icons.jsx";
import { shortForm } from "../projects.js";

let stopCurrent = null; // only one video plays at a time

function VideoCard({ title, category, tag, duration, src }) {
  const box = useRef(null);
  const video = useRef(null);
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setNear(true), io.disconnect()), { rootMargin: "300px" });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);

  const pause = () => { video.current?.pause(); setPlaying(false); };
  const toggle = () => {
    const v = video.current;
    if (!v || !ready) return;
    if (playing) return pause();
    if (stopCurrent) stopCurrent();
    v.play().then(() => { setPlaying(true); stopCurrent = pause; }).catch(() => {});
  };
  const toggleSound = () => { const v = video.current; v.muted = !v.muted; setMuted(v.muted); };

  return (
    <article className="vcard" ref={box}>
      <Placeholder note={`Add public${src}`} />
      {!failed && (
        <video
          ref={video}
          className={ready ? "ready" : ""}
          src={near ? `${src}#t=0.1` : undefined}
          muted loop playsInline preload="metadata"
          onLoadedData={() => setReady(true)}
          onError={() => near && setFailed(true)}
          onClick={toggle}
          aria-label={title}
        />
      )}
      <div className="vtop">
        <span className="tag">{tag}</span>
        {duration && <span className="mono-sm">{duration}</span>}
      </div>
      {ready && (
        <div className="vctrl">
          <button onClick={toggle} aria-label={playing ? `Pause ${title}` : `Play ${title}`}><Icon name={playing ? "pause" : "play"} /></button>
          <button onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Turn sound off"}><Icon name={muted ? "soundOff" : "soundOn"} /></button>
        </div>
      )}
      <div className="vinfo">
        <h3>{title}</h3>
        <p className="mono-sm">{category}</p>
      </div>
    </article>
  );
}

export default function ShortForm() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead
          label="01 / Selected work"
          line1="Short-form." line2="Strong storytelling."
          text="Purposeful edits designed to communicate clearly and hold attention."
        />
        <div className="vgrid">
          {shortForm.map((p) => <VideoCard key={p.src} {...p} />)}
        </div>
      </div>
    </section>
  );
}
