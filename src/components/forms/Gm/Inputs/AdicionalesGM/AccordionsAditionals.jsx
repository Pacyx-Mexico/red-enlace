import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainAdditional from "./MainAdditional";
import AccAdd from "./AccAdd";

function AccordionsAditionals({
  data,
  handleChange,
  stateAccordions,

  add1ON,
  add2ON,
  add3ON,
  add4ON,
  add5ON,

  openAdd1,
  openAdd2,
  openAdd3,
  openAdd4,
  openAdd5,

  closeAdd1,
  closeAdd2,
  closeAdd3,
  closeAdd4,
  closeAdd5,

  deleteAdd1,
  deleteAdd2,
  deleteAdd3,
  deleteAdd4,
  deleteAdd5,
}) {
  const [textBtnAdd1, setTextBtnAdd1] = useState("Editar");
  const [textBtnAdd2, setTextBtnAdd2] = useState("Editar");
  const [textBtnAdd3, setTextBtnAdd3] = useState("Editar");
  const [textBtnAdd4, setTextBtnAdd4] = useState("Editar");
  const [textBtnAdd5, setTextBtnAdd5] = useState("Editar");

  const [onBtnAdd1, setOnBtnAdd1] = useState("true");
  const [onBtnAdd2, setOnBtnAdd2] = useState("true");
  const [onBtnAdd3, setOnBtnAdd3] = useState("true");
  const [onBtnAdd4, setOnBtnAdd4] = useState("true");
  const [onBtnAdd5, setOnBtnAdd5] = useState("true");

  const valBtnAdd1 = () => {
    if (data.add1__Name === "") {
      setTextBtnAdd1("Agregar");
      setOnBtnAdd1("false");
    } else {
      setTextBtnAdd1("Editar");
      setOnBtnAdd1("true");
    }
  };
  const valBtnAdd2 = () => {
    if (data.add2__Name === "") {
      setTextBtnAdd2("Agregar");
      setOnBtnAdd2("false");
    } else {
      setTextBtnAdd2("Editar");
      setOnBtnAdd2("true");
    }
  };
  const valBtnAdd3 = () => {
    if (data.add3__Name === "") {
      setTextBtnAdd3("Agregar");
      setOnBtnAdd3("false");
    } else {
      setTextBtnAdd3("Editar");
      setOnBtnAdd3("true");
    }
  };
  const valBtnAdd4 = () => {
    if (data.add4__Name === "") {
      setTextBtnAdd4("Agregar");
      setOnBtnAdd4("false");
    } else {
      setTextBtnAdd4("Editar");
      setOnBtnAdd4("true");
    }
  };
  const valBtnAdd5 = () => {
    if (data.add5__Name === "") {
      setTextBtnAdd5("Agregar");
      setOnBtnAdd5("false");
    } else {
      setTextBtnAdd5("Editar");
      setOnBtnAdd5("true");
    }
  };

  useEffect(() => {
    valBtnAdd1();
    valBtnAdd2();
    valBtnAdd3();
    valBtnAdd4();
    valBtnAdd5();
  }, [stateAccordions]);

  return (
    <>
      <SpaceAcc id="add1RC" hg={"4rem"}></SpaceAcc>
      <AccAdd
        stateAcc={stateAccordions.add1Accordion}
        onAcc={add1ON}
        onBtnEdit={onBtnAdd1}
        openEdit={openAdd1}
        text="Asegurado Adicional 1"
        idLink="add1RC"
        btnText={textBtnAdd1}
      >
        <MainAdditional
          data={data}
          add="1"
          idLink="add1RC"
          deleteAdd={deleteAdd1}
          handleChange={handleChange}
          additionalON={add1ON}
          closeAdditional={closeAdd1}
          dataName={data.add1__Name}
          dataLastNameP={data.add1__LastNameP}
          dataLastNameM={data.add1__LastNameM}
          dataGenere={data.add1__Genere}
          dataAge={data.add1__Age}
          dataAgeDate={data.add1__AgeDate}
          dataDeductible={data.deductibleAdd1}
        />
      </AccAdd>

      <SpaceAcc id="add2RC" hg={"5rem"}></SpaceAcc>
      <AccAdd
        stateAcc={stateAccordions.add2Accordion}
        onAcc={add2ON}
        onBtnEdit={onBtnAdd2}
        openEdit={openAdd2}
        text="Asegurado Adicional 2"
        idLink="add2RC"
        btnText={textBtnAdd2}
      >
        <MainAdditional
          data={data}
          add="2"
          idLink="add2RC"
          deleteAdd={deleteAdd2}
          handleChange={handleChange}
          additionalON={add2ON}
          closeAdditional={closeAdd2}
          dataName={data.add2__Name}
          dataLastNameP={data.add2__LastNameP}
          dataLastNameM={data.add2__LastNameM}
          dataGenere={data.add2__Genere}
          dataAge={data.add2__Age}
          dataAgeDate={data.add2__AgeDate}
          dataDeductible={data.deductibleAdd2}
        />
      </AccAdd>

      <SpaceAcc id="add3RC" hg={"5rem"}></SpaceAcc>
      <AccAdd
        stateAcc={stateAccordions.add3Accordion}
        onAcc={add3ON}
        onBtnEdit={onBtnAdd3}
        openEdit={openAdd3}
        text="Asegurado Adicional 3"
        idLink="add3RC"
        btnText={textBtnAdd3}
      >
        <MainAdditional
          data={data}
          add="3"
          idLink="add3RC"
          deleteAdd={deleteAdd3}
          handleChange={handleChange}
          additionalON={add3ON}
          closeAdditional={closeAdd3}
          dataName={data.add3__Name}
          dataLastNameP={data.add3__LastNameP}
          dataLastNameM={data.add3__LastNameM}
          dataGenere={data.add3__Genere}
          dataAge={data.add3__Age}
          dataAgeDate={data.add3__AgeDate}
          dataDeductible={data.deductibleAdd3}
        />
      </AccAdd>

      <SpaceAcc id="add4RC" hg={"5rem"}></SpaceAcc>
      <AccAdd
        stateAcc={stateAccordions.add4Accordion}
        onAcc={add4ON}
        onBtnEdit={onBtnAdd4}
        openEdit={openAdd4}
        text="Asegurado Adicional 4"
        idLink="add4RC"
        btnText={textBtnAdd4}
      >
        <MainAdditional
          data={data}
          add="4"
          idLink="add4RC"
          deleteAdd={deleteAdd4}
          handleChange={handleChange}
          additionalON={add4ON}
          closeAdditional={closeAdd4}
          dataName={data.add4__Name}
          dataLastNameP={data.add4__LastNameP}
          dataLastNameM={data.add4__LastNameM}
          dataGenere={data.add4__Genere}
          dataAge={data.add4__Age}
          dataDeductible={data.deductibleAdd4}
          dataAgeDate={data.add4__AgeDate}
        />
      </AccAdd>

      <SpaceAcc id="add5RC" hg={"5rem"}></SpaceAcc>
      <AccAdd
        stateAcc={stateAccordions.add5Accordion}
        onAcc={add5ON}
        onBtnEdit={onBtnAdd5}
        openEdit={openAdd5}
        text="Asegurado Adicional 5"
        idLink="add5RC"
        btnText={textBtnAdd5}
      >
        <MainAdditional
          data={data}
          add="5"
          idLink="add5RC"
          deleteAdd={deleteAdd5}
          handleChange={handleChange}
          additionalON={add5ON}
          closeAdditional={closeAdd5}
          dataName={data.add5__Name}
          dataLastNameP={data.add5__LastNameP}
          dataLastNameM={data.add5__LastNameM}
          dataGenere={data.add5__Genere}
          dataAge={data.add5__Age}
          dataAgeDate={data.add5__AgeDate}
          dataDeductible={data.deductibleAdd5}
        />
      </AccAdd>
    </>
  );
}

const SpaceAcc = styled.div`
  width: 100%;
  overflow: hidden;
  height: ${({ hg }) => (hg ? hg : "0")};
`;

export default AccordionsAditionals;
