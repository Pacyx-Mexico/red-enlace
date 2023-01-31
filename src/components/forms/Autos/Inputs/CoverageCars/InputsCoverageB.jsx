import { useEffect, useState } from "react";
import styled from "styled-components";
import InputRadio2 from "../../../../Inputs/InputRadio2";
import ErrorInput from "../../../../Inputs/ErrorInput";

function InputsCoverageB({ value, handleChange, errorFX }) {
  const [checked10, setChecked10] = useState("false");
  const [checked15, setChecked15] = useState("false");
  const [checked20, setChecked20] = useState("false");

  const checkCoverageC = () => {
    if (value === "10000") {
      setChecked10("true");
      setChecked15("false");
      setChecked20("false");
    } else if (value === "15000") {
      setChecked10("false");
      setChecked15("true");
      setChecked20("false");
    } else if (value === "20000") {
      setChecked10("false");
      setChecked15("false");
      setChecked20("true");
    } else {
      setChecked10("false");
      setChecked15("false");
      setChecked20("false");
    }
  };

  useEffect(() => {
    checkCoverageC();
  }, [value]);

  return (
    <>
      <FormCovA>
        <div>
          <TitleFormCA>Elige la suma asegurada</TitleFormCA>
          <CoverageAInputs>
            <InputRadio2
              name="reimburseCoverageB"
              check={checked10}
              value="10000"
              id="1000011"
              onChange={handleChange}
              text="Hasta $10,000 MXN"
            />
            <InputRadio2
              name="reimburseCoverageB"
              check={checked15}
              value="15000"
              id="1500011"
              onChange={handleChange}
              text="Hasta $15,000 MXN"
            />
            <InputRadio2
              name="reimburseCoverageB"
              check={checked20}
              value="20000"
              id="2000011"
              onChange={handleChange}
              text="Hasta $20,000 MXN"
            />
          </CoverageAInputs>
        </div>
        <div>
          <TitleFormCA>Costo Anual</TitleFormCA>
          <CostCoverageA>
            {value === "" && "$ 0.00"}
            {value === "10000" && "$ 1,250.00"}
            {value === "15000" && "$ 1,835.00"}
            {value === "20000" && "$ 2,450.00"}
          </CostCoverageA>
        </div>
      </FormCovA>
      {errorFX === true && (
        <ErrorTab>
          <ErrorInput
            errorFX={true}
            errorNull={true}
            textNull="Elige la suma asegurada"
          />
        </ErrorTab>
      )}
    </>
  );
}

const FormCovA = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 72% 24%;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 0.8rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 2rem 0;
  }
`;

const TitleFormCA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  border-radius: 0.8rem;
  font-size: 2rem;
  margin-bottom: 0.4rem;
  background-color: var(--off-color);
  user-select: none;
`;

const CoverageAInputs = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 0.6rem 0;
  }
`;

const CostCoverageA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 2px solid var(--off-color);
  border-radius: 0.8rem;
  font-size: 2rem;
`;

const ErrorTab = styled.div`
  border-bottom: 2px solid var(--errorInput-color);
  border-left: 2px solid var(--errorInput-color);
  border-right: 2px solid var(--errorInput-color);
`;

export default InputsCoverageB;
