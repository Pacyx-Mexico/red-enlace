import React, { useState, useEffect } from "react";
import NextPrevStep from "../../forms/NextPrevStep";
import AccordionsAditionals from "./Inputs/AdicionalesGM/AccordionsAditionals";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import AlertForm from "../../Inputs/AlertForm";
import { nameRegEx } from "../../../utils/regEx";

const Step2GM = ({
  activeStep,
  data,
  handleChange,
  sendStep2,
  prevStep,
  clearAdd1,
  clearAdd2,
  clearAdd3,
  clearAdd4,
  clearAdd5,
}) => {
  const [stateAccordions, setStateAccordions] = useState({
    add1Accordion: false,
    add2Accordion: false,
    add3Accordion: false,
    add4Accordion: false,
    add5Accordion: false,
  });

  const [alert, setAlert] = useState(false);
  const [infoAlert, setInfoAlert] = useState("");
  const [linkAlert, setLinkAlert] = useState("");

  const [add1ON, setAdd1ON] = useState("false");
  const [add2ON, setAdd2ON] = useState("false");
  const [add3ON, setAdd3ON] = useState("false");
  const [add4ON, setAdd4ON] = useState("false");
  const [add5ON, setAdd5ON] = useState("false");

  const [add1, setAdd1] = useState("true");
  const [add2, setAdd2] = useState("true");
  const [add3, setAdd3] = useState("true");
  const [add4, setAdd4] = useState("true");
  const [add5, setAdd5] = useState("true");

  const [btnStep2ON, setBtnStep2ON] = useState("true");

  /*__________________________
  
         ACCORDION 
  ____________________________*/
  const openAdd1 = () => {
    setStateAccordions({
      ...stateAccordions,
      add1Accordion: true,
    });
  };
  const openAdd2 = () => {
    setStateAccordions({
      ...stateAccordions,
      add2Accordion: true,
    });
  };
  const openAdd3 = () => {
    setStateAccordions({
      ...stateAccordions,
      add3Accordion: true,
    });
  };
  const openAdd4 = () => {
    setStateAccordions({
      ...stateAccordions,
      add4Accordion: true,
    });
  };
  const openAdd5 = () => {
    setStateAccordions({
      ...stateAccordions,
      add5Accordion: true,
    });
  };

  const closeAdd1 = () => {
    setStateAccordions({
      ...stateAccordions,
      add1Accordion: false,
    });
  };
  const closeAdd2 = () => {
    setStateAccordions({
      ...stateAccordions,
      add2Accordion: false,
    });
  };
  const closeAdd3 = () => {
    setStateAccordions({
      ...stateAccordions,
      add3Accordion: false,
    });
  };
  const closeAdd4 = () => {
    setStateAccordions({
      ...stateAccordions,
      add4Accordion: false,
    });
  };
  const closeAdd5 = () => {
    setStateAccordions({
      ...stateAccordions,
      add5Accordion: false,
    });
  };

  /*__________________________
  
         DELETE ADD 
  ____________________________*/
  const deleteAdd1 = () => {
    closeAdd1();
    clearAdd1();
  };
  const deleteAdd2 = () => {
    closeAdd2();
    clearAdd2();
  };
  const deleteAdd3 = () => {
    closeAdd3();
    clearAdd3();
  };
  const deleteAdd4 = () => {
    closeAdd4();
    clearAdd4();
  };
  const deleteAdd5 = () => {
    closeAdd5();
    clearAdd5();
  };

  /*__________________________
  
       ON 
  ____________________________*/
  const onAdd1 = () => {
    if (
      data.add1__Genere !== "" &&
      data.add1__AgeDate !== "" &&
      data.add1__Age >= 1 &&
      data.add1__Age <= 100 &&
      data.deductibleAdd1 !== "" &&
      nameRegEx.test(data.add1__Name) &&
      nameRegEx.test(data.add1__LastNameP) &&
      nameRegEx.test(data.add1__LastNameM)
    ) {
      setAdd1ON("true");
    } else {
      setAdd1ON("false");
    }
  };
  const onAdd2 = () => {
    if (
      data.add2__Genere !== "" &&
      data.add2__Age >= 1 &&
      data.add2__Age <= 100 &&
      data.deductibleAdd2 !== "" &&
      nameRegEx.test(data.add2__Name) &&
      nameRegEx.test(data.add2__LastNameP) &&
      nameRegEx.test(data.add2__LastNameM)
    ) {
      setAdd2ON("true");
    } else {
      setAdd2ON("false");
    }
  };
  const onAdd3 = () => {
    if (
      data.add3__Genere !== "" &&
      data.add3__Age >= 1 &&
      data.add3__Age <= 100 &&
      data.deductibleAdd3 !== "" &&
      nameRegEx.test(data.add3__Name) &&
      nameRegEx.test(data.add3__LastNameP) &&
      nameRegEx.test(data.add3__LastNameM)
    ) {
      setAdd3ON("true");
    } else {
      setAdd3ON("false");
    }
  };
  const onAdd4 = () => {
    if (
      data.add4__Genere !== "" &&
      data.add4__Age >= 1 &&
      data.add4__Age <= 100 &&
      data.deductibleAdd4 !== "" &&
      nameRegEx.test(data.add4__Name) &&
      nameRegEx.test(data.add4__LastNameP) &&
      nameRegEx.test(data.add4__LastNameM)
    ) {
      setAdd4ON("true");
    } else {
      setAdd4ON("false");
    }
  };
  const onAdd5 = () => {
    if (
      data.add5__Genere !== "" &&
      data.add5__Age >= 1 &&
      data.add5__Age <= 100 &&
      data.deductibleAdd5 !== "" &&
      nameRegEx.test(data.add5__Name) &&
      nameRegEx.test(data.add5__LastNameP) &&
      nameRegEx.test(data.add5__LastNameM)
    ) {
      setAdd5ON("true");
    } else {
      setAdd5ON("false");
    }
  };
  const valAdd1 = () => {
    if (data.add1__Name === "" && add1ON === "false") {
      setAdd1("true");
    } else {
      if (add1ON === "true") {
        setAdd1("true");
      } else {
        setAdd1("false");
      }
    }
  };
  const valAdd2 = () => {
    if (data.add2__Name === "" && add2ON === "false") {
      setAdd2("true");
    } else {
      if (add2ON === "true") {
        setAdd2("true");
      } else {
        setAdd2("false");
      }
    }
  };
  const valAdd3 = () => {
    if (data.add3__Name === "" && add3ON === "false") {
      setAdd3("true");
    } else {
      if (add3ON === "true") {
        setAdd3("true");
      } else {
        setAdd3("false");
      }
    }
  };
  const valAdd4 = () => {
    if (data.add4__Name === "" && add4ON === "false") {
      setAdd4("true");
    } else {
      if (add4ON === "true") {
        setAdd4("true");
      } else {
        setAdd4("false");
      }
    }
  };
  const valAdd5 = () => {
    if (data.add5__Name === "" && add5ON === "false") {
      setAdd5("true");
    } else {
      if (add5ON === "true") {
        setAdd5("true");
      } else {
        setAdd5("false");
      }
    }
  };

  const onStep2 = () => {
    if (
      add1 === "true" &&
      add2 === "true" &&
      add3 === "true" &&
      add4 === "true" &&
      add5 === "true"
    ) {
      if (
        stateAccordions.add1Accordion === false &&
        stateAccordions.add2Accordion === false &&
        stateAccordions.add3Accordion === false &&
        stateAccordions.add4Accordion === false &&
        stateAccordions.add5Accordion === false
      ) {
        setBtnStep2ON("true");
      } else {
        setBtnStep2ON("false");
      }
    } else {
      setBtnStep2ON("false");
    }
  };

  useEffect(() => {
    activeStep();
  }, []);
  useEffect(() => {
    onAdd1();
    onAdd2();
    onAdd3();
    onAdd4();
    onAdd5();
    valAdd1();
    valAdd2();
    valAdd3();
    valAdd4();
    valAdd5();
    onStep2();
  }, [data]);
  useEffect(() => {
    onStep2();
  }, [stateAccordions.contractingAccordion]);
  useEffect(() => {
    onStep2();
  }, [stateAccordions.holderAccordion]);
  useEffect(() => {
    valAdd1();
    onStep2();
  }, [stateAccordions.add1Accordion]);
  useEffect(() => {
    valAdd2();
    onStep2();
  }, [stateAccordions.add2Accordion]);
  useEffect(() => {
    valAdd3();
    onStep2();
  }, [stateAccordions.add3Accordion]);
  useEffect(() => {
    valAdd4();
    onStep2();
  }, [stateAccordions.add4Accordion]);
  useEffect(() => {
    valAdd5();
    onStep2();
  }, [stateAccordions.add5Accordion]);
  useEffect(() => {
    onStep2();
  }, [add1]);
  useEffect(() => {
    onStep2();
  }, [add2]);
  useEffect(() => {
    onStep2();
  }, [add3]);
  useEffect(() => {
    onStep2();
  }, [add4]);
  useEffect(() => {
    onStep2();
  }, [add5]);

  /*__________________________
  
         NEXT STEP
  ____________________________*/
  const nextStep2RC = () => {
    if (btnStep2ON === "true") {
      sendStep2();
    } else {
      if (stateAccordions.add1Accordion === true) {
        setAlert(true);
        setLinkAlert("add1RC");
        setInfoAlert("Elimina o confirma tus asegurado adicional 1");
      } else if (stateAccordions.add2Accordion === true) {
        setAlert(true);
        setLinkAlert("add2RC");
        setInfoAlert("Elimina o confirma tus asegurado adicional 2");
      } else if (stateAccordions.add3Accordion === true) {
        setAlert(true);
        setLinkAlert("add3RC");
        setInfoAlert("Elimina o confirma tus asegurado adicional 3");
      } else if (stateAccordions.add4Accordion === true) {
        setAlert(true);
        setLinkAlert("add4RC");
        setInfoAlert("Elimina o confirma tus asegurado adicional 4");
      } else if (stateAccordions.add5Accordion === true) {
        setAlert(true);
        setLinkAlert("add5RC");
        setInfoAlert("Elimina o confirma tus asegurado adicional 5");
      }
    }
  };
  const closedAlertStep2 = () => {
    setAlert(false);
  };

  return (
    <>
      <StepIndicatorGM state={data} />
      <InstructionForm
        instruction="Agrega a tus asegurados adicionales."
        instruction2="Si no cuentas con asegurados adicionales, da clic en Continuar."
      />
      <AccordionsAditionals
        data={data}
        handleChange={handleChange}
        stateAccordions={stateAccordions}
        add1ON={add1ON}
        add2ON={add2ON}
        add3ON={add3ON}
        add4ON={add4ON}
        add5ON={add5ON}
        openAdd1={openAdd1}
        openAdd2={openAdd2}
        openAdd3={openAdd3}
        openAdd4={openAdd4}
        openAdd5={openAdd5}
        closeAdd1={closeAdd1}
        closeAdd2={closeAdd2}
        closeAdd3={closeAdd3}
        closeAdd4={closeAdd4}
        closeAdd5={closeAdd5}
        deleteAdd1={deleteAdd1}
        deleteAdd2={deleteAdd2}
        deleteAdd3={deleteAdd3}
        deleteAdd4={deleteAdd4}
        deleteAdd5={deleteAdd5}
      />

      <NextPrevStep
        icon={true}
        off={btnStep2ON}
        text="Siguiente"
        nextStep={nextStep2RC}
        prevStep={prevStep}
      />

      <AlertForm
        text={infoAlert}
        showAlert={alert}
        closedAlert={closedAlertStep2}
        linkId={linkAlert}
      />
    </>
  );
};

export default Step2GM;
