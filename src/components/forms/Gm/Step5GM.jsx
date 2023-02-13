import React, { useState, useEffect } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import CoberturasGM from "./Inputs/CoberturasGM";
import "../../../styles/forms/Gm/Step5GM.css";
import AlertForm from "../../Inputs/AlertForm";

const Step5GM = ({
  prevStep,
  state,
  activeStep,
  sendStep5,
  handleChange,
  handleChangeCheck,
}) => {
  const [btnStep5ON, setBtnStep5ON] = useState("true");
  const [alert, setAlert] = useState(false);
  const [infoAlert, setInfoAlert] = useState("");
  const [initInputA, setInitInputA] = useState({
    add0_i: true,
    add1_i: true,
    add2_i: true,
    add3_i: true,
    add4_i: true,
    add5_i: true,
  });
  const [initInputB, setInitInputB] = useState(true);
  const [initPolicyTab, setInitPolicyTab] = useState(true);
  const [errorCovB, setErrorCovB] = useState(false);
  const [ONadd0, setONadd0] = useState(true);
  const [ONadd1, setONadd1] = useState(true);
  const [ONadd2, setONadd2] = useState(true);
  const [ONadd3, setONadd3] = useState(true);
  const [ONadd4, setONadd4] = useState(true);
  const [ONadd5, setONadd5] = useState(true);

  /*__________________________
  
    CHANGE INIT
  ____________________________*/
  const changeInitAdd0 = () => {
    setInitInputA({
      ...initInputA,
      add0_i: false,
    });
  };
  const changeInitAdd1 = () => {
    setInitInputA({
      ...initInputA,
      add1_i: false,
    });
  };
  const changeInitAdd2 = () => {
    setInitInputA({
      ...initInputA,
      add2_i: false,
    });
  };
  const changeInitAdd3 = () => {
    setInitInputA({
      ...initInputA,
      add3_i: false,
    });
  };
  const changeInitAdd4 = () => {
    setInitInputA({
      ...initInputA,
      add4_i: false,
    });
  };
  const changeInitAdd5 = () => {
    setInitInputA({
      ...initInputA,
      add5_i: false,
    });
  };
  const changeInitTab = () => {
    setInitPolicyTab(false);
  };

  /*__________________________
  
    VALIDATION COVERAGE B
  ____________________________*/
  const valCoverageB = () => {
    if (initInputB === false) {
      if (state.percentage__coverageB !== "") {
        setErrorCovB(false);
      } else {
        setErrorCovB(true);
      }
    } else {
      setErrorCovB(false);
    }
  };
  const setInitErrorCovB = () => {
    if (state.coverageB !== true) {
      setInitInputB(true);
    }
  };

  useEffect(() => {
    valCoverageB();
  }, [state.percentage__coverageB]);
  useEffect(() => {
    valCoverageB();
  }, [initInputB]);

  /*__________________________
  
         STEP 
  ____________________________*/
  const next = () => {
    if (btnStep5ON === "true") {
      sendStep5();
    } else {
      if (state.coverageA === false && state.coverageB === true) {
        setAlert(true);
        setInitInputB(false);
        setInitPolicyTab(false);
      } else if (state.coverageA === true && state.coverageB === false) {
        if (
          state.addCoverageA__add0 === false &&
          state.addCoverageA__add1 === false &&
          state.addCoverageA__add2 === false &&
          state.addCoverageA__add3 === false &&
          state.addCoverageA__add4 === false &&
          state.addCoverageA__add5 === false
        ) {
          setInfoAlert(
            "Agrega asegurados a la cobertura de indemnización diaria por hospitalización"
          );
          setAlert(true);
        } else {
          setAlert(true);
          setInitInputA({
            add0_i: false,
            add1_i: false,
            add2_i: false,
            add3_i: false,
            add4_i: false,
            add5_i: false,
          });
        }
      } else if (state.coverageA === true && state.coverageB === true) {
        if (
          state.addCoverageA__add0 === false &&
          state.addCoverageA__add1 === false &&
          state.addCoverageA__add2 === false &&
          state.addCoverageA__add3 === false &&
          state.addCoverageA__add4 === false &&
          state.addCoverageA__add5 === false
        ) {
          setInfoAlert(
            "Agrega asegurados a la cobertura de indemnización diaria por hospitalización"
          );
          setAlert(true);
        } else {
          setAlert(true);
          setInitInputB(false);
          setInitPolicyTab(false);
          setInitInputA({
            add0_i: false,
            add1_i: false,
            add2_i: false,
            add3_i: false,
            add4_i: false,
            add5_i: false,
          });
        }
      }
    }
  };

  const closedAlertS5 = () => {
    setAlert(false);
  };

  useEffect(() => {
    activeStep();
  }, [state.step]);

  /*__________________________
  
         ON 
  ____________________________*/
  const valAdd0 = () => {
    if (state.addCoverageA__add0 === true) {
      if (state.nombre === "" && state.reimburseCoverageA__add0 === "") {
        setONadd0(true);
      } else if (state.nombre !== "" && state.reimburseCoverageA__add0 !== "") {
        setONadd0(true);
      } else {
        setONadd0(false);
      }
    } else {
      setONadd0(true);
    }
  };
  const valAdd1 = () => {
    if (state.addCoverageA__add1 === true) {
      if (state.add1__Name === "" && state.reimburseCoverageA__add1 === "") {
        setONadd1(true);
      } else if (
        state.add1__Name !== "" &&
        state.reimburseCoverageA__add1 !== ""
      ) {
        setONadd1(true);
      } else {
        setONadd1(false);
      }
    } else {
      setONadd1(true);
    }
  };
  const valAdd2 = () => {
    if (state.addCoverageA__add2 === true) {
      if (state.add2__Name === "" && state.reimburseCoverageA__add2 === "") {
        setONadd2(true);
      } else if (
        state.add2__Name !== "" &&
        state.reimburseCoverageA__add2 !== ""
      ) {
        setONadd2(true);
      } else {
        setONadd2(false);
      }
    } else {
      setONadd2(true);
    }
  };
  const valAdd3 = () => {
    if (state.addCoverageA__add3 === true) {
      if (state.add3__Name === "" && state.reimburseCoverageA__add3 === "") {
        setONadd3(true);
      } else if (
        state.add3__Name !== "" &&
        state.reimburseCoverageA__add3 !== ""
      ) {
        setONadd3(true);
      } else {
        setONadd3(false);
      }
    } else {
      setONadd3(true);
    }
  };
  const valAdd4 = () => {
    if (state.addCoverageA__add4 === true) {
      if (state.add4__Name === "" && state.reimburseCoverageA__add4 === "") {
        setONadd4(true);
      } else if (
        state.add4__Name !== "" &&
        state.reimburseCoverageA__add4 !== ""
      ) {
        setONadd4(true);
      } else {
        setONadd4(false);
      }
    } else {
      setONadd4(true);
    }
  };
  const valAdd5 = () => {
    if (state.addCoverageA__add5 === true) {
      if (state.add5__Name === "" && state.reimburseCoverageA__add5 === "") {
        setONadd5(true);
      } else if (
        state.add5__Name !== "" &&
        state.reimburseCoverageA__add5 !== ""
      ) {
        setONadd5(true);
      } else {
        setONadd5(false);
      }
    } else {
      setONadd5(true);
    }
  };

  const valONBtn = () => {
    if (
      state.coverageA === false &&
      state.coverageB === false &&
      state.coverageC === false
    ) {
      setBtnStep5ON("true");
    } else if (
      state.coverageA === false &&
      state.coverageB === false &&
      state.coverageC === true
    ) {
      setBtnStep5ON("true");
    } else {
      if (state.coverageA === false && state.coverageB === true) {
        if (state.percentage__coverageB !== "" && state.policyTab) {
          setBtnStep5ON("true");
        } else {
          setBtnStep5ON("false");
        }
      } else if (state.coverageA === true && state.coverageB === true) {
        if (
          state.percentage__coverageB !== "" &&
          state.policyTab &&
          ONadd0 === true &&
          ONadd1 === true &&
          ONadd2 === true &&
          ONadd3 === true &&
          ONadd4 === true &&
          ONadd5 === true
        ) {
          if (
            state.addCoverageA__add0 === false &&
            state.addCoverageA__add1 === false &&
            state.addCoverageA__add2 === false &&
            state.addCoverageA__add3 === false &&
            state.addCoverageA__add4 === false &&
            state.addCoverageA__add5 === false
          ) {
            setBtnStep5ON("false");
          } else {
            setBtnStep5ON("true");
          }
        } else {
          setBtnStep5ON("false");
        }
      } else if (state.coverageA === true && state.coverageB === false) {
        if (
          ONadd0 === true &&
          ONadd1 === true &&
          ONadd2 === true &&
          ONadd3 === true &&
          ONadd4 === true &&
          ONadd5 === true
        ) {
          if (
            state.addCoverageA__add0 === false &&
            state.addCoverageA__add1 === false &&
            state.addCoverageA__add2 === false &&
            state.addCoverageA__add3 === false &&
            state.addCoverageA__add4 === false &&
            state.addCoverageA__add5 === false
          ) {
            setBtnStep5ON("false");
          } else {
            setBtnStep5ON("true");
          }
        } else {
          setBtnStep5ON("false");
        }
      }
    }
  };

  useEffect(() => {
    setInitErrorCovB();
    valAdd0();
    valAdd1();
    valAdd2();
    valAdd3();
    valAdd4();
    valAdd5();
    valONBtn();
  }, [state]);

  useEffect(() => {
    valONBtn();
  }, [ONadd0]);
  useEffect(() => {
    valONBtn();
  }, [ONadd1]);
  useEffect(() => {
    valONBtn();
  }, [ONadd2]);
  useEffect(() => {
    valONBtn();
  }, [ONadd3]);
  useEffect(() => {
    valONBtn();
  }, [ONadd4]);
  useEffect(() => {
    valONBtn();
  }, [ONadd5]);

  return (
    <>
      <StepIndicatorGM state={state} />
      <div id="covGM"></div>
      <InstructionForm
        instruction="Personaliza tu protección y la de tus asegurados"
        instruction2="Si no deseas agregar coberturas adicionales, da click en Continuar"
      />

      <CoberturasGM
        data={state}
        activeStep={activeStep}
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
        errorCovB={errorCovB}
        initInputA={initInputA}
        changeInitAdd0={changeInitAdd0}
        changeInitAdd1={changeInitAdd1}
        changeInitAdd2={changeInitAdd2}
        changeInitAdd3={changeInitAdd3}
        changeInitAdd4={changeInitAdd4}
        changeInitAdd5={changeInitAdd5}
        initPolicyTab={initPolicyTab}
        changeInitTab={changeInitTab}
      />

      <NextPrevStep
        icon={true}
        text="Continuar"
        off={btnStep5ON}
        prevStep={prevStep}
        nextStep={next}
      />

      <AlertForm
        text={infoAlert}
        showAlert={alert}
        closedAlert={closedAlertS5}
        linkId="covGM"
      />
    </>
  );
};

export default Step5GM;
