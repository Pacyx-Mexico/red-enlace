import { useState, useEffect } from "react";
import styled from "styled-components";
import SiniestroDeductible from "./Siniestro/SiniestroDeductible";
import { FiAlertOctagon } from "react-icons/fi";

function DeducibleGM({
  data,
  handleChange,
  handleChangeCheck,
  init,
  changeInitAdd0,
  changeInitAdd1,
  changeInitAdd2,
  changeInitAdd3,
  changeInitAdd4,
  changeInitAdd5,
  costAdd0,
  costAdd1,
  costAdd2,
  costAdd3,
  costAdd4,
  costAdd5,
}) {
  const [deductibleValue, setDeductibleValue] = useState("0.0");
  const [alert, setAlert] = useState(false);

  const validationMoney = () => {
    const moneyValue = data.polizaPrimaria;
    const money = moneyValue.replace(/,/g, "");

    if (data.currencyType === "mxn") {
      if (money === "") {
        setDeductibleValue("0.0");
        setAlert(false);
      } else if (money >= 1 && money <= 120000) {
        setDeductibleValue(data.polizaPrimaria);
        setAlert(false);
      } else {
        setDeductibleValue("120,000");
        setAlert(true);
      }
    } else if (data.currencyType === "usd") {
      if (money === "") {
        setDeductibleValue("0.0");
        setAlert(false);
      } else if (money >= 1 && money <= 5450) {
        setDeductibleValue(data.polizaPrimaria);
        setAlert(false);
      } else {
        setDeductibleValue("5,450");
        setAlert(true);
      }
    } else if (data.currencyType === "umam") {
      if (money === "") {
        setDeductibleValue("0.0");
        setAlert(false);
      } else if (money >= 1 && money <= 38) {
        setDeductibleValue(data.polizaPrimaria);
        setAlert(false);
      } else {
        setDeductibleValue("38");
        setAlert(true);
      }
    } else if (data.currencyType === "") {
      setDeductibleValue("0.0");
      setAlert(false);
    } else if (data.polizaPrimaria === "") {
      setDeductibleValue("0.0");
      setAlert(false);
    }
  };

  useEffect(() => {
    validationMoney();
  }, [data]);

  return (
    <ContDeductible>
      <DeductibleInfo>
        <DeductibleMoney>
          <span>Deductible:</span>
          {data.currencyType === "umam" ? "" : "$"}
          {deductibleValue}
          {data.currencyType === "mxn" && " MXN"}
          {data.currencyType === "usd" && " USD"}
          {data.currencyType === "umam" && " UMAM"}
        </DeductibleMoney>
        <DeductibleLimit>
          {alert ? (
            <>
              <FiAlertOctagon /> Tu póliza primaria es{" "}
              {data.currencyType === "umam" ? "" : "$"}
              {data.polizaPrimaria}
              {data.currencyType === "mxn" && " MXN"}
              {data.currencyType === "usd" && " USD"}
              {data.currencyType === "umam" && " UMAM"}, el monto máximo a
              devolver es {data.currencyType === "umam" ? "" : "$"}
              {deductibleValue}
              {data.currencyType === "mxn" && " MXN"}
              {data.currencyType === "usd" && " USD"}
              {data.currencyType === "umam" && " UMAM"}
            </>
          ) : (
            ""
          )}
        </DeductibleLimit>
      </DeductibleInfo>

      <SiniestroDeductible
        data={data}
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
        init={init}
        changeInitAdd0={changeInitAdd0}
        changeInitAdd1={changeInitAdd1}
        changeInitAdd2={changeInitAdd2}
        changeInitAdd3={changeInitAdd3}
        changeInitAdd4={changeInitAdd4}
        changeInitAdd5={changeInitAdd5}
        costAdd0={costAdd0}
        costAdd1={costAdd1}
        costAdd2={costAdd2}
        costAdd3={costAdd3}
        costAdd4={costAdd4}
        costAdd5={costAdd5}
      />
    </ContDeductible>
  );
}

const ContDeductible = styled.section`
  width: 80%;
  margin: 0 auto;
`;

const DeductibleInfo = styled.div`
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: 20% 78%;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const DeductibleMoney = styled.div`
  width: 36rem;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 2.1rem;
  border-radius: 0.8rem;
  border: solid 2px var(--off-color);
  user-select: none;
  background-color: var(--off-color);

  span {
    font-weight: 600;
    margin-right: 1rem;
  }
`;

const DeductibleLimit = styled.p`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-left: 1rem;

  svg {
    font-size: 3rem;
    margin-right: 1rem;
  }
`;

export default DeducibleGM;
