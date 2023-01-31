import {
  ContainerPago,
  ContainerPagoCol1,
  ContainerPagoCol2,
} from "../../../../../styles/forms/Gm/FacturaPago.elements";
import InputSelect from "../../../InputSelect";
import InputText__tooltip from "../../../InputText_tooltip";
import ErrorInputInit from "../../../ErrorInputInit";

function FacturaPagoGM(props) {
  const optionsFormaDePago = [
    {
      id: "unico",
      value: "unico",
      text: "Pago único",
    },
    {
      id: "mensual",
      value: "mensual",
      text: "Mensual",
    },
  ];

  return (
    <>
      <ContainerPago>
        <ContainerPagoCol1>
          <InputSelect
            name="formaDePago"
            value={props.state.formaDePago}
            placeholder="Forma de Pago *"
            options={optionsFormaDePago}
            onChange={props.handleChange}
            validation={props.validationFormaDePago}
            errorFX={props.error.errorFX__formaDePago}
            init={props.error.initFormaDePago}
            changeInit={props.changeInitFormaDePago}
          />
          <ErrorInputInit
            errorFX={props.error.errorFX__formaDePago}
            errorNull={props.error.errorNull__formaDePago}
            textNull="Selecciona una forma de pago"
            init={props.error.initFormaDePago}
          />
        </ContainerPagoCol1>
        <ContainerPagoCol2>
          <InputText__tooltip
            name="codigoAgente"
            value={props.state.codigoAgente}
            placeholder="Código de Agente"
            onChange={props.handleChange}
            validation={props.validationFormaDePago}
            tooltip="Campo exclusivo para agentes afiliados"
          />
        </ContainerPagoCol2>
      </ContainerPago>
    </>
  );
}

export default FacturaPagoGM;
