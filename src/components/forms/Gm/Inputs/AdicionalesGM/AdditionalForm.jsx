import styled from "styled-components";
import ButtonConfirmDelete from "../../../../Buttons/ButtonConfirmDelete";
import AdditionalInputs from "./AdditionalInputs";

function AdditionalForm({
  data,
  init,
  add,
  deleteAdd,
  idLink,
  handleChange,
  additionalON,
  confirmEdit,
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
  return (
    <FormAdd1>
      <AdditionalInputs
        data={data}
        init={init}
        add={add}
        handleChange={handleChange}
        changeInitName={changeInitName}
        changeInitLastNameP={changeInitLastNameP}
        changeInitLastNameM={changeInitLastNameM}
        changeInitAge={changeInitAge}
        changeInitAgeDate={changeInitAgeDate}
        changeInitGenere={changeInitGenere}
        dataName={dataName}
        dataLastNameP={dataLastNameP}
        dataLastNameM={dataLastNameM}
        dataGenere={dataGenere}
        dataAge={dataAge}
        dataAgeDate={dataAgeDate}
      />
      <ButtonConfirmDelete
        on={additionalON}
        confirmEdit={confirmEdit}
        deleteAdd={deleteAdd}
        linkId={idLink}
      />
    </FormAdd1>
  );
}

const FormAdd1 = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-right: 5rem;
  padding-left: 2.6rem;
`;
export default AdditionalForm;
