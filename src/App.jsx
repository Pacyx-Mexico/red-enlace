import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Inicio, GastosMedicos, Siniestro, Enlace } from "./pages";
import CotizadorGastosMedicos from "./pages/forms/CotizadorGastosMedicos";
import CotizadorDeducibleAutos from "./pages/forms/CotizadorDeducibleAutos";
import ReclamacionSiniestro from "./pages/forms/ReclamacionSiniestro";

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
            <Route
              path="cotizador-deducible-autos"
              element={<CotizadorDeducibleAutos />}
            />
            <Route
              path="cotizador-deducible-gastos-medicos"
              element={<CotizadorGastosMedicos />}
            />
            <Route path="siniestro" element={<Siniestro />} />
            <Route
              path="reclamacion-de-siniestro"
              element={<ReclamacionSiniestro />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
