import { vibrationScale } from "../data/content";
import SectionHead from "./SectionHead";

export default function Energy() {
  return (
    <section className="section energy">
      <SectionHead
        chakra="throat"
        eyebrow="The energy around us"
        title="Everything is vibration"
      />
      <div className="energy__grid">
        <div className="energy__text reveal">
          <p>
            Every being is surrounded by an energy field, often called the aura. Our
            thoughts and emotions carry their own vibration: heavy states like fear or
            grief make that field contract, while love, joy and peace help it expand.
          </p>
          <p>
            Animals perceive these vibrations naturally. They feel the energy of a room,
            of the people in it, of the day we've had. That's why a calm human so often
            means a calmer animal, and why healing one of you supports the other.
          </p>
          <figure className="photo">
            <img src="/images/dog-crystals.jpg" alt="A resting dog with crystals placed along its chakras" />
            <figcaption>Crystals placed along the chakras during a session</figcaption>
          </figure>
        </div>
        <div className="scale reveal" aria-label="Scale of emotional vibration, from contracted to expanded">
          <span className="scale__end">Expanded</span>
          <ol>
            {[...vibrationScale].reverse().map((v) => <li key={v}>{v}</li>)}
          </ol>
          <span className="scale__end">Contracted</span>
        </div>
      </div>
    </section>
  );
}
