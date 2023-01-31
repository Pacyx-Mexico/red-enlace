import styled from "styled-components";
import TitleCoverage from "../../../TitleCoverage";
import CostIndemnity from "./CostIndemnity";
import SelectIndemnity from "./SelectIndemnity";

function IndemnityInputsOnlyHolder({
  data,
  handleChange,
  init,
  changeInitAdd0,
}) {
  return (
    <ContResult2>
      <ResultTitleCA2>
        <div></div>
        <TitleCoverage title="Reembolso" />
        <TitleCoverage title="Cotización" />
      </ResultTitleCA2>

      <ResultRow2>
        <PhoneHidden></PhoneHidden>
        <SelectIndemnity
          off={true}
          onChange={handleChange}
          name="reimburseCoverageA__add0"
          value={data.reimburseCoverageA__add0}
          init={init.add0_i}
          changeInit={changeInitAdd0}
        />
        <CostIndemnity value={data.reimburseCoverageA__add0} off={true} />
      </ResultRow2>
    </ContResult2>
  );
}

const ContResult2 = styled.form`
  width: 100%;
  margin-top: 1rem;
  overflow: hidden;
`;
const PhoneHidden = styled.div`
  display: block;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ResultTitleCA2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 24.6% 24.6%;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ResultRow2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 24.6% 24.6%;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  p {
    user-select: none;
    width: 100%;
    min-height: 5rem;
    padding: 0.4rem 2rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0;
    background-color: transparent;
    border-radius: 0.8rem;
    border: 2px solid var(--off-color);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 0.6rem 0;
  }
`;
export default IndemnityInputsOnlyHolder;
