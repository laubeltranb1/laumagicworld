import { site, whatsappLink } from "../data/content";

const links = [
  { href: "#reiki", label: "Reiki" },
  { href: "#bond", label: "Animals & Us" },
  { href: "#communication", label: "Communication" },
  { href: "#sessions", label: "Sessions" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__logo">{site.name}</a>
      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
      <a className="btn btn--small" href={whatsappLink} target="_blank" rel="noopener noreferrer">Book</a>
    </nav>
  );
}
