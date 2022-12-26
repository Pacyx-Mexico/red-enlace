import Navbar from "../components/Navbar";
import HeaderVideo from "../components/productos/HeaderVideo";
import { GastosMedicosHero, Description, Toppings } from '../components/gastos-medicos';
import Footer from "../components/Footer";

export default function GastosMedicos() {
  return (
    <>
      <Navbar type="productos" />
      <GastosMedicosHero />
      <HeaderVideo video={true} title="Gastos Médicos" />
      <Description />
      <Toppings />
      <Footer />
    </>
  );
}
