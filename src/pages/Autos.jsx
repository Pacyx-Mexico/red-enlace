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
  const videoAutos = "https://elementos-red-enlace.s3.amazonaws.com/FINAL+AUTOS.mp4"
  return (
    <>
      <Navbar type="productos" />
      <HeroAutos />
      <HeaderVideo video={true} title="Siniestro" url={videoAutos} />
      {/* <DevolucionDeducible /> */}
      <Plans />
      <Cobertura />
      <Footer />
    </>
  );
};
