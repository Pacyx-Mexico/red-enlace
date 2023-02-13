import { useState, useEffect } from "react";
import styled from "styled-components";
import ErrorInput from "./ErrorInput";

export default function InputSelect({
  autoValidation,
  onChange,
  name,
  value,
  options,
  placeholder,
  validation,
  textNull,
  init,
  changeInit,
}) {
  const [defaultOption, setDefaultOption] = useState(true);

  const [error, setError] = useState({
    errorFX: false,
    errorNull: false,
    errorTest: false,
  });

  useEffect(() => {
    if (value === "") {
      setDefaultOption(true);
    } else {
      setDefaultOption(false);
    }
  }, [value]);

  const validationSelect = () => {
    if (value !== "") {
      setError({
        ...error,
        errorFX: false,
        errorNull: false,
      });
    } else {
      setError({
        ...error,
        errorFX: true,
        errorNull: true,
      });
    }
  };

  useEffect(() => {
    if (autoValidation === true) {
      validationSelect();
    } else {
      validation();
    }
  }, [defaultOption]);

  return (
    <div>
      <SelectContainer onClick={changeInit} init={init} errorFX={error.errorFX}>
        {autoValidation ? (
          <Select
            defaultColor={defaultOption}
            name={name}
            value={value}
            onChange={onChange}
            onKeyUp={validationSelect}
            onBlur={validationSelect}
          >
            <OptionDefault value="">{placeholder}</OptionDefault>
            {options.map((op, index) => (
              <Option value={op.value} key={index}>
                {op.text}
              </Option>
            ))}
          </Select>
        ) : (
          <Select
            defaultColor={defaultOption}
            name={name}
            value={value}
            onChange={onChange}
            onKeyUp={validation}
            onBlur={validation}
          >
            <OptionDefault value="">{placeholder}</OptionDefault>
            {options.map((op) => (
              <Option value={op.value} key={op.id}>
                {op.text}
              </Option>
            ))}
          </Select>
        )}
      </SelectContainer>
      <ErrorInput
        init={init}
        errorFX={error.errorFX}
        errorNull={error.errorNull}
        textNull={textNull}
      />
    </div>
  );
}

const SelectContainer = styled.div`
  width: 100%;
  height: var(--inputHeight-size);
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  background-color: var(--bgInput-color);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};
  ${({ init }) => (init ? "border: 2px solid var(--bgInput-color)" : "")};
  transition: all ease 0.3s;
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: 0px;
  font-size: var(--inputText-size);
  color: ${({ defaultColor }) => (defaultColor ? "gray" : "var(--text-color)")};
`;

const OptionDefault = styled.option`
  color: gray;
`;

const Option = styled.option`
  color: var(--text-color);
`;
