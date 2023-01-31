import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ErrorInput from "./ErrorInput";

export default function InputText({
  onChange,
  type,
  name,
  placeholder,
  regEx,
  autoValidation,
  validation,
  value,
  errorFX,
  errorTest,
  errorNull,
  textError,
  textNull,
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

  const validationText = () => {
    if (!/^\S/.test(value)) {
      setError({
        ...error,
        errorTest: false,
        errorFX: true,
        errorNull: true,
      });
    } else {
      setError({
        ...error,
        errorNull: false,
        errorFX: false,
        errorTest: false,
      });
      if (regEx !== undefined) {
        if (!regEx.test(value)) {
          setError({
            ...error,
            errorNull: false,
            errorFX: true,
            errorTest: true,
          });
        } else {
          setError({
            ...error,
            errorNull: false,
            errorFX: false,
            errorTest: false,
          });
        }
      }
    }
  };

  const validationNumber = () => {
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

  useEffect(() => {
    if (autoValidation === true) {
      if (type === "number") {
        if (min !== undefined) {
          validationNumber();
        } else {
          validationText();
        }
      } else {
        validationText();
      }
    }
  }, [value]);

  return (
    <>
      {autoValidation ? (
        <div>
          {type === "number" ? (
            <Input
              onClick={changeInit}
              init={init}
              type="number"
              name={name}
              id={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              errorFX={error.errorFX}
            />
          ) : (
            <>
              {type === "tel" ? (
                <Input
                  onClick={changeInit}
                  init={init}
                  type="number"
                  name={name}
                  id={name}
                  value={value}
                  placeholder={placeholder}
                  onChange={onChange}
                  errorFX={error.errorFX}
                />
              ) : (
                <Input
                  onClick={changeInit}
                  init={init}
                  type={type}
                  name={name}
                  id={name}
                  value={value}
                  placeholder={placeholder}
                  onChange={onChange}
                  errorFX={error.errorFX}
                />
              )}
            </>
          )}
          <ErrorInput
            init={init}
            errorFX={error.errorFX}
            errorNull={error.errorNull}
            errorTest={error.errorTest}
            textError={textError}
            textNull={textNull}
          />
        </div>
      ) : (
        <div>
          <Input
            type={type}
            name={name}
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            errorFX={errorFX}
            onKeyUp={validation}
            onBlur={validation}
          />
          <ErrorInput
            errorFX={errorFX}
            errorNull={errorNull}
            errorTest={errorTest}
            textError={textError}
            textNull={textNull}
          />
        </div>
      )}
    </>
  );
}

const Input = styled.input`
  width: 100%;
  height: var(--inputHeight-size);
  font-size: var(--inputText-size);
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  outline: none;
  background-color: var(--bgInput-color);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};
  ${({ init }) => (init ? "border: 2px solid var(--bgInput-color);" : "")}
  transition: all ease 0.3s;
`;
