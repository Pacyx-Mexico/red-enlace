import { useState, useEffect } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import DeducibleGM from "./Inputs/DeducibleGM";
import AlertForm from "../AlertForm";
import "../../../styles/forms/Gm/Step4GM.css";

function Step4GM({
  data,
  activeStep,
  handleChange,
  handleChangeCheck,
  prevStep,
  sendStep4,
  costAdd0,
  costAdd1,
  costAdd2,
  costAdd3,
  costAdd4,
  costAdd5,
}) {
  const [init, setInit] = useState({
    add0_i: true,
    add1_i: true,
    add2_i: true,
    add3_i: true,
    add4_i: true,
    add5_i: true,
  });
  const [alert, setAlert] = useState(false);
  const [infoAlert, setinfoAlert] = useState("");
  const [offStep, setOffStep] = useState("false");
  const [onAdd0, setOnAdd0] = useState(true);
  const [onAdd1, setOnAdd1] = useState(false);
  const [onAdd2, setOnAdd2] = useState(false);
  const [onAdd3, setOnAdd3] = useState(false);
  const [onAdd4, setOnAdd4] = useState(false);
  const [onAdd5, setOnAdd5] = useState(false);

  const changeInitAdd0 = () => {
    setInit({
      ...init,
      add0_i: false,
    });
  };
  const changeInitAdd1 = () => {
    setInit({
      ...init,
      add1_i: false,
    });
  };
  const changeInitAdd2 = () => {
    setInit({
      ...init,
      add2_i: false,
    });
  };
  const changeInitAdd3 = () => {
    setInit({
      ...init,
      add3_i: false,
    });
  };
  const changeInitAdd4 = () => {
    setInit({
      ...init,
      add4_i: false,
    });
  };
  const changeInitAdd5 = () => {
    setInit({
      ...init,
      add5_i: false,
    });
  };

  const valAdd1 = () => {
    if (data.add1__Name !== '' && data.deductible__add1 !== "") {
      setOnAdd1(true); 
    } else if (data.add1__Name === "" && data.deductible__add1 === ""){
      setOnAdd1(true);
    } else {
      setOnAdd1(false);
    }
  };

  const validationONStep4 = () => {
    if (data.deductible__add0 !== '' && onAdd1 === true) {
      setOffStep("true");
    } else {
      setOffStep("false");
    }
  };

  const nextStep4 = () => {
    if (offStep === "false") {
      setAlert(true);
      setInit({
        add0_i: false,
        add1_i: false,
        add2_i: false,
        add3_i: false,
        add4_i: false,
        add5_i: false,
      });
      if (
        data.siniestro__add0 === false &&
        data.siniestro__add1 === false &&
        data.siniestro__add2 === false &&
        data.siniestro__add3 === false &&
        data.siniestro__add4 === false &&
        data.siniestro__add5 === false
      ) {
        setinfoAlert(
          "Selecciona al menos un aseguro adicional antes de continuar"
        );
      } else {
        setinfoAlert(
          "Por favor elige el porcentaje de deducible antes de continuar"
        );
      }
    } else {
      sendStep4();
    }
  };

  useEffect(() => {
    valAdd1();
    validationONStep4();
  }, [data]);

  useEffect(() => {
    validationONStep4();
  }, [onAdd0]);
  useEffect(() => {
    validationONStep4();
  }, [onAdd1]);
  useEffect(() => {
    validationONStep4();
  }, [onAdd2]);
  useEffect(() => {
    validationONStep4();
  }, [onAdd3]);
  useEffect(() => {
    validationONStep4();
  }, [onAdd4]);
  useEffect(() => {
    validationONStep4();
  }, [onAdd5]);

  useEffect(() => {
    activeStep();
  }, []);

  return (
    <section id="formStep4">
      <StepIndicatorGM state={data} />

      <InstructionForm instruction="En caso de siniestro, ¿que cantidad de tu deducible te gustaría que te devolvamos?" />

      <DeducibleGM
        data={data}
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
        init={init}
        changeInitAdd0={changeInitAdd0}
        changeInitAdd1={changeInitAdd1}
        changeInitAdd2={changeInitAdd2}
        changeInitAdd3={changeInitAdd3}
        changeInitAdd4={changeInitAdd4}
        changeInitAdd5={changeInitAdd5}
        costAdd0={costAdd0}
        costAdd1={costAdd1}
        costAdd2={costAdd2}
        costAdd3={costAdd3}
        costAdd4={costAdd4}
        costAdd5={costAdd5}
      />
      <NextPrevStep
        icon={true}
        text="Continuar"
        off={offStep}
        prevStep={prevStep}
        nextStep={nextStep4}
      />

      <AlertForm
        showAlert={alert}
        closedAlert={() => {
          setAlert(false);
        }}
        linkId="formStep4"
        text={infoAlert}
      />
    </section>
  );
}

export default Step4GM;
