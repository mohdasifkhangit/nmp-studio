export default function SectionHead({ label, line1, line2, text }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{label}</span>
        <h2>{line1}{line2 && <><br /><span className="dim">{line2}</span></>}</h2>
      </div>
      {text && <p className="head-text">{text}</p>}
    </div>
  );
}
