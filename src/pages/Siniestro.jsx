import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HeroSiniestros,
  SiniestroSteps
} from "../components/siniestros";

export const Siniestro = () => {
  return (
    <>
      <Navbar type="productos" />
      <HeroSiniestros />
      <SiniestroSteps />
      <Footer />
    </>
  );
};
