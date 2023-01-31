import styled from "styled-components";
import AccordionCoverage from "../../../AccordionCoverage";
import InputsCoverageB from "./InputsCoverageB";
import InputsCoverageA from "./InputsCoverageA";

function CoverageRC({ data, handleChangeCheck, handleChange, errorCovB }) {
  return (
    <>
      <IdStep2RC id="coverageCars" />

      <ContainerCoverage>
        <AccordionCoverage
          on={data.coverageA}
          handleChangeCheck={handleChangeCheck}
          value={data.coverageA}
          name="coverageA"
          title="Perdida de llaves"
          subtitle="- Robo o extravío"
        >
          <InputsCoverageA handleChange={handleChange} />
        </AccordionCoverage>

        <AccordionCoverage
          handleChangeCheck={handleChangeCheck}
          on={data.coverageB}
          value={data.coverageB}
          name="coverageB"
          title="Ayuda para pago de app de transporte"
          subtitle="- En caso de pérdida total, por daños materiales o robo"
        >
          <InputsCoverageB
            value={data.reimburseCoverageB}
            handleChange={handleChange}
            errorFX={errorCovB}
          />
        </AccordionCoverage>

        <AccordionCoverage
          handleChangeCheck={handleChangeCheck}
          on={data.coverageC}
          value={data.coverageC}
          name="coverageC"
          title="Cristalazo"
          subtitle="- Dev. de deducible cristal y $5,000
          de ayuda por robo."
        >
          <CostCovCars>
            <div>
              <TitleFormC>Costo Anual</TitleFormC>
              <CostCoverageC>$ {data.costCoverageC}</CostCoverageC>
            </div>
          </CostCovCars>
        </AccordionCoverage>
      </ContainerCoverage>
    </>
  );
}

const ContainerCoverage = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 88%;
  }
`;

const IdStep2RC = styled.section`
  width: 100%;
  height: 1rem;
  overflow: hidden;
`;

const CostCovCars = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 24%;
  justify-content: flex-end;
  margin-top: 0.8rem;
  
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

const CostCoverageC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 2px solid var(--off-color);
  border-radius: 0.8rem;
  font-size: 2rem;
`;
const TitleFormC = styled.div`
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

export default CoverageRC;
