import styled from "styled-components";
import InputText from "./InputText";
import ButtonON from "../Buttons/ButtonON";

function InputSearch({ w, mt, mb, on, onChange, send, value, func }) {
  return (
    <InputSearch2 mt={mt} mb={mb} w={w}>
      <InputText
        type="text"
        value={value}
        name="search"
        placeholder="Búsqueda"
        onChange={onChange}
      />
      <ButtonON send={send} on={on} text="Buscar" func={func} />
    </InputSearch2>
  );
}

const InputSearch2 = styled.div`
  display: flex;
  width: ${({ w }) => w};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};

  justify-content: space-between;

  input {
    margin-right: 2rem;
  }
`;

export default InputSearch;
