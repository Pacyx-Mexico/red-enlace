import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { EnlaceHero, Plans, Beneficios, Dudes } from "../components/enlace";

export const Enlace = () => {
  return (
    <>
      <Navbar type="productos" />
      <EnlaceHero />
      <Plans />
      <Beneficios />
      <Dudes />
      <Footer />
    </>
  )
}
