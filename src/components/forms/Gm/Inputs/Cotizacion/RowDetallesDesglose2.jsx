import {
  Row2ColumCotizadorGM,
  CotizacionAdd,
} from "../../../../../styles/forms/Gm/CotizacionGM.elements";

function RowDetallesDesglose2({ col1__Text, state }) {
  return (
    <Row2ColumCotizadorGM>
      <p>{col1__Text}</p>
      <CotizacionAdd>
        {state.addCoverageA__add0 === true && (
          <p>
            <span>
              {state.reimburseCoverageA__add0 === "10000" && "$ 285"}
              {state.reimburseCoverageA__add0 === "20000" && "$ 550"}
            </span>
            - {state.nombre} {state.paterno} {state.materno}
          </p>
        )}
        {state.addCoverageA__add1 === true && (
          <p>
            <span>
              {state.reimburseCoverageA__add1 === "10000" && "$ 285"}
              {state.reimburseCoverageA__add1 === "20000" && "$ 550"}
            </span>
            - {state.add1__Name} {state.add1__LastNameP} {state.add1__LastNameM}
          </p>
        )}
        {state.addCoverageA__add2 === true && (
          <p>
            <span>
              {state.reimburseCoverageA__add2 === "10000" && "$ 285"}
              {state.reimburseCoverageA__add2 === "20000" && "$ 550"}
            </span>
            - {state.add2__Name} {state.add2__LastNameP} {state.add2__LastNameM}
          </p>
        )}
        {state.addCoverageA__add3 === true && (
          <p>
            <span>
              {state.reimburseCoverageA__add3 === "10000" && "$ 285"}
              {state.reimburseCoverageA__add3 === "20000" && "$ 550"}
            </span>
            - {state.add3__Name} {state.add1__LastNameP} {state.add1__LastNameM}
          </p>
        )}
        {state.addCoverageA__add4 === true && (
          <p>
            <span>
              {state.reimburseCoverageA__add4 === "10000" && "$ 285"}
              {state.reimburseCoverageA__add4 === "20000" && "$ 550"}
            </span>
            - {state.add4__Name} {state.add4__LastNameP} {state.add4__LastNameM}
          </p>
        )}
        {state.addCoverageA__add5 === true && (
          <p>
            <span>
              {state.reimburseCoverageA__add5 === "10000" && "$ 285"}
              {state.reimburseCoverageA__add5 === "20000" && "$ 550"}
            </span>
            - {state.add5__Name} {state.add5__LastNameP} {state.add5__LastNameM}
          </p>
        )}
      </CotizacionAdd>
    </Row2ColumCotizadorGM>
  );
}

export default RowDetallesDesglose2;
