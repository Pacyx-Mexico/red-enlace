import { useEffect, useState } from "react";
import styled from "styled-components";
import AccordionCoverage from "../../AccordionCoverage";
import TabulatorInputs from "./CoberturasGM/TabulatorInputs";
import HelpInputs from "./CoberturasGM/HelpInputs";
import IndemnityForm from "./CoberturasGM/IndemnityForm";
import IndemnityInputsOnlyHolder from "./CoberturasGM/IndemnityInputsOnlyHolder";

function CoberturasGM({
  data,
  handleChangeCheck,
  handleChange,
  errorCovB,
  initInputA,
  changeInitAdd0,
  changeInitAdd1,
  changeInitAdd2,
  changeInitAdd3,
  changeInitAdd4,
  changeInitAdd5,
  initPolicyTab,
  changeInitTab,
}) {
  const [onlyHolder, setOnlyHolder] = useState(false);

  const validationOnlyHolder = () => {
    if (
      data.add1__Name === "" &&
      data.add2__Name === "" &&
      data.add3__Name === "" &&
      data.add4__Name === "" &&
      data.add5__Name === ""
    ) {
      setOnlyHolder(true);
    } else {
      setOnlyHolder(false);
    }
  };

  useEffect(() => {
    validationOnlyHolder();
  }, []);

  return (
    <ContainerCoverage>
      <AccordionCoverage
        on={data.coverageA.toString()}
        handleChangeCheck={handleChangeCheck}
        value={data.coverageA}
        name="coverageA"
        title="Indemnización diaria por hospitalización"
        subtitle={
          onlyHolder
            ? "- Selecciona el monto a devolver"
            : "- Selecciona el monto a devolver de cada asegurado"
        }
      >
        {onlyHolder ? (
          <IndemnityInputsOnlyHolder
            data={data}
            handleChange={handleChange}
            init={initInputA}
            changeInitAdd0={changeInitAdd0}
          />
        ) : (
          <IndemnityForm
            data={data}
            handleChange={handleChange}
            handleChangeCheck={handleChangeCheck}
            init={initInputA}
            changeInitAdd0={changeInitAdd0}
            changeInitAdd1={changeInitAdd1}
            changeInitAdd2={changeInitAdd2}
            changeInitAdd3={changeInitAdd3}
            changeInitAdd4={changeInitAdd4}
            changeInitAdd5={changeInitAdd5}
          />
        )}
      </AccordionCoverage>

      <AccordionCoverage
        handleChangeCheck={handleChangeCheck}
        on={data.coverageB.toString()}
        value={data.coverageB}
        name="coverageB"
        title="Aumento de tabulador"
        subtitle="- Te aumentamos el tabulador para las consultas y los honorarios de médico principal"
      >
        <TabulatorInputs
          data={data}
          handleChange={handleChange}
          errorFX={errorCovB}
          initPolicyTab={initPolicyTab}
          changeInitTab={changeInitTab}
        />
      </AccordionCoverage>

      <AccordionCoverage
        handleChangeCheck={handleChangeCheck}
        on={data.coverageC.toString()}
        handeleChange={handleChange}
        value={data.coverageC}
        name="coverageC"
        title="Gastos extra de hospital"
        subtitle="- Ayuda hasta $10,000"
      >
        <HelpInputs data={data} />
      </AccordionCoverage>
    </ContainerCoverage>
  );
}

const ContainerCoverage = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 3rem;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 0 1rem;
  }
`;

export default CoberturasGM;
