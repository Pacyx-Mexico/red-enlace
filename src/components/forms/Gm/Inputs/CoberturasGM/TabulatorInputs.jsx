import { useEffect, useState } from "react";
import styled from "styled-components";
import InputRadio2 from "../../../../Inputs/InputRadio2";
import ErrorInput from "../../../../Inputs/ErrorInput";
import CostCoverage from "../../../CostCoverage";
import TitleCoverageA from "../../../TitleCoverage";
import Cleave from "cleave.js/react";

function TabulatorInputs({
  data,
  handleChange,
  errorFX,
  initPolicyTab,
  changeInitTab,
}) {
  const [checked30, setChecked30] = useState("false");
  const [checked50, setChecked50] = useState("false");
  const [checked100, setChecked100] = useState("false");

  const [error, setError] = useState({
    errorFX__policyTab: false,
    errorNull__policyTab: false,
    errorTest__policyTab: false,
  });

  const checkCoverageB = () => {
    if (data.percentage__coverageB === "30") {
      setChecked30("true");
      setChecked50("false");
      setChecked100("false");
    } else if (data.percentage__coverageB === "50") {
      setChecked30("false");
      setChecked50("true");
      setChecked100("false");
    } else if (data.percentage__coverageB === "100") {
      setChecked30("false");
      setChecked50("false");
      setChecked100("true");
    } else {
      setChecked30("false");
      setChecked50("false");
      setChecked100("false");
    }
  };

  const validationPolicyTab = () => {
    const deducibleGm = data.policyTab;
    const deducible = deducibleGm.replace(/,/g, "");

    if (data.policyTab === "") {
      setError({
        errorFX__policyTab: true,
        errorNull__policyTab: true,
        errorTest__policyTab: false,
      });
    } else {
      if (deducible < 1) {
        setError({
          errorFX__policyTab: true,
          errorNull__policyTab: false,
          errorTest__policyTab: true,
        });
      } else {
        setError({
          errorFX__policyTab: false,
          errorNull__policyTab: false,
          errorTest__policyTab: false,
        });
      }
    }
  };

  useEffect(() => {
    validationPolicyTab();
    checkCoverageB();
  }, [data]);

  return (
    <>
      <Tab>
        <TabCol className="tabCol1" init={initPolicyTab}>
          <TitleCoverageA title="Costo de la póliza primaria actual" />
          <InputMoneyTab
            errorFX={error.errorFX__policyTab}
            init={initPolicyTab}
            onClick={changeInitTab}
          >
            <span>$</span>
            <Cleave
              options={{
                numeral: true,
                numeralThousandsGroupStyle: "thousand",
              }}
              placeholder="0.00"
              name="policyTab"
              onChange={handleChange}
              value={data.policyTab}
              onKeyUp={validationPolicyTab}
              onBlur={validationPolicyTab}
            />
            {data.policyTab !== "" && "MXN"}
          </InputMoneyTab>
          {error.errorFX__policyTab === true && (
            <>
              {initPolicyTab ? (
                ""
              ) : (
                <ErrorTab2>
                  <ErrorInput
                    init={initPolicyTab}
                    errorFX={true}
                    errorNull={error.errorNull__policyTab}
                    errorTest={error.errorTest__policyTab}
                    textNull="Elige el porcentaje a reembolsar"
                    textError="Ingresa un valor mayor a 0"
                  />
                </ErrorTab2>
              )}
            </>
          )}
        </TabCol>
        <TabCol className="tabCol2">
          <TitleCoverageA title="¿En qué porcentaje deseas aumentar tu tabulador?" />
          <PercentageInputsRC>
            <InputRadio2
              name="percentage__coverageB"
              check={checked30}
              value="30"
              id="30"
              onChange={handleChange}
              text="30%"
            />
            <InputRadio2
              name="percentage__coverageB"
              check={checked50}
              value="50"
              id="50"
              onChange={handleChange}
              text="50%"
            />
            <InputRadio2
              name="percentage__coverageB"
              check={checked100}
              value="100"
              id="100"
              onChange={handleChange}
              text="100%"
            />
          </PercentageInputsRC>
          {errorFX === true && (
            <ErrorTab>
              <ErrorInput
                errorFX={true}
                errorNull={true}
                textNull="Elige el porcentaje a reembolsar"
              />
            </ErrorTab>
          )}
        </TabCol>
        <TabCol className="tabCol3">
          <CostCoverage cost={data.costCoverageB} loading={false} />
        </TabCol>
      </Tab>
    </>
  );
}
const Tab = styled.div`
  width: 100%;
  padding-top: 0.6rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 29% 43% 20%;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;
const TabCol = styled.div`
  &.tabCol1 {
    order: 1;
  }
  &.tabCol2 {
    order: 2;
  }
  &.tabCol3 {
    order: 3;
  }
  @media screen and (max-width: 600px) {
    &.tabCol1 {
      order: 2;
      margin-bottom: 1rem;
    }
    &.tabCol2 {
      order: 3;
    }
    &.tabCol3 {
      order: 1;
      margin-bottom: 1rem;
    }
  }
`;

const InputMoneyTab = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  align-items: center;
  padding: 0.6rem 2rem;
  overflow: hidden;
  font-size: 2rem;
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--off-color)"};
  user-select: none;
  margin-top: 0.4rem;

  ${({ init }) => (init ? "border: 2px solid var(--off-color);" : "")}

  span {
    font-size: 2.1rem;
    margin-right: 0.6rem;
    font-weight: 400;
    color: var(--text-color);
  }

  input {
    width: auto;
    height: 100%;
    display: flex;
    padding-right: 1rem;
    font-size: 2.1rem;
    border-radius: 0.6rem;
    outline: none;
    background-color: transparent;
    border: none;
  }
`;

const PercentageInputsRC = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  margin-top: 0.4rem;
`;

const ErrorTab = styled.div`
  padding-top: 0.6rem;
  border-bottom: 2px solid var(--errorInput-color);
  border-left: 2px solid var(--errorInput-color);
  border-right: 2px solid var(--errorInput-color);
`;
const ErrorTab2 = styled.div`
  padding-top: 0.6rem;
`;
export default TabulatorInputs;
