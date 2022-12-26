import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeroSiniestro, DevolucionDeducible, Plans, Cobertura } from "../components/siniestro";
import HeaderVideo from "../components/productos/HeaderVideo";

export default function Siniestro() {
  return (
    <>
      <Navbar type="productos" />
      <HeroSiniestro />
      <HeaderVideo video={true} title="Siniestro" />
      {/* <DevolucionDeducible /> */}
      <Plans />
      <Cobertura />
      <Footer />
    </>
  );
}
