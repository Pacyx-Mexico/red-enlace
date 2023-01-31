import { useEffect, useState } from "react";
import InputDate from "../../InputDate";
import InputMoney from "../../InputMoney";
import InputSelect from "../../../Inputs/InputSelect";
import ErrorInput from "../../ErrorInput";
import ErrorInputInit from "../../ErrorInputInit";
import "../../../../styles/forms/Gm/Step3GM.css";
import useCurrentDate from "../../../../hooks/useCurrentDate";

function PolizaGM(props) {
  const optionsCurrency = [
    { text: "MXN", value: "mxn" },
    { text: "USD", value: "usd" },
    { text: "UMAM", value: "umam" },
  ];

  const [textErrorMoney, setTextErrorMoney] = useState("");

  const errorMoney = () => {
    if (props.state.currencyType === "mxn") {
      setTextErrorMoney("el valor debe ser mayor a 0 y menor a $120,000");
    } else if (props.state.currencyType === "usd") {
      setTextErrorMoney("el valor debe ser mayor a 0 y menor a $5,450");
    } else if (props.state.currencyType === "umam") {
      setTextErrorMoney("el valor debe ser mayor a 0 y menor a 38");
    } else {
      setTextErrorMoney("el valor debe ser mayor a 0 y menor a $120,000");
    }
  };

  useEffect(() => {
    props.validationONStep3();
  }, [props.state]);
  useEffect(() => {
    props.validationONStep3();
  }, [props.error]);

  const currentDate = useCurrentDate();

  useEffect(() => {
    errorMoney();
  }, [props.state.currencyType]);

  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <form className="formStep3GM">
      <div className="step3GM__money">
        <div className="step3GM__money_col1">
          <div className="step3GM__moneyInput">
            <label className="step3GM__moneyInput_label">
              ¿Qué deducible tienes actualmente? *
              <br />
              <span>Si no lo conoces, puedes consultarlo en tu carátula</span>
            </label>
            {props.state.currencyType === "umam" ? (
              <InputMoney
                name="polizaPrimaria"
                onChange={props.handleChange}
                value={props.state.polizaPrimaria}
                validation={props.validationPolizaPrimaria}
                errorFX={props.error.errorFX__polizaPrimaria}
                hideSymbol={true}
              />
            ) : (
              <InputMoney
                name="polizaPrimaria"
                onChange={props.handleChange}
                value={props.state.polizaPrimaria}
                validation={props.validationPolizaPrimaria}
                errorFX={props.error.errorFX__polizaPrimaria}
              />
            )}
          </div>
          <ErrorInput
            errorFX={props.error.errorFX__polizaPrimaria}
            errorNull={props.error.errorNull__polizaPrimaria}
            errorTest={props.error.errorTest__polizaPrimaria}
            textNull="Ingresa el deducible de tu póliza actual"
            textError="Ingresa un valor mayor a 0"
          />
        </div>

        <div className="step3GM__money_col2">
          <div className="step3GM__money_col2_select">
            <InputSelect
              autoValidation={true}
              init={props.error.initCurrencyType}
              changeInit={props.changeInitCurrencyType}
              name="currencyType"
              options={optionsCurrency}
              onChange={props.handleChange}
              value={props.state.currencyType}
              placeholder="Tipo de Moneda *"
              textNull="Selecciona el tipo de moneda"
            />
          </div>
        </div>
      </div>

      <div className="step3GM__date">
        <div>
          <InputDate
            label="Inicio de Vigencia *"
            name="inicioVigencia"
            onChange={props.handleChange}
            value={props.state.inicioVigencia}
            validation={props.validationInicioVigencia}
            errorFX={props.error.errorFX__inicioVigencia}
            changeInit={props.changeInitInicioVigencia}
            init={props.error.initInicioVigencia}
            min={currentDate}
          />
          <ErrorInputInit
            errorFX={props.error.errorFX__inicioVigencia}
            errorNull={props.error.errorNull__inicioVigencia}
            textNull="Ingresa el inicio de la vigencia"
            init={props.error.initInicioVigencia}
          />
        </div>

        <div>
          <InputDate
            label="Fin de Vigencia *"
            name="finVigencia"
            onChange={props.handleChange}
            value={props.state.finVigencia}
            validation={props.validationFinVigencia}
            errorFX={props.error.errorFX__finVigencia}
            changeInit={props.changeInitFinVigencia}
            init={props.error.initFinVigencia}
            min={currentDate}
          />
          <ErrorInputInit
            errorFX={props.error.errorFX__finVigencia}
            errorNull={props.error.errorNull__finVigencia}
            textNull="Ingresa el fin de la vigencia"
            init={props.error.initFinVigencia}
          />
        </div>
      </div>
    </form>
  );
}

export default PolizaGM;
