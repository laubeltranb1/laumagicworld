import { chakras, site } from "../data/content";
import { chakraStyle } from "./chakraStyle";

export default function Footer() {
  return (
    <footer className="footer">
      <ol className="chakra-line" aria-hidden="true">
        {chakras.map((c) => <li key={c.id} style={chakraStyle(c.id)} />)}
      </ol>
      <p className="footer__name">{site.name}</p>
      <p>{site.roles}</p>
      <p className="footer__small">
        Reiki and animal communication are complementary practices and do not replace
        medical or veterinary diagnosis and treatment.
      </p>
      <p className="footer__small">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
