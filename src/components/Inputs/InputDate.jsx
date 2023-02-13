import { useEffect, useState } from "react";
import styled from "styled-components";
import ErrorInput from "./ErrorInput";

function InputDate({
  label,
  name,
  onChange,
  autoValidation,
  value,
  textNull,
  init,
  changeInit,
  max,
  min,
}) {
  const [error, setError] = useState({
    errorNull: false,
    errorFX: false,
  });

  const validationDate = () => {
    if (value !== "") {
      setError({
        ...error,
        errorNull: false,
        errorFX: false,
      });
    } else {
      setError({
        ...error,
        errorNull: true,
        errorFX: true,
      });
    }
  };
  useEffect(() => {
    if (autoValidation === true) {
      validationDate();
    }
  }, [value]);

  return (
    <div>
      <DateInput
        init={init}
        onClick={changeInit}
        errorFX={error.errorFX}
      >
        <label htmlFor={name}>{label}</label>
        <input
          type="date"
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          max={max}
          min={min}
        />
      </DateInput>
      <ErrorInput
        init={init}
        errorFX={error.errorFX}
        errorNull={error.errorNull}
        textNull={textNull}
      />
    </div>
  );
}

const DateInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--inputHeight-size);
  overflow: hidden;
  width: 100%;
  padding-left: 2rem;
  border-radius: 0.8rem;
  background-color: var(--bgInput-color);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};

  ${({ init }) => (init ? "border: 2px solid var(--bgInput-color)" : "")};
  transition: all ease 0.3s;

  label {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${({ errorFX }) => (errorFX ? "#676767" : "var(--text-color)")};
  }

  input {
    font-size: 2rem;
    width: 20rem;
    height: var(--inputHeight-size);
    font-family: "Poppins", sans-serif;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
    outline: none;
    background-color: transparent;

  }
`;

export default InputDate;
