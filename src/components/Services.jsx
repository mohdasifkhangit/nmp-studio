import SectionHead from "./SectionHead.jsx";
import Icon from "./Icons.jsx";
import { services, process } from "../projects.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead
          label="04 / What we do"
          line1="Editing that" line2="serves the story."
          text="The right details, in the right places. Nothing unnecessary."
        />
        <div className="sgrid">
          {services.map((s, i) => (
            <div key={s.title} className="scard">
              <div className="scard-top"><span className="red"><Icon name={s.icon} size={26} /></span><span className="mono-sm">0{i + 1}</span></div>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="process">
          <div>
            <span className="eyebrow">Our process</span>
            <h3 className="process-title">Simple from<br />start to finish.</h3>
          </div>
          <ol>
            {process.map((p, i) => (
              <li key={p.title}>
                <span className="red mono-sm">0{i + 1}</span>
                <div><h4>{p.title}</h4><p className="muted">{p.text}</p></div>
                <span className="mono-sm"><Icon name="up" size={16} /></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
