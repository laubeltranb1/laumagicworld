import { chakras, site, whatsappLink } from "../data/content";
import { chakraStyle } from "./chakraStyle";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="aura" aria-hidden="true">
        {[...chakras].reverse().map((c, i) => (
          <span key={c.id} style={{ ...chakraStyle(c.id), animationDelay: `${i * -1.1}s` }} />
        ))}
      </div>
      <div className="hero__content">
        <p className="eyebrow">{site.roles}</p>
        <h1>
          Gentle energy healing for animals <em>and the humans who love them</em>
        </h1>
        <p className="hero__lead">
          Reiki sessions and animal communication to relax, reconnect and restore
          balance, in person or at a distance.
        </p>
        <div className="hero__actions">
          <a className="btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">Book a session</a>
          <a className="btn btn--ghost" href="#reiki">What is Reiki?</a>
        </div>
      </div>
      <ol className="chakra-line" aria-hidden="true">
        {chakras.map((c) => <li key={c.id} style={chakraStyle(c.id)} />)}
      </ol>
    </section>
  );
}
