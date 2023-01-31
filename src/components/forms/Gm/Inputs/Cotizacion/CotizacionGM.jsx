import { useEffect, useState } from "react";
import {
  ContainerCotizacionGM,
  CotizacionGM__Title,
  FlexCenterBtn,
} from "../../../../../styles/forms/Gm/CotizacionGM.elements";
import RowAsegurados from "./RowAsegurados.jsx";
import RowDetallesDesglose from "./RowDetallesDesglose.jsx";
import RowDetallesDesglose2 from "./RowDetallesDesglose2.jsx";
import ButtonDownload from "../../../ButtonDownload";

function CotizacionGM({ activeStep, state }) {
  const [showCov, setShowCov] = useState(false);

  const valCov = () => {
    if (
      state.coverageA === false &&
      state.coverageB === false &&
      state.coverageC === false
    ) {
      setShowCov(false);
    } else {
      setShowCov(true);
    }
  };

  useEffect(() => {
    valCov();
    activeStep();
  }, []);

  return (
    <>
      <ContainerCotizacionGM>
        <CotizacionGM__Title mt="0">
          <p>Asegurados</p>
        </CotizacionGM__Title>
        <>
          <RowAsegurados
            id="1"
            nombre={state.nombre}
            paterno={state.paterno}
            materno={state.materno}
            edad={state.edad}
          />
          <RowAsegurados
            id="2"
            nombre={state.add1__Name}
            paterno={state.add1__LastNameP}
            materno={state.add1__LastNameM}
            edad={state.add1__edad}
          />
          <RowAsegurados
            id="3"
            nombre={state.add2__Name}
            paterno={state.add2__LastNameP}
            materno={state.add2__LastNameM}
            edad={state.add2__edad}
          />
          <RowAsegurados
            id="4"
            nombre={state.add3__Name}
            paterno={state.add3__LastNameP}
            materno={state.add3__LastNameM}
            edad={state.add3__edad}
          />
          <RowAsegurados
            id="5"
            nombre={state.add4__Name}
            paterno={state.add4__LastNameP}
            materno={state.add4__LastNameM}
            edad={state.add4__edad}
          />
          <RowAsegurados
            id="6"
            nombre={state.add5__Name}
            paterno={state.add5__LastNameP}
            materno={state.add5__LastNameM}
            edad={state.add5__edad}
          />
        </>
        {showCov ? (
          <>
            <CotizacionGM__Title>
              <p>Coberturas Adicionales</p>
            </CotizacionGM__Title>
            <>
              {state.coverageA === true && (
                <RowDetallesDesglose2
                  col1__Text="Indemnización diaria por hospitalización"
                  state={state}
                />
              )}
              {state.coverageB === true && (
                <RowDetallesDesglose
                  col1__Text="Aumento de tabulador"
                  col2__Text={state.costCoverageB}
                />
              )}
              {state.coverageC === true && (
                <RowDetallesDesglose
                  col1__Text="Gastos extra de hospital"
                  col2__Text={state.costCoverageC}
                />
              )}
              <RowDetallesDesglose
                total={true}
                numberTotal=""
              />
            </>
          </>
        ) : (
          <></>
        )}

        <CotizacionGM__Title>
          <p>Detalles</p>
        </CotizacionGM__Title>
        <>
          <RowDetallesDesglose
            col1__Text="Deducible"
            col2__Text={state.deducible}
          />
          <RowDetallesDesglose
            col1__Text="Porcentaje de devolución"
            no$={true}
            col2__Text={state.porcentajeDeducible}
          />
          <RowDetallesDesglose
            total={true}
            numberTotal=""
          />
        </>

        <CotizacionGM__Title>
          <p>Desglose</p>
        </CotizacionGM__Title>
        <>
          <RowDetallesDesglose col1__Text="Costo Neto" col2__Text="" />
          <RowDetallesDesglose col1__Text="Derechos de póliza" col2__Text="" />
          <RowDetallesDesglose col1__Text="IVA" col2__Text="" />
          <RowDetallesDesglose
            total={true}
            numberTotal=""
          />
        </>
      </ContainerCotizacionGM>
      <FlexCenterBtn>
        <ButtonDownload />
      </FlexCenterBtn>
    </>
  );
}

export default CotizacionGM;
