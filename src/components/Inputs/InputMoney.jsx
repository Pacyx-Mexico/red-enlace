import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cleave from "cleave.js/react";
import ErrorInput from "./ErrorInput";

function InputMoney({
  data,
  init,
  changeInit,
  autoValidation,
  min,
  max,
  name,
  onChange,
  value,
  textTest,
  textNull,
  label,
  hideSymbol,
}) {
  const [error, setError] = useState({
    errorFX: false,
    errorNull: false,
    errorTest: false,
  });

  const validationMoney = () => {
    const moneyValue = value;
    const money = moneyValue.replace(/,/g, "");

    if (value === "") {
      setError({
        ...error,
        errorFX: true,
        errorNull: true,
        errorTest: false,
      });
    } else {
      if (money >= min && money <= max) {
        setError({
          ...error,
          errorFX: false,
          errorNull: false,
          errorTest: false,
        });
      } else {
        setError({
          ...error,
          errorFX: true,
          errorNull: false,
          errorTest: true,
        });
      }
    }
  };

  useEffect(() => {
    if (autoValidation === true) {
      validationMoney();
    }
  }, [data]);

  return (
    <div>
      <MoneyContainer init={init} errorFX={error.errorFX}>
        <label>{label}</label>
        <InputMoney2 onClick={changeInit}>
          {hideSymbol ? "" : <span>$</span>}
          <Cleave
            options={{
              numeral: true,
              numeralThousandsGroupStyle: "thousand",
            }}
            placeholder="0.00"
            name={name}
            onChange={onChange}
            value={value}
            onKeyUp={validationMoney}
            onBlur={validationMoney}
          />
        </InputMoney2>
      </MoneyContainer>
      <ErrorInput
        init={init}
        errorFX={error.errorFX}
        errorNull={error.errorNull}
        errorTest={error.errorTest}
        textNull={textNull}
        textError={textTest}
      />
    </div>
  );
}

const MoneyContainer = styled.div`
  width: 100%;
  height: var(--inputHeight-size);
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--bgInput-color);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--bgInput-color)"};
  ${({ init }) => (init ? "border: 2px solid var(--bgInput-color);" : "")};
  transition: all ease 0.3s;

  label {
    font-size: 2rem;
  }
`;

const InputMoney2 = styled.div`
  padding-top: 0.5rem;
  width: 16rem;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  padding-left: 1.6rem;
  margin-bottom: 0.8rem;
  background-color: transparent;

  span {
    font-size: 2.5rem;
    margin-right: 0.6rem;
    font-weight: 400;
    color: var(--text-color);
  }

  input {
    width: 12rem;
    height: 100%;
    display: flex;
    padding-right: 1rem;
    padding-top: 0.4rem;
    font-size: 2.3rem;
    border-radius: 0.6rem;
    outline: none;
    background-color: transparent;
    border: none;
  }
`;

export default InputMoney;
