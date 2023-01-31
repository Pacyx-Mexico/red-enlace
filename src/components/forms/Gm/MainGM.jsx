import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import Step1GM from "./Step1GM";
import Step2GM from "./Step2GM";
import Step3GM from "./Step3GM";
import Step4GM from "./Step4GM";
import Step5GM from "./Step5GM";
import Step6GM from "./Step6GM";
import Step7GM from "./Step7GM";
import EndStep from "../EndStep";

class MainGM extends Component {
  state = {
    step: 1,

    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,

    completeStep1: false,
    completeStep2: false,
    completeStep3: false,
    completeStep4: false,
    completeStep5: false,
    completeStep6: false,
    completeStep7: false,

    nombre: "",
    paterno: "",
    materno: "",
    edad: "",
    ageDate: "",
    genero: "",
    rfc: "",
    correo: "",
    tel: "",

    add1__Name: "",
    add1__LastNameP: "",
    add1__LastNameM: "",
    add1__Age: "",
    add1__Genere: "",
    add1__AgeDate: "",

    add2__Name: "",
    add2__LastNameP: "",
    add2__LastNameM: "",
    add2__Age: "",
    add2__Genere: "",
    add2__AgeDate: "",

    add3__Name: "",
    add3__LastNameP: "",
    add3__LastNameM: "",
    add3__Age: "",
    add3__Genere: "",
    add3__AgeDate: "",

    add4__Name: "",
    add4__LastNameP: "",
    add4__LastNameM: "",
    add4__Age: "",
    add4__Genere: "",
    add4__AgeDate: "",

    add5__Name: "",
    add5__LastNameP: "",
    add5__LastNameM: "",
    add5__Age: "",
    add5__Genere: "",
    add5__AgeDate: "",

    polizaPrimaria: "",
    currencyType: "",
    inicioVigencia: "",
    finVigencia: "",

    siniestro__add0: false,
    siniestro__add1: false,
    siniestro__add2: false,
    siniestro__add3: false,
    siniestro__add4: false,
    siniestro__add5: false,
    deductible__add0: "",
    deductible__add1: "",
    deductible__add2: "",
    deductible__add3: "",
    deductible__add4: "",
    deductible__add5: "",
    costDeductible__add0: 0,
    costDeductible__add1: 0,
    costDeductible__add2: 0,
    costDeductible__add3: 0,
    costDeductible__add4: 0,
    costDeductible__add5: 0,

    coverageA: false,
    coverageB: false,
    coverageC: false,

    addCoverageA__add0: true,
    addCoverageA__add1: false,
    addCoverageA__add2: false,
    addCoverageA__add3: false,
    addCoverageA__add4: false,
    addCoverageA__add5: false,
    reimburseCoverageA__add0: "",
    reimburseCoverageA__add1: "",
    reimburseCoverageA__add2: "",
    reimburseCoverageA__add3: "",
    reimburseCoverageA__add4: "",
    reimburseCoverageA__add5: "",

    policyTab: "",
    percentage__coverageB: "",
    costCoverageB: 0,

    costCoverageC: 799,

    factura_si_no: "si",
    fisica_o_moral: "fisica",
    nombrePF: "",
    paternoPF: "",
    maternoPF: "",
    razonSocial: "",
    rfcFactura: "",
    correoFactura: "",
    telFactura: "",
    calle: "",
    noExterior: "",
    noInterior: "",
    cp: "",
    alcaldia: "",
    colonia: "",
    estado: "",
    numPoliza: "",
    compania: "",
    metodoDePago: "",
    formaDePago: "",
    codigoAgente: "",
    ine: undefined,
    poliza: undefined,
    terminosGM: false,
  };

