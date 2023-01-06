import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HeroAutos,
  DevolucionDeducible,
  Plans,
  Cobertura,
} from "../components/autos";
import HeaderVideo from "../components/productos/HeaderVideo";

export const Autos = () => {
  return (
    <>
      <Navbar type="productos" />
      <HeroAutos />
      <HeaderVideo video={true} title="Siniestro" />
      {/* <DevolucionDeducible /> */}
      <Plans />
      <Cobertura />
      <Footer />
    </>
  );
};
