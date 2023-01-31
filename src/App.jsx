import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  Inicio,
  GastosMedicos,
  Siniestro,
  Enlace,
  Autos,
  Facturacion,
} from "./pages";
import CotizadorGastosMedicos from "./pages/forms/CotizadorGastosMedicos";
import CotizadorDeducibleAutos from "./pages/forms/CotizadorDeducibleAutos";
import {
  SelectSiniestro,
  SiniestroGM,
  SiniestroAuto,
  MainSiniestroAuto,
  MainSiniestroGM,
} from "./components/siniestros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Inicio />} /> */}
          <Route path="/">
            <Route path="*" element={<Inicio />} />
            <Route index element={<Inicio />} />
            <Route
              path="deducible-gastos-medicos"
              element={<GastosMedicos />}
            />
            <Route path="enlace" element={<Enlace />} />
            <Route path="deducible-autos" element={<Autos />} />
            <Route
              path="cotizador-deducible-autos"
              element={<CotizadorDeducibleAutos />}
            />
            <Route
              path="cotizador-deducible-gastos-medicos"
              element={<CotizadorGastosMedicos />}
            />
            <Route path="reclamacion-siniestros">
              <Route index element={<Siniestro />} />
              <Route path="select" element={<SelectSiniestro />} />
              {/* <Route path="gastos-medicos" element={<SiniestroGM />} />
              <Route path="autos" element={<SiniestroAuto />} /> */}
              <Route path="auto-form" element={<MainSiniestroAuto />} />
              <Route path="gastos-medicos-form" element={<MainSiniestroGM />} />
            </Route>
            <Route path="facturacion" element={<Facturacion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
