import { pillars, site } from "../data/content";
import { chakraStyle } from "./chakraStyle";

export default function About() {
  return (
    <section className="about section">
      <figure className="about__photo reveal">
        <img src="/images/reiki-with-dog.jpg" alt="Sitting in meditation beside a smiling white Samoyed during a Reiki session" />
      </figure>
      <div className="about__text reveal">
        <p className="eyebrow" style={chakraStyle("heart")}>Hello, I'm {site.name.split(" ")[0]}</p>
        <h2>Holding space for both sides of the bond</h2>
        <p>
          I'm a Reiki Master Practitioner and Animal Communicator. My path began with
          animals: sitting quietly beside them, listening, and noticing how deeply
          they feel. Reiki gave me a language for that stillness.
        </p>
        <p>
          Today my work is with animals <em>and</em> their humans, because the two are
          so connected. When one finds peace, the other often follows.
        </p>
        <ul className="pillars">
          {pillars.map((p) => (
            <li key={p.title} style={chakraStyle(p.chakra)}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
