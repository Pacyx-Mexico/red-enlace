import Navbar from "../components/Navbar";
import HeaderVideo from "../components/productos/HeaderVideo";
import { GastosMedicosHero, Description, Toppings } from '../components/gastos-medicos';
import Footer from "../components/Footer";

export const GastosMedicos = () => {
  const videoGM = "https://elementos-red-enlace.s3.amazonaws.com/FINAL+GMM.mp4"
  return (
    <>
      <Navbar type="productos" />
      <GastosMedicosHero />
      <HeaderVideo video={true} title="Gastos Médicos" url={videoGM} />
      <Description />
      <Toppings />
      <Footer />
    </>
  )
}
