import { useEffect, useState } from "react";
import NextPrevStep from "../../Buttons/NextPrevStep";
import StepIndicatorAutos from "./StepIndicatorAutos";
import InstructionForm from "../InstructionForm";
import CoverageCars from "./Inputs/CoverageCars/CoverageCars";
import AlertForm from "../../forms/AlertForm";

const Step4Autos = ({
  data,
  activeStep,
  prevStep,
  handleChangeCheck,
  handleChange,
  sendStep4,
}) => {
  const [onBtn, setonBtn] = useState("true");
  const [alert, setAlert] = useState(false);
  const [initInputB, setInitInputB] = useState(true);
  const [errorCovB, setErrorCovB] = useState(false);

  const validationONBtn = () => {
    if (
      data.coverageA === false &&
      data.coverageB === false &&
      data.coverageC === false
    ) {
      setonBtn("true");
    } else if (data.coverageB === true) {
      if (data.reimburseCoverageB !== "") {
        setonBtn("true");
      } else {
        setonBtn("false");
      }
    } else {
      setonBtn("true");
    }
  };

  const validationCoverageB = () => {
    if (initInputB === false) {
      if (data.reimburseCoverageB !== "") {
        setErrorCovB(false);
      } else {
        setErrorCovB(true);
      }
    } else {
      setErrorCovB(false);
    }
  };

  const next = () => {
    if (onBtn === "true") {
      sendStep4();
    } else {
      setAlert(true);
      setInitInputB(false);
      setErrorCovB(true);
    }
  };

  const closedAlertStep4 = () => {
    setAlert(false);
  };

  useEffect(() => {
    activeStep();
  }, []);

  useEffect(() => {
    validationONBtn();
  }, [data]);

  useEffect(() => {
    validationCoverageB();
  }, [data.reimburseCoverageB]);

  return (
    <>
      <StepIndicatorAutos state={data} />
      <InstructionForm
        instruction="Agregar y/o eliminar coberturas deseadas.
          En caso de no querer coberturas, da click en continuar"
      />
      <CoverageCars
        data={data}
        handleChangeCheck={handleChangeCheck}
        handleChange={handleChange}
        errorCovB={errorCovB}
      />
      <NextPrevStep
        icon={true}
        on={onBtn}
        text="Siguiente"
        nextStep={next}
        prevStep={prevStep}
      />
      <AlertForm
        text="Elige la suma asegurada, en caso de pérdida total, por daños materiales o robo"
        showAlert={alert}
        closedAlert={closedAlertStep4}
        linkId="coverageCars"
      />
    </>
  );
};

export default Step4Autos;
