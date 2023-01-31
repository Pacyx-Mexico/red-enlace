import { useEffect, useState } from "react";
import styled from "styled-components";
import TitleCoverage from "../../../TitleCoverage";
import Spinner from "../../../../Inputs/Spinner";

function CostDeductible({ value, funct, off, cost }) {
  const [loading, setLoading] = useState(false);

  const setCost = () => {
    if (cost !== 0) {
      if (cost === "") {
        setLoading(true);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCost();
    funct();
  }, [value]);

  useEffect(() => {
    setCost();
  }, [cost]);

  return (
    <>
      <CostCAPhone>
        <TitleCoverage
          title={off ? "Cotización" : ""}
          subtitle={off ? "(por persona)" : ""}
        />
        {off ? (
          <InfoCost1>{loading ? <Spinner /> : cost}</InfoCost1>
        ) : (
          <InfoCost1></InfoCost1>
        )}
      </CostCAPhone>
      <CostCAPC>
        {off ? (
          <InfoCost1>{loading ? <Spinner h={"3.4rem"} /> : cost}</InfoCost1>
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

export default CostDeductible;
