import styled from "styled-components";

function InputRadio2({ id, name, value, onChange, check, text }) {
  return (
    <InputR2>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <InputR2Label on={check} htmlFor={id}>
        {text}
      </InputR2Label>
    </InputR2>
  );
}

const InputR2 = styled.div`
  input {
    display: none;
  }
`;
const InputR2Label = styled.label`
  cursor: pointer;
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ on }) =>
    on === "true" ? "var(--bgInput-color)" : "transparent"};
  border: 2px solid
    ${({ on }) =>
      on === "true" ? "var(--primary-color3)" : "var(--off-color)"};
  font-size: 2rem;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--bgInput-color);
    transition: all ease 0.3s;

    ${({ on }) =>
      on === "true"
        ? ""
        : "box-shadow: 2px 2px 3px var(--shadow-color); font-size: 2.06rem;"};
  }
`;

export default InputRadio2;
