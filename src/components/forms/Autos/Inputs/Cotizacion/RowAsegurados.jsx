import { RowAseguradosStyle } from "../../../../../styles/forms/Gm/CotizacionGM.elements";

function RowAsegurados({ id, nombre, paterno, materno, edad }) {
  return (
    <>
      {nombre !== "" ? (
        <RowAseguradosStyle>
          <p>{id}</p>
          <h6>
            {nombre} {paterno} {materno}
          </h6>
          <h6>
            {edad} {edad === 1 ? "año" : "años"}
          </h6>
        </RowAseguradosStyle>
      ) : (
        ""
      )}
    </>
  );
}

export default RowAsegurados;
