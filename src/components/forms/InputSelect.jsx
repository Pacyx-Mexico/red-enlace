import { useState, useEffect } from "react";
import styled from "styled-components";

export default function InputSelect({
  onChange,
  name,
  value,
  options,
  placeholder,
  validation,
  errorFX,
  changeInit,
  init,
}) {
  const [defaultOption, setDefaultOption] = useState(true);

  useEffect(() => {
    if (value === "") {
      setDefaultOption(true);
    } else {
      setDefaultOption(false);
    }
  }, [value]);

  useEffect(() => {
    validation();
  }, [defaultOption]);

  return (
    <SelectContainer2 onClick={changeInit} init={init} errorFX={errorFX}>
      <Select2
        defaultColor={defaultOption}
        name={name}
        value={value}
        onChange={onChange}
        onKeyUp={validation}
        onBlur={validation}
      >
        <OptionDefault2 value="">{placeholder}</OptionDefault2>
        {options.map((op) => (
          <Option2 value={op.value} key={op.id}>
            {op.text}
          </Option2>
        ))}
      </Select2>
    </SelectContainer2>
  );
}

const SelectContainer2 = styled.div`
  width: 100%;
  height: var(--inputHeight-size);
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  background-color: var(--primary-color3);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--primary-color3)"};
  ${({ init }) => (init ? "border: 2px solid var(--primary-color3);" : "")};
  transition: all ease 0.3s;
`;

const Select2 = styled.select`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: 0px;
  font-size: var(--inputText-size);
  color: ${({ defaultColor }) => (defaultColor ? "gray" : "var(--text-color)")};
`;

const OptionDefault2 = styled.option`
  color: gray;
`;

const Option2 = styled.option`
  color: var(--text-color);
`;
