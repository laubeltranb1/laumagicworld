import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Reiki from "./components/Reiki";
import Chakras from "./components/Chakras";
import Bond from "./components/Bond";
import Energy from "./components/Energy";
import Communication from "./components/Communication";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Fades sections in softly as they scroll into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Reiki />
        <Chakras />
        <Bond />
        <Energy />
        <Communication />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
