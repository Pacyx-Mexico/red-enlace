import styled from "styled-components";

function InputsCoverageA({ value, handleChange }) {
  return (
    <>
      <FormCovB>
        <DisPhone></DisPhone>
        <div>
          <TitleFormCB>Suma asegurada</TitleFormCB>
          <CostCoverageB>$ 5,000</CostCoverageB>
        </div>
        <div>
          <TitleFormCB>Costo Anual</TitleFormCB>
          <CostCoverageB>$ 120.00</CostCoverageB>
        </div>
      </FormCovB>
    </>
  );
}

const FormCovB = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 46% 24% 24%;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 0.8rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 49% 49%;
  }
`;

const DisPhone = styled.div`
  display: block;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TitleFormCB = styled.div`
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

const CoverageBInputs = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
`;

const CostCoverageB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 2px solid var(--off-color);
  border-radius: 0.8rem;
  font-size: 2rem;
`;

export default InputsCoverageA;
