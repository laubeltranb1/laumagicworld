import { reijiHo, reikiBenefits } from "../data/content";
import SectionHead from "./SectionHead";

export default function Reiki() {
  return (
    <section className="section reiki" id="reiki">
      <SectionHead
        chakra="solar"
        eyebrow="What is Reiki"
        title="Universal life energy, flowing where it is needed"
      />
      <div className="reiki__grid">
        <div className="reiki__text reveal">
          <p className="word">
            <span><strong>Rei</strong> universal</span>
            <span>+</span>
            <span><strong>Ki</strong> life force energy</span>
          </p>
          <p>
            Reiki is a gentle Japanese healing practice. <em>Ki</em> is the same vital
            energy known as <em>Qi</em> in China and <em>Prana</em> in India: the energy
            that animates every living being.
          </p>
          <p>
            During a session the practitioner becomes a channel, letting this energy flow
            through light touch or hands held just above the body. Reiki is never forced;
            the receiver takes in exactly what they need, supporting the body's own
            natural ability to rest, rebalance and heal.
          </p>
          <ul className="checklist">
            {reikiBenefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <figure className="photo">
            <img src="/images/calf-reiki.jpg" alt="Giving Reiki to a resting calf" />
            <figcaption>Reiki is welcomed by animals of every size</figcaption>
          </figure>
        </div>
        <aside className="reiji reveal">
          <p className="eyebrow">Every session begins with</p>
          <h3>Reiji-Ho</h3>
          <p className="reiji__sub">Three short rituals of connection</p>
          <ol>
            {reijiHo.map((r) => (
              <li key={r.step}>
                <h4>{r.step}</h4>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
