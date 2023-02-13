import { useEffect, useState } from "react";
import {
  ContainerCotizacion,
  CotizacionTitle,
  Row32x68,
  Row40x60,
  FlexCenterBtn,
  CotizacionAutos__Title,
} from "../../../../styles/forms/CotizacionTabla.elements";
import RowDetallesDesglose2 from "./Cotizacion/RowDetallesDesglose2.jsx";
import RowDetallesDesglose from "./Cotizacion/RowDetallesDesglose.jsx";
import ButtonDownload from "../../ButtonDownload";

function CotizacionAutos({ activeStep, state }) {
  const [showCov, setShowCov] = useState(false);
  console.log("state: ", state)
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
    valCov()
    activeStep();
  }, []);

  return (
    <>
      <ContainerCotizacion>
        <CotizacionTitle>
          <p>Cobertura</p>
        </CotizacionTitle>
        <Row40x60 responsive={true}>
          <p>
            Devolución de deducible Autos - Paquete
            <span>{state.package}</span>
          </p>
          <p>
            Suma asegurada: $
            <>
              {state.package === "Básico" && "10,000.00"}
              {state.package === "Standar" && "20,000.00"}
              {state.package === "Premium" && "30,000.00"}
              {state.package === "Gold" && "40,000.00"}
              {state.package === "Black" && "50,000.00"}
            </>
          </p>
        </Row40x60>
        {showCov ? (
          <>
            <CotizacionAutos__Title >
              <p>Coberturas Adicionales</p>
            </CotizacionAutos__Title >
            <>
              {state.coverageA === true && (
                <RowDetallesDesglose2
                  col1__Text="Perdida de llaves"
                  state={state}
                />
              )}
              {state.coverageB === true && (
                <RowDetallesDesglose
                  col1__Text="Ayuda para pago de app de transporte"
                  col2__Text={state.costCoverageB}
                />
              )}
              {state.coverageC === true && (
                <RowDetallesDesglose
                  col1__Text="Cristalazo"
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
        <CotizacionTitle>
          <p>Descripción de tu auto</p>
        </CotizacionTitle>
        <Row40x60>
          <p>Conductor habitual:</p>
          <p>{state.conductor}</p>
        </Row40x60>
        <Row40x60>
          <p>Descripción:</p>
          <p>{state.descripcion}</p>
        </Row40x60>
        <Row40x60>
          <p>Modelo:</p>
          <p>{state.modelo}</p>
        </Row40x60>
        <Row40x60>
          <p>Marca:</p>
          <p>{state.marca}</p>
        </Row40x60>
        <Row40x60>
          <p>Num. de serie:</p>
          <p>{state.serie}</p>
        </Row40x60>
        <Row40x60>
          <p>Num. de póliza:</p>
          <p>{state.poliza}</p>
        </Row40x60>
        <Row40x60>
          <p>Placas:</p>
          <p>{state.placas}</p>
        </Row40x60>
        <CotizacionTitle>
          <p>Costo anual</p>
        </CotizacionTitle>
        <Row32x68>
          <p>Costo Neto</p>
          <p>$ </p>
        </Row32x68>
        <Row32x68>
          <p>IVA</p>
          <p>$ </p>
        </Row32x68>
        <Row32x68>
          <h5>Total</h5>
          <h5>$ </h5>
        </Row32x68>
      </ContainerCotizacion>
      <FlexCenterBtn>
        <ButtonDownload />
      </FlexCenterBtn>
    </>
  );
}

export default CotizacionAutos;
