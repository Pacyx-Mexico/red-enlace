import styled from "styled-components";
import TitleCoverage from "../../../TitleCoverage";

function CostIndemnity({ value, off, title }) {
  return (
    <>
      <CostCAPhone>
        <TitleCoverage
          title={off ? "Cotización" : ""}
          subtitle={off ? "(por persona)" : ""}
        />
        {off ? (
          <InfoCost1>
            {value === "" && "$ 0"}
            {value === "10000" && "$ 285"}
            {value === "20000" && "$ 550"}
          </InfoCost1>
        ) : (
          <InfoCost1></InfoCost1>
        )}
      </CostCAPhone>
      <CostCAPC>
        {off ? (
          <InfoCost1>
            {value === "" && "$ 0"}
            {value === "10000" && "$ 285"}
            {value === "20000" && "$ 550"}
          </InfoCost1>
        ) : (
          <InfoCost1></InfoCost1>
        )}
      </CostCAPC>
    </>
  );
}

const InfoCost1 = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  align-items: center;
  overflow: hidden;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid var(--off-color);
  user-select: none;
  ${({ loading }) => (loading ? "justify-content: center;" : "")}
  transition: all ease 0.3s;
`;

const CostCAPhone = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
    gap: 0.6rem 0;
    margin-bottom: 3rem;
  }
`;

const CostCAPC = styled.div`
  display: block;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const PhoneCost = styled.div``;

export default CostIndemnity;
