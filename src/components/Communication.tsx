import { communicationHelps, communicationSteps } from "../data/content";
import SectionHead from "./SectionHead";

export default function Communication() {
  return (
    <section className="section communication" id="communication">
      <SectionHead
        chakra="thirdEye"
        eyebrow="Animal communication"
        title="Listening with the heart"
        intro="Animal communication is an intuitive, telepathic connection. Animals are always communicating; with a quiet mind and an open heart, we can learn to receive what they share."
      />
      <ol className="steps">
        {communicationSteps.map((s, i) => (
          <li key={s.title} className="reveal">
            <span className="steps__n">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="helps reveal">
        <h3>It can help with</h3>
        <ul>
          {communicationHelps.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </div>
    </section>
  );
}
