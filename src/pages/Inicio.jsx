import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Hero,
  Services,
  Special,
  Characteristics,
  Testimonies,
  Contact,
  NewCharacteristics,
} from "../components/landing";

export const Inicio = () => {
  return (
    <>
      <Navbar type="inicio" />
      <Hero />
      <Services />
      <Special />
      <Characteristics />
      {/* <NewCharacteristics/> */}
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
};