  /*__________________________
  
         STEP 
  ____________________________*/
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    scroll.scrollToTop();
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    scroll.scrollToTop();
  };
  activeStep = () => {
    const { step } = this.state;
    if (step === 1) {
      this.setState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: false,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 2) {
      this.setState({
        step1: false,
        step2: true,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 3) {
      this.setState({
        step1: false,
        step2: false,
        step3: true,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 4) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: true,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 5) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: true,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 6) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: true,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: true,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 7) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: true,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: true,
        completeStep6: true,
        completeStep7: false,
      });
      return;
    } else {
      return;
    }
  };

  /*__________________________
  
         ONCHANGE 
  ____________________________*/
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCheckChangeImg = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };
  handleChangeCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  handleCheckTerminos = (e) => {
    this.setState({
      terminosGM: e.target.checked,
    });
  };
  /*_____________________
  
      ADICIONALES
  ______________________*/
  clearAdd1 = () => {
    this.setState({
      add1__Name: "",
      add1__LastNameP: "",
      add1__LastNameM: "",
      add1__Age: "",
      add1__Genere: "",
      add1__AgeDate: "",
    });
  };
  clearAdd2 = () => {
    this.setState({
      add2__Name: "",
      add2__LastNameP: "",
      add2__LastNameM: "",
      add2__Age: "",
      add2__Genere: "",
      add2__AgeDate: "",
    });
  };
  clearAdd3 = () => {
    this.setState({
      add3__Name: "",
      add3__LastNameP: "",
      add3__LastNameM: "",
      add3__Age: "",
      add3__Genere: "",
      add3__AgeDate: "",
    });
  };
  clearAdd4 = () => {
    this.setState({
      add4__Name: "",
      add4__LastNameP: "",
      add4__LastNameM: "",
      add4__Age: "",
      add4__Genere: "",
      add4__AgeDate: "",
    });
  };
  clearAdd5 = () => {
    this.setState({
      add5__Name: "",
      add5__LastNameP: "",
      add5__LastNameM: "",
      add5__Age: "",
      add5__Genere: "",
      add5__AgeDate: "",
    });
  };

  /*__________________________
  
     COST DEDUCTIBLE
  ____________________________*/
  costAdd0 = () => {
    if (this.state.deductible__add0 === "") {
      this.setState({
        costDeductible__add0: 0,
      });
    } else {
      this.setState({
        costDeductible__add0: "",
      });
    }
  };
  costAdd1 = () => {
    if (this.state.deductible__add1 === "") {
      this.setState({
        costDeductible__add1: 0,
      });
    } else {
      this.setState({
        costDeductible__add1: "",
      });
    }
  };
  costAdd2 = () => {
    if (this.state.deductible__add2 === "") {
      this.setState({
        costDeductible__add2: 0,
      });
    } else {
      this.setState({
        costDeductible__add2: "",
      });
    }
  };
  costAdd3 = () => {
    if (this.state.deductible__add3 === "") {
      this.setState({
        costDeductible__add3: 0,
      });
    } else {
      this.setState({
        costDeductible__add3: "",
      });
    }
  };
  costAdd4 = () => {
    if (this.state.deductible__add4 === "") {
      this.setState({
        costDeductible__add4: 0,
      });
    } else {
      this.setState({
        costDeductible__add4: "",
      });
    }
  };
  costAdd5 = () => {
    if (this.state.deductible__add5 === "") {
      this.setState({
        costDeductible__add5: 0,
      });
    } else {
      this.setState({
        costDeductible__add5: "",
      });
    }
  };

  /*__________________________
  
         SEND DATA
  ____________________________*/
  sendStep1 = () => {
    this.nextStep();
  };
  sendStep2 = () => {
    this.nextStep();
  };
  sendStep3 = () => {
    this.nextStep();
  };
  sendStep4 = () => {
    this.nextStep();
  };
  sendStep5 = () => {
    this.nextStep();
  };
  sendStep6 = () => {
    this.nextStep();
  };
  sendStep7 = () => {
    this.nextStep();
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Step1GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            sendStep1={this.sendStep1}
          />
        );
      case 2:
        return (
          <Step2GM
            data={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            sendStep2={this.sendStep2}
            clearAdd1={this.clearAdd1}
            clearAdd2={this.clearAdd2}
            clearAdd3={this.clearAdd3}
            clearAdd4={this.clearAdd4}
            clearAdd5={this.clearAdd5}
          />
        );
      case 3:
        return (
          <Step3GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep3={this.sendStep3}
          />
        );
      case 4:
        return (
          <Step4GM
            data={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            prevStep={this.prevStep}
            sendStep4={this.sendStep4}
            costAdd0={this.costAdd0}
            costAdd1={this.costAdd1}
            costAdd2={this.costAdd2}
            costAdd3={this.costAdd3}
            costAdd4={this.costAdd4}
            costAdd5={this.costAdd5}
          />
        );
      case 5:
        return (
          <Step5GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep5={this.sendStep5}
          />
        );
      case 6:
        return (
          <Step6GM
            state={this.state}
            activeStep={this.activeStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep6={this.sendStep6}
          />
        );
      case 7:
        return (
          <Step7GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            handleCheckTerminos={this.handleCheckTerminos}
            sendStep7={this.sendStep7}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleCheckChangeImg={this.handleCheckChangeImg}
          />
        );
      case 8:
        return <EndStep state={this.state} />;
      default:
        return (
          <section>
            <p>Error</p>
          </section>
        );
    }
  }
}

export default MainGM;
