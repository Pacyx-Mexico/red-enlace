import { useState, useEffect } from "react";
import styled from "styled-components";

function SelectDeductible({ onChange, name, value, init, changeInit, off }) {
  const [defaultOption, setDefaultOption] = useState(true);

  const [errorFX, setErrorFX] = useState(false);

  const valDeafaultOp = () => {
    if (value === "") {
      setDefaultOption(true);
    } else {
      setDefaultOption(false);
    }
  };

  const validationSelect = () => {
    if (value !== "") {
      setErrorFX(false);
    } else {
      setErrorFX(true);
    }
  };

  useEffect(() => {
    valDeafaultOp();
    validationSelect();
  }, [value]);

  return (
    <SelectContainer2
      onClick={changeInit}
      init={init}
      errorFX={errorFX}
    >
      <Select2
        defaultColor={defaultOption}
        name={name}
        value={value}
        onChange={onChange}
        init={init}
        errorFX={errorFX}
      >
        <OptionDefault2 value="">Selecciona el monto</OptionDefault2>
        <Option2 value="100">100%</Option2>
        <Option2 value="80">80%</Option2>
        <Option2 value="50">50%</Option2>
        <Option2 value="30">30%</Option2>
      </Select2>
    </SelectContainer2>
  );
}

const SelectContainer2 = styled.div`
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.8rem;
  background-color: var(--bgInput-color);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};
  ${({ init }) => (init ? "border: 2px solid var(--bgInput-color)" : "")};

  transition: all ease 0.3s;
`;

const Select2 = styled.select`
  width: 100%;
  background: none;
  border: none;
  outline: 0px;
  font-size: 2rem;

  color: ${({ defaultColor }) => (defaultColor ? "gray" : "var(--text-color)")};
  ${({ errorFX }) => (errorFX ? " color: var(--errorInput-color);" : "")}
  ${({ init }) => (init ? "color: gray;" : "")}
  transition: all ease 0.3s;
`;

const OptionDefault2 = styled.option`
  color: gray;
`;

const Option2 = styled.option`
  color: var(--text-color);
`;

export default SelectDeductible;
