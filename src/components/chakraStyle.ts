import type { CSSProperties } from "react";
import type { ChakraId } from "../data/content";

// Exposes a chakra's color as --c so a component can tint itself with it.
export const chakraStyle = (id: ChakraId) => ({ "--c": `var(--${id})` }) as CSSProperties;
