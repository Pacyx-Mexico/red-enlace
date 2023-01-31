import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import Step1Autos from "./Step1Autos";
import Step2Autos from "./Step2Autos";
import Step3Autos from "./Step3Autos";
import Step4Autos from "./Step4Autos";
import Step5Autos from "./Step5Autos";
import Step6Autos from "./Step6Autos";
import EndStep from "../EndStep";

class MainAutos extends Component {
  state = {
    step: 5,

    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,

    completeStep1: false,
    completeStep2: false,
    completeStep3: false,
    completeStep4: false,
    completeStep5: false,
    completeStep6: false,

    fisica_o_moral: "fisica",
    nombre: "",
    paterno: "",
    materno: "",
    ageDate: "",
    edad: "",
    genero: "",
    rfc: "",
    correo: "",
    tel: "",
    razonSocial: "",

    conductor: "",
    marca: "",
    modelo: "",
    poliza: "",
    serie: "",
    placas: "",
    descripcion: "",

    package: "",

    coverageA: false,
    coverageB: false,
    coverageC: false,

    costCoverageA: 1700,
    costCoverageB: 1700,
    costCoverageC: 670,

    reimburseCoverageB: "",

    inicioVigencia: "",
    finVigencia: "",
    calle: "",
    numExt: "",
    numInt: "",
    alcaldia: "",
    colonia: "",
    cp: "",
    estado: "",
    telFactura: "",
    formaDePago: "",
    codigoAgente: "",
  };

  /*__________________________
  
         STEP 
  ____________________________*/
  prevStep = () => {
    scroll.scrollToTop();
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  nextStep = () => {
    scroll.scrollToTop();
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
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
        completeStep1: false,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
      });
    } else if (step === 2) {
      this.setState({
        step1: false,
        step2: true,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        completeStep1: true,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
      });
    } else if (step === 3) {
      this.setState({
        step1: false,
        step2: false,
        step3: true,
        step4: false,
        step5: false,
        step6: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
      });
    } else if (step === 4) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: true,
        step5: false,
        step6: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
      });
    } else if (step === 5) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: true,
        step6: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: false,
        completeStep6: false,
      });
    } else if (step === 6) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: true,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: true,
        completeStep6: false,
      });
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
  handleChangePackage = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.nextStep();
  };

  /*__________________________
  
         SEND DATA
  ____________________________*/
  sendStep1 = () => {
    console.log("enviar 1");
    this.nextStep();
  };
  sendStep2 = () => {
    this.nextStep();
    console.log("enviar 2");
  };

  sendStep4 = () => {
    this.nextStep();
    console.log("enviar 4");
  };
  sendStep5 = () => {
    this.nextStep();
    console.log("enviar 5");
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Step1Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            sendStep1={this.sendStep1}
          />
        );
      case 2:
        return (
          <Step2Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            sendStep2={this.sendStep2}
          />
        );
      case 3:
        return (
          <Step3Autos
            data={this.state}
            activeStep={this.activeStep}
            handleChangePackage={this.handleChangePackage}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return (
          <Step4Autos
            data={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            prevStep={this.prevStep}
            sendStep4={this.sendStep4}
          />
        );
      case 5:
        return (
          <Step5Autos
            state={this.state}
            activeStep={this.activeStep}
            prevStep={this.prevStep}
            sendStep5={this.sendStep5}
          />
        );
      case 6:
        return (
          <Step6Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep4={this.sendStep4}
          />
        );
      case 7:
        return <EndStep email={this.state.correo} />;
      default:
        return (
          <section>
            <p>Error</p>
          </section>
        );
    }
  }
}

export default MainAutos;
