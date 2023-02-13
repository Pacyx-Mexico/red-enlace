import styled from "styled-components";
import TitleCoverage from "../../../TitleCoverage";
import IndemnityInputs from "./IndemnityInputs";

function IndemnityForm({
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
        <TitleCoverage title="Contratar" />
        <ResultTitleCA2>
          <TitleCoverage title="Nombre" />
          <TitleCoverage title="Reembolso" />
          <TitleCoverage title="Cotización" subtitle="(por persona)" />
        </ResultTitleCA2>
      </ResultTitleCA>

      <IndemnityInputs
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
        nameAdd={nameAdds.name}
        valueCheck={data.addCoverageA__add0}
        nameCheck="addCoverageA__add0"
        valueSelect={data.reimburseCoverageA__add0}
        nameSelect="reimburseCoverageA__add0"
        init={init.add0_i}
        changeInit={changeInitAdd0}
      />

      {data.add1__nombre !== "" && (
        <IndemnityInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add1}
          valueCheck={data.addCoverageA__add1}
          nameCheck="addCoverageA__add1"
          valueSelect={data.reimburseCoverageA__add1}
          nameSelect="reimburseCoverageA__add1"
          init={init.add1_i}
          changeInit={changeInitAdd1}
        />
      )}
      {data.add2__nombre !== "" && (
        <IndemnityInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add2}
          valueCheck={data.addCoverageA__add2}
          nameCheck="addCoverageA__add2"
          valueSelect={data.reimburseCoverageA__add2}
          nameSelect="reimburseCoverageA__add2"
          init={init.add2_i}
          changeInit={changeInitAdd2}
        />
      )}
      {data.add3__nombre !== "" && (
        <IndemnityInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add3}
          valueCheck={data.addCoverageA__add3}
          nameCheck="addCoverageA__add3"
          valueSelect={data.reimburseCoverageA__add3}
          nameSelect="reimburseCoverageA__add3"
          init={init.add3_i}
          changeInit={changeInitAdd3}
        />
      )}
      {data.add4__nombre !== "" && (
        <IndemnityInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add4}
          valueCheck={data.addCoverageA__add4}
          nameCheck="addCoverageA__add4"
          valueSelect={data.reimburseCoverageA__add4}
          nameSelect="reimburseCoverageA__add4"
          init={init.add4_i}
          changeInit={changeInitAdd4}
        />
      )}
      {data.add5__nombre !== "" && (
        <IndemnityInputs
          handleChange={handleChange}
          handleChangeCheck={handleChangeCheck}
          nameAdd={nameAdds.add5}
          valueCheck={data.addCoverageA__add5}
          nameCheck="addCoverageA__add5"
          valueSelect={data.reimburseCoverageA__add5}
          nameSelect="reimburseCoverageA__add5"
          init={init.add5_i}
          changeInit={changeInitAdd5}
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
  grid-template-columns: 10% 89.5%;
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

export default IndemnityForm;
