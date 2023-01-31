import styled from "styled-components";

function InputTextarea({
  onChange,
  validation,
  placeholder,
  name,
  value,
  errorFX,
  height,
}) {
  return (
    <Textarea
      height={height}
      type="textarea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyUp={validation}
      onBlur={validation}
      errorFX={errorFX}
    ></Textarea>
  );
}

const Textarea = styled.textarea`
  width: 100%;
  height: ${(props) => props.height};
  background-color: var(--bgInput-color);
  border-radius: 0.8rem;
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};
  resize: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  padding: 1rem 1.6rem;
  font-size: var(--inputText-size);
`;

export default InputTextarea;
