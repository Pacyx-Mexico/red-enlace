import styled from "styled-components";
import CostCoverage from "../../../CostCoverage";

function HelpInputs({ data }) {
  

  return (
    <>
      <CoverageC>
        <div></div>
        <CostCvC>
          <CostCoverage cost={data.costCoverageC} />
        </CostCvC>
      </CoverageC>
    </>
  );
}

const CoverageC = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 73% 22%;
  justify-content: space-between;
  padding-top: 0.6rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

const CostCvC = styled.div`
  order: 2;

  @media screen and (max-width: 600px) {
    order: 1;
    margin-bottom: 1rem;
  }
`;


export default HelpInputs;
