import { faqs } from "../data/content";
import SectionHead from "./SectionHead";

export default function Faq() {
  return (
    <section className="section faq">
      <SectionHead chakra="root" eyebrow="Questions" title="Good to know" />
      <div className="faq__list">
        {faqs.map((f) => (
          <details key={f.q} className="reveal">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
