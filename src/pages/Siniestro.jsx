import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeroSiniestro, DevolucionDeducible } from "../components/siniestro";

export default function Siniestro() {
  return (
    <>
      <Navbar type="productos" />
      <HeroSiniestro />
      <DevolucionDeducible />
      <Footer />
    </>
  );
}
