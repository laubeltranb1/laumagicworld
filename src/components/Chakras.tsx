import { chakras } from "../data/content";
import { chakraStyle } from "./chakraStyle";
import SectionHead from "./SectionHead";

export default function Chakras() {
  return (
    <section className="section chakras">
      <SectionHead
        chakra="heart"
        eyebrow="The energy centers"
        title="Seven chakras, one flowing body"
        intro="Humans and animals share these seven main energy centers. When they spin freely, energy moves with ease; when one is blocked, we feel it in body, mood and behavior. Reiki helps bring them back into harmony."
      />
      <ol className="chakra-list">
        {[...chakras].reverse().map((c) => (
          <li key={c.id} className="reveal" style={chakraStyle(c.id)}>
            <span className="chakra-list__dot" aria-hidden="true" />
            <div>
              <h3>{c.name} <span>{c.sanskrit}</span></h3>
              <p className="chakra-list__place">{c.place}</p>
            </div>
            <p className="chakra-list__theme">{c.theme}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
