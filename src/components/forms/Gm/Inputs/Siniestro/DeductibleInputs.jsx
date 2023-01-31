import { useEffect } from "react";
import styled from "styled-components";
import CostDeductible from "./CostDeductible";
import SelectDeductible from "./SelectDeductible"
import InputCheckbox from "../../../../Inputs/InputCheckbox";

function DeductibleInputs({
  handleChange,
  handleChangeCheck,
  nameAdd,
  nameCheck,
  valueCheck,
  valueSelect,
  nameSelect,
  init,
  changeInit,
  cost,
  funct,
}) {

  return (
    <ResultRow>
      <IndeCheck>
        <InputCheckbox
          center={true}
          onChange={handleChangeCheck}
          name={nameCheck}
          value={valueCheck}
        />
      </IndeCheck>
      <AddCovA off={valueCheck}>
        <p>{nameAdd}</p>
        <SelectDeductible
          off={valueCheck}
          onChange={handleChange}
          name={nameSelect}
          value={valueSelect}
          init={init}
          changeInit={changeInit}
        />
        <CostDeductible cost={cost} value={valueSelect} off={valueCheck} funct={funct} />
      </AddCovA>
    </ResultRow>
  );
}

const ResultRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10% 89.5%;
  justify-content: space-between;

  p {
    user-select: none;
    width: 100%;
    min-height: 5rem;
    padding: 0.4rem 2rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 0.8rem;
    border: 2px solid var(--off-color);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 1rem 0;
  }
`;

const AddCovA = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 46% 26.4% 26.4%;
  justify-content: space-between;

  opacity: ${({ off }) => (off ? "1" : "0.3")};
  transition: all ease 0.3s;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 1rem 0;
  }
`;

const IndeCheck = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 0.4rem 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border: 2px solid var(--off-color);
`;

export default DeductibleInputs;
