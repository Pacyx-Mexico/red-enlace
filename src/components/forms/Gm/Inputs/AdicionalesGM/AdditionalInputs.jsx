import styled from "styled-components";
import InputText from "../../../../Inputs/InputText";
import InputAge from "../../../../Inputs/InputAge";
import InputDate from "../../../../Inputs/InputDate";
import InputSelect from "../../../../Inputs/InputSelect";
import { nameRegEx } from "../../../../../utils/regEx";
import useCurrentDate from "../../../../../hooks/useCurrentDate";

function AdditionalInputs({
  handleChange,
  init,
  add,
  changeInitName,
  changeInitLastNameP,
  changeInitLastNameM,
  changeInitAge,
  changeInitAgeDate,
  changeInitGenere,
  dataName,
  dataLastNameP,
  dataLastNameM,
  dataGenere,
  dataAge,
  dataAgeDate,
}) {
  const genere = [
    {
      value: "man",
      text: "Masculino",
    },
    {
      value: "fem",
      text: "Femenino",
    },
  ];

  const currentDate = useCurrentDate();

  return (
    <InputsAdd>
      <InputText
        autoValidation={true}
        onChange={handleChange}
        type="text"
        name={`add${add}__Name`}
        placeholder="Nombre(s) *"
        value={dataName}
        regEx={nameRegEx}
        textNull="Ingresa un Nombre"
        textError="El campo solo acepta texto y espacios"
        init={init.add1__Name_i}
        changeInit={changeInitName}
      />
      <InputText
        autoValidation={true}
        onChange={handleChange}
        type="text"
        name={`add${add}__LastNameP`}
        placeholder="Apellido Paterno *"
        value={dataLastNameP}
        regEx={nameRegEx}
        textNull="Ingresa el apellido paterno"
        textError="El campo solo acepta texto y espacios"
        init={init.add1__LastNameP_i}
        changeInit={changeInitLastNameP}
      />
      <InputText
        autoValidation={true}
        onChange={handleChange}
        type="text"
        name={`add${add}__LastNameM`}
        placeholder="Apellido Materno *"
        value={dataLastNameM}
        regEx={nameRegEx}
        textNull="Ingresa el apellido materno"
        textError="El campo solo acepta texto y espacios"
        init={init.add1__LastNameM_i}
        changeInit={changeInitLastNameM}
      />
      <InputSelect
        autoValidation={true}
        onChange={handleChange}
        name={`add${add}__Genere`}
        placeholder="Género *"
        options={genere}
        value={dataGenere}
        textNull="Ingresa el género"
        init={init.add1__Genere_i}
        changeInit={changeInitGenere}
      />
      <InputDate
        autoValidation={true}
        onChange={handleChange}
        name={`add${add}__AgeDate`}
        label="Fecha de Nacimiento*"
        value={dataAgeDate}
        init={init.add1__AgeDate_i}
        changeInit={changeInitAgeDate}
        textNull="Ingresa la Fecha de Nacimiento"
        max={currentDate}
      />
      <InputAge
        autoValidation={true}
        onChange={handleChange}
        name={`add${add}__Age`}
        placeholder="Edad *"
        value={dataAge}
        max={100}
        min={1}
        init={init.add1__Age_i}
        changeInit={changeInitAge}
      />
    </InputsAdd>
  );
}
const InputsAdd = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default AdditionalInputs;
