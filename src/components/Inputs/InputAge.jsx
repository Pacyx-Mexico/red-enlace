import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ErrorInput from "./ErrorInput";

export default function InputText({
  onChange,
  name,
  placeholder,
  autoValidation,
  value,
  init,
  changeInit,
  max,
  min,
}) {
  const [error, setError] = useState({
    errorFX: false,
    errorNull: false,
    errorTest: false,
  });
  const [textAge, setTextAge] = useState("");
  const [wAge, setWAge] = useState(undefined);

  const validationAge = () => {
    if (value !== "") {
      if (value >= min && value <= max) {
        setError({
          ...error,
          errorFX: false,
          errorTest: false,
          errorNull: false,
        });
      } else {
        setError({
          ...error,
          errorFX: true,
          errorTest: true,
          errorNull: false,
        });
      }
    } else {
      setError({
        ...error,
        errorFX: true,
        errorTest: false,
        errorNull: true,
      });
    }
  };

  const age = value;
  const ageNumber = parseInt(age);

  const validationTextAge = () => {
    if (ageNumber === 1) {
      setTextAge("año");
      if (ageNumber >= 1 && ageNumber <= 9) {
        setWAge("2rem")
      }
    } else {
      setTextAge("años");
      if (ageNumber >= 1 && ageNumber <= 9) {
        setWAge("2rem")
      } else if (ageNumber >= 10 && ageNumber <= 99) {
        setWAge("3.4rem")
      } else {
        setWAge("4.4rem")
      }
    }
  };

  useEffect(() => {
    if (autoValidation === true) {
      validationAge();
    }
    validationTextAge();
  }, [value]);

  return (
    <div>
      <ContainerAge init={init} errorFX={error.errorFX}>
        <InputNumber
          onClick={changeInit}
          type="number"
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={validationAge}
          onBlur={validationAge}
          w={wAge}
          errorFX={error.errorFX}
        />
        {value === "" ? (
          ""
        ) : (
          <AgeLabel htmlFor={name} errorFX={error.errorFX}>
            {textAge}
          </AgeLabel>
        )}
      </ContainerAge>
      <ErrorInput
        init={init}
        errorFX={error.errorFX}
        errorNull={error.errorNull}
        errorTest={error.errorTest}
        textNull="Ingresa la edad"
        textError={`Debe ser mayor a ${min} y menor a ${max} años`}
      />
    </div>
  );
}

const ContainerAge = styled.div`
  width: 100%;
  height: var(--inputHeight-size);
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  background-color: var(--bgInput-color);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};
  ${({ init }) => (init ? "border: 2px solid var(--bgInput-color);" : "")}
  transition: all ease 0.3s;
`;

const InputNumber = styled.input`
  width: ${({ w }) => (w !== "" ? w : "100%")};
  background-color: transparent;
  outline: none;
  border: none;
  font-size: var(--inputText-size);
  ${({ errorFX }) => (errorFX ? "width: 100%;" : "")};
`;

const AgeLabel = styled.label`
  width: 100%;
  cursor: text;
  font-size: 2.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  ${({ errorFX }) => (errorFX ? "display: none;" : "")};
`;
