import { bondCards } from "../data/content";
import { chakraStyle } from "./chakraStyle";
import SectionHead from "./SectionHead";

export default function Bond() {
  return (
    <section className="section bond" id="bond">
      <SectionHead
        chakra="sacral"
        eyebrow="Animals & humans"
        title="A connection with purpose"
        intro="The bond between an animal and their person is an energetic one. We share a home, routines and emotions, and with them, a field of energy that we both feel."
      />
      <ul className="cards">
        {bondCards.map((c) => (
          <li key={c.title} className="card reveal" style={chakraStyle(c.chakra)}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
      <p className="bond__note reveal" style={chakraStyle("heart")}>
        Animals also have a special energy center, the <strong>brachial chakra</strong>,
        located between the shoulders. It is the center that links them to their
        humans, and often the first place they invite Reiki in.
      </p>
    </section>
  );
}
