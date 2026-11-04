import { services, whatsappLink } from "../data/content";
import { chakraStyle } from "./chakraStyle";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section className="section services" id="sessions">
      <SectionHead chakra="crown" eyebrow="Sessions" title="Ways we can work together" />
      <ul className="services__grid">
        {services.map((s) => (
          <li key={s.title} className="service reveal" style={chakraStyle(s.chakra)}>
            <h3>{s.title}</h3>
            <p className="service__format">{s.format}</p>
            <p>{s.text}</p>
          </li>
        ))}
      </ul>
      <p className="services__cta reveal">
        <a className="btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">Ask about a session</a>
      </p>
    </section>
  );
}
