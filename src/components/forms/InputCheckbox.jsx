import styled from "styled-components";

function InputCheckbox({ label, name, onChange, value, validation }) {
  return (
    <CkeckboxInput>
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={onChange}
        validation={validation}
        value={value}
        checked={value === true}
      />
      <label htmlFor={name}>{label}</label>
    </CkeckboxInput>
  );
}

const CkeckboxInput = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

  input {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.8rem;
  }

  label {
    font-size: 2rem;
  }
`;

export default InputCheckbox;
