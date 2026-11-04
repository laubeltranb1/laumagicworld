import { whatsappLink } from "../data/content";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner reveal">
        <h2>Ready to reconnect?</h2>
        <p>
          Tell me a little about you and your animal, and we'll find the session that
          feels right for you both.
        </p>
        <a className="btn btn--light" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Message me on WhatsApp
        </a>
      </div>
    </section>
  );
}
