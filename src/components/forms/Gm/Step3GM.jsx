import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import PolizaGM from "./Inputs/PolizaGM";
import AlertForm from "../AlertForm";

class Step3GM extends Component {
  state = {
    errorFX__polizaPrimaria: false,
    errorNull__polizaPrimaria: false,
    errorTest__polizaPrimaria: false,

    initInicioVigencia: true,
    initDeductible: true,
    errorFX__inicioVigencia: false,
    errorNull__inicioVigencia: false,

    initFinVigencia: true,
    errorFX__finVigencia: false,
    errorNull__finVigencia: false,
    initMoney: true,
    initCurrencyType: true,

    offStep3: "false",
    showAlertStep3: false,
  };

  validationPolizaPrimaria = () => {
    const deducibleGm = this.props.state.polizaPrimaria;
    const deducible = deducibleGm.replace(/,/g, "");

    if (this.props.state.polizaPrimaria === "") {
      this.setState({
        errorFX__polizaPrimaria: true,
        errorNull__polizaPrimaria: true,
        errorTest__polizaPrimaria: false,
      });
    } else {
      if (deducible < 1) {
        this.setState({
          errorFX__polizaPrimaria: true,
          errorNull__polizaPrimaria: false,
          errorTest__polizaPrimaria: true,
        });
      } else {
        this.setState({
          errorFX__polizaPrimaria: false,
          errorNull__polizaPrimaria: false,
          errorTest__polizaPrimaria: false,
        });
      }
    }
  };
  validationInicioVigencia = () => {
    if (this.props.state.inicioVigencia !== "") {
      this.setState({
        errorFX__inicioVigencia: false,
        errorNull__inicioVigencia: false,
      });
      return;
    } else {
      this.setState({
        errorFX__inicioVigencia: true,
        errorNull__inicioVigencia: true,
      });
    }
  };
  changeInitInicioVigencia = () => {
    this.setState({
      initInicioVigencia: false,
    });
  };
  validationInicioVigenciaNext = () => {
    if (this.props.state.inicioVigencia === "") {
      this.setState({
        initInicioVigencia: false,
      });
    } else {
      return;
    }
  };
  validationFinVigencia = () => {
    if (this.props.state.finVigencia !== "") {
      this.setState({
        errorFX__finVigencia: false,
        errorNull__finVigencia: false,
      });
      return;
    } else {
      this.setState({
        errorFX__finVigencia: true,
        errorNull__finVigencia: true,
      });
    }
  };
  changeInitFinVigencia = () => {
    this.setState({
      initFinVigencia: false,
    });
  };
  validationFinVigenciaNext = () => {
    if (this.props.state.finVigencia === "") {
      this.setState({
        initFinVigencia: false,
      });
    } else {
      return;
    }
  };
  changeInitCurrencyType = () => {
    this.setState({
      initCurrencyType: false,
    });
  };

  validationONStep3 = () => {
    if (
      this.props.state.inicioVigencia !== "" &&
      this.props.state.finVigencia !== "" &&
      this.props.state.currencyType !== "" &&
      this.props.state.polizaPrimaria !== "" &&
      this.state.errorTest__polizaPrimaria !== true
    ) {
      this.setState({
        offStep3: "true",
      });
    } else {
      this.setState({
        offStep3: "false",
      });
    }
  };

  closedAlertStep3 = () => {
    this.setState({
      showAlertStep3: false,
    });
  };

  nextStep3 = () => {
    if (this.state.offStep3 === "false") {
      this.setState({
        showAlertStep3: true,
        initMoney: false,
        initCurrencyType: false,
      });
      this.validationFinVigenciaNext();
      this.validationInicioVigenciaNext();
      this.validationPolizaPrimaria();
    } else {
      this.props.sendStep3();
    }
  };

  render() {
    return (
      <>
        <div id="formStep3GM"></div>
        <StepIndicatorGM state={this.props.state} />
        <InstructionForm instruction="Cuéntanos un poco más sobre tu póliza actual" />
        <PolizaGM
          state={this.props.state}
          error={this.state}
          handleChange={this.props.handleChange}
          activeStep={this.props.activeStep}
          validationONStep3={this.validationONStep3}
          validationInicioVigencia={this.validationInicioVigencia}
          changeInitInicioVigencia={this.changeInitInicioVigencia}
          validationFinVigencia={this.validationFinVigencia}
          changeInitFinVigencia={this.changeInitFinVigencia}
          changeInitCurrencyType={this.changeInitCurrencyType}
          validationPolizaPrimaria={this.validationPolizaPrimaria}
        />
        <NextPrevStep
          icon={true}
          text="Continuar"
          off={this.state.offStep3}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep3}
        />
        <AlertForm
          showAlert={this.state.showAlertStep3}
          closedAlert={this.closedAlertStep3}
          linkId="formStep3GM"
          text="Por favor asegúrate de llenar todos los campos correctamente antes de continuar"
        />
      </>
    );
  }
}

export default Step3GM;
