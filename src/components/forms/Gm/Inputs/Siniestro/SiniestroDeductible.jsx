import styled from "styled-components";
import TitleCoverage from "../../../TitleCoverage";
import DeductibleInputs from "./DeductibleInputs";

function SiniestroDeductible({
  data,
  handleChange,
  handleChangeCheck,
  init,
  changeInitAdd0,
  changeInitAdd1,
  changeInitAdd2,
  changeInitAdd3,
  changeInitAdd4,
  changeInitAdd5,
  costAdd0,
  costAdd1,
  costAdd2,
  costAdd3,
  costAdd4,
  costAdd5,
}) {
  const nameAdds = {
    name: data.nombre + " " + data.paterno + " " + data.materno,
    add1:
      data.add1__Name + " " + data.add1__LastNameP + " " + data.add1__LastNameM,
    add2:
      data.add2__Name + " " + data.add2__LastNameP + " " + data.add2__LastNameM,
    add3:
      data.add3__Name + " " + data.add3__LastNameP + " " + data.add3__LastNameM,
    add4:
      data.add4__Name + " " + data.add4__LastNameP + " " + data.add4__LastNameM,
    add5:
      data.add5__Name + " " + data.add5__LastNameP + " " + data.add5__LastNameM,
  };

  return (
    <ContResult>
      <ResultTitleCA>
        <TitleCoverage title="contratar" />
        <ResultTitleCA2>
          <TitleCoverage title="Nombre" />
          <TitleCoverage title="Porcentaje" />
          <TitleCoverage title="Costo Anual" subtitle="(por persona)" />
        </ResultTitleCA2>
      </ResultTitleCA>

      <DeductibleInputs
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
        nameAdd={nameAdds.name}
        valueSelect={data.deductible__add0}
        nameSelect="deductible__add0"
        init={init.add0_i}
        changeInit={changeInitAdd0}
        cost={data.costDeductible__add0}
        funct={costAdd0}
      />

      {data.add1__Name !== "" && (
        <DeductibleInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add1}
          valueSelect={data.deductible__add1}
          nameSelect="deductible__add1"
          init={init.add1_i}
          changeInit={changeInitAdd1}
          cost={data.costDeductible__add1}
          funct={costAdd1}
        />
      )}
      {data.add2__Name !== "" && (
        <DeductibleInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add2}
          valueSelect={data.deductible__add2}
          nameSelect="deductible__add2"
          init={init.add2_i}
          changeInit={changeInitAdd2}
          cost={data.costDeductible__add2}
          funct={costAdd2}
        />
      )}
      {data.add3__Name !== "" && (
        <DeductibleInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add3}
          valueSelect={data.deductible__add3}
          nameSelect="deductible__add3"
          init={init.add3_i}
          changeInit={changeInitAdd3}
          cost={data.costDeductible__add3}
          funct={costAdd3}
        />
      )}
      {data.add4__Name !== "" && (
        <DeductibleInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add4}
          valueSelect={data.deductible__add4}
          nameSelect="deductible__add4"
          init={init.add4_i}
          changeInit={changeInitAdd4}
          cost={data.costDeductible__add4}
          funct={costAdd4}
        />
      )}
      {data.add5__Name !== "" && (
        <DeductibleInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add5}
          valueSelect={data.deductible__add5}
          nameSelect="deductible__add5"
          init={init.add5_i}
          changeInit={changeInitAdd5}
          cost={data.costDeductible__add5}
          funct={costAdd5}
        />
      )}
    </ContResult>
  );
}

const ContResult = styled.form`
  width: 100%;
  margin-top: 1rem;
  overflow: hidden;
`;

const ResultTitleCA = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 0% 99.5%;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ResultTitleCA2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 46% 26.4% 26.4%;
  justify-content: space-between;
`;

export default SiniestroDeductible;
