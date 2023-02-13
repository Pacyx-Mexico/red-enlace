import styled from "styled-components";
import { useState, useEffect } from "react";

function AccordionCoverage({
  handleChangeCheck,
  value,
  name,
  title,
  subtitle,
  on,
  children,
}) {
  const [onBtn, setOnBtn] = useState("false");
  const [onAcc, setOnAcc] = useState("false");

  const valOnBtn = () => {
    if (value === true) {
      setOnBtn("true");
    } else {
      setOnBtn("false");
    }
  }

  const valOnAcc = () => {
    if (on === true) {
      setOnAcc("true");
    } else {
      setOnAcc("false");
    }
  }

  useEffect(() => {
    valOnBtn();
    valOnAcc();
  }, [value]);

  return (
    <Coverage>
      <AccCoverage on={onAcc}>
        <h6>
          {title} <span>{subtitle}</span>
        </h6>
        {value === true && <>{children}</>}
      </AccCoverage>
      <BtnCoverage on={onBtn}>
        <input
          id={name}
          name={name}
          type="checkbox"
          onChange={handleChangeCheck}
          value={value}
          checked={value === true}
        />
        <label htmlFor={name}>
          {value === true ? "Eliminar" : "Contratar"}
        </label>
      </BtnCoverage>
    </Coverage>
  );
}

const Coverage = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 84% 14%;
  justify-content: space-between;
  padding-bottom: 1.4rem;
  padding-right: 1rem;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 70% 20%;
    padding-right: 2rem;
    justify-items: center;
  }
`;
const AccCoverage = styled.div`
  width: 100%;

  h6 {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 1rem 2rem;
    min-height: 5.8rem;
    border-radius: 0.8rem;
    background-color: var(--bgInput-color);
    border: 2px solid
      ${({ on }) =>
        on === "true" ? "var(--primary-color3)" : "var(--bgInput-color)"};
    font-size: 2.1rem;
    text-align: start;
  }
  span {
    font-weight: 500;
    font-size: 2rem;
    margin-left: 0.6rem;
  }

  @media screen and (max-width: 600px) {
    h6 {
      flex-direction: column;
      align-items: flex-start;
    }
    span {
      font-size: 1.8rem;
      margin-left: 0;
      margin-top: 0.4rem;
    }
  }
`;
const BtnCoverage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;

  input {
    display: none;
  }
  label {
    display: flex;
    height: 5.8rem;
    user-select: none;
    width: 18rem;
    justify-content: center;
    align-items: center;
    border-radius: 6rem;
    font-size: 2.1rem;
    font-weight: 500;
    color: #fff;
    overflow: hidden;
    box-shadow: 2px 2px 3px var(--shadow-color);
    background-color: ${({ on }) =>
      on === "true" ? "var(--primary-color2)" : "var(--off-color2)"};
    transition: all ease 0.3s;

    &:hover {
      background-color: var(--secondary-color2);
      transition: all ease 0.3s;
    }

    @media screen and (max-width: 600px) {
      font-size: 2rem;
      width: 16rem;
    }
  }
`;

export default AccordionCoverage;
