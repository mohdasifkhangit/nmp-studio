import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icons.jsx";
import { beforeAfter as d } from "../projects.js";

export default function BeforeAfter() {
  const box = useRef(null);
  const after = useRef(null);  // master clock
  const before = useRef(null); // follows "after"
  const [pos, setPos] = useState(50);
  const [loaded, setLoaded] = useState({ before: false, after: false });
  const [failed, setFailed] = useState([]);
  const [playing, setPlaying] = useState(false);

  const ready = loaded.before && loaded.after;
  const portrait = (() => { const [w, h] = d.ratio.split("/").map(Number); return w < h; })();

  const playBoth = () => {
    const a = after.current, b = before.current;
    if (!a || !b) return;
    b.currentTime = a.currentTime;
    Promise.all([a.play(), b.play()]).then(() => setPlaying(true)).catch(() => setPlaying(false));
  };
  const pauseBoth = () => { after.current?.pause(); before.current?.pause(); setPlaying(false); };

  // Autoplay when both videos are loaded and visible; pause when off screen
  useEffect(() => {
    if (!ready) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!reduce) playBoth(); } else pauseBoth();
    }, { threshold: 0.25 });
    io.observe(box.current);
    // keep the two videos locked together
    const id = setInterval(() => {
      const a = after.current, b = before.current;
      if (a && b && !a.paused && Math.abs(b.currentTime - a.currentTime) > 0.12) b.currentTime = a.currentTime;
    }, 250);
    return () => { io.disconnect(); clearInterval(id); };
  }, [ready]);

  const move = (x) => {
    const r = box.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };
  const onDown = (e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); };
  const onMove = (e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX); };
  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };
  const fail = (src) => setFailed((f) => (f.includes(src) ? f : [...f, src]));

  return (
    <section id="transformation" className="section">
      <div className="container">
        <SectionHead
          label="03 / The transformation"
          line1="See the difference" line2="editing makes."
          text="From source material to a considered final frame."
        />
        <div className="bacard">
          {failed.length > 0 ? (
            <div className="ba-empty">
              <Icon name="sliders" size={36} />
              <h3>Before / After comparison</h3>
              <p className="muted">
                Add your original and graded videos to enable the interactive slider.<br />
                Not found: <code>{failed.map((m) => `public${m}`).join(", ")}</code>
              </p>
            </div>
          ) : (
            <div
              ref={box}
              className={`ba ${portrait ? "ba-portrait" : ""}`}
              style={{ aspectRatio: d.ratio }}
              onPointerDown={onDown}
              onPointerMove={onMove}
            >
              {!ready && <div className="ba-loading">Loading…</div>}

              <video ref={after} src={d.after} muted loop playsInline preload="auto" aria-label="Final edit, colour graded"
                onLoadedData={() => setLoaded((l) => ({ ...l, after: true }))} onError={() => fail(d.after)} />
              <span className="tag tag-r">Final</span>

              <div className="ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <video ref={before} src={d.before} muted loop playsInline preload="auto" aria-label="Original footage, not graded"
                  onLoadedData={() => setLoaded((l) => ({ ...l, before: true }))} onError={() => fail(d.before)} />
                <span className="tag tag-l">Original</span>
              </div>

              <div className="ba-handle" style={{ left: `${pos}%` }} role="slider" tabIndex={0}
                aria-label="Compare original and final" aria-valuemin={0} aria-valuemax={100}
                aria-valuenow={Math.round(pos)} onKeyDown={onKey}>
                <span className="knob" aria-hidden="true">↔</span>
              </div>

              {ready && (
                <button className="ba-toggle" onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => (playing ? pauseBoth() : playBoth())}
                  aria-label={playing ? "Pause comparison" : "Play comparison"}>
                  <Icon name={playing ? "pause" : "play"} />
                </button>
              )}
            </div>
          )}
        </div>
        <p className="caption"><strong>{d.caption}</strong> — {d.text}</p>
      </div>
    </section>
  );
}
