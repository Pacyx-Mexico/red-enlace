import {
  Row2ColumCotizadorAutos,
  CotizacionAdd,
} from "../../../../../styles/forms/Autos/CotizacionAutos.elements";

function RowDetallesDesglose2({ col1__Text, state }) {
  return (
    <Row2ColumCotizadorAutos>
      <p>{col1__Text}</p>
      <CotizacionAdd>
        {state.costCoverageA ? (
          <p>
            <span>
              $ {state.costCoverageA}
            </span>
          </p>
        ):''}
        {/* {state.costCoverageB ? (
          <p>
            <span>
              {state.costCoverageB}
            </span>
          </p>
        ):''}
        {state.costCoverageC ? (
          <p>
            <span>
              {state.costCoverageC}
            </span>
          </p>
        ):''} */}
      </CotizacionAdd>
    </Row2ColumCotizadorAutos>
  );
}

export default RowDetallesDesglose2;
