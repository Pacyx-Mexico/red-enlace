import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../forms/Spinner";
import TitleCoverageA from "./TitleCoverage";

function CostCoverage({ cost, loading }) {
  function FormatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div>
      <TitleCoverageA title="Cotización" />
      <InfoCost>
        {loading ? <Spinner h="3.2rem" /> : <> $ {FormatNumber(cost)} </>}
      </InfoCost>
    </div>
  );
}

const InfoCost = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  align-items: center;
  overflow: hidden;
  padding: 0.6rem 2rem;
  font-size: 2rem;
  border: 2px solid var(--off-color);
  user-select: none;
  margin-top: 0.4rem;
`;
export default CostCoverage;
