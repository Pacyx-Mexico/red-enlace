import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Inicio, GastosMedicos, Siniestro, Enlace, Autos } from "./pages";
import CotizadorGastosMedicos from "./pages/forms/CotizadorGastosMedicos";
import CotizadorDeducibleAutos from "./pages/forms/CotizadorDeducibleAutos";
import { SelectSiniestro, SiniestroGM, SiniestroAuto, MainSiniestroAuto, MainSiniestroGM } from "./components/siniestros";

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
            <Route path="select-siniestro" element={<SelectSiniestro />} />
            <Route path="siniestro-gm" element={<SiniestroGM />} />
            <Route path="siniestro-auto" element={<SiniestroAuto />} />
            <Route path="reclamacion-de-siniestro" element={<Siniestro />} />
            <Route path="reclamacion-de-siniestro-auto" element={<MainSiniestroAuto />} />
            <Route path="reclamacion-de-siniestro-gm" element={<MainSiniestroGM />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
