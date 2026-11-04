import type { ChakraId } from "../data/content";
import { chakraStyle } from "./chakraStyle";

type Props = { chakra: ChakraId; eyebrow: string; title: string; intro?: string };

export default function SectionHead({ chakra, eyebrow, title, intro }: Props) {
  return (
    <header className="section-head reveal" style={chakraStyle(chakra)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-head__intro">{intro}</p>}
    </header>
  );
}
