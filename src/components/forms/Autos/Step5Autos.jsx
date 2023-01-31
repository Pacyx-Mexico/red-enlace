import React, { Component } from "react";
import StepIndicatorAutos from "./StepIndicatorAutos";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import AlertForm from "../AlertForm";
import CotizacionAutos from "./Inputs/CotizacionAutos";

class Step5Autos extends Component {

  render() {
    return (
      <section>
        <StepIndicatorAutos state={this.props.state} />

        <InstructionForm instruction="Esta es tu cotización" />

        <CotizacionAutos
          state={this.props.state}
          activeStep={this.props.activeStep}
        />

        <NextPrevStep
          icon={true}
          text="Continuar"
          off={"true"}
          prevStep={this.props.prevStep}
          nextStep={this.props.sendStep5}
        />
      </section>
    );
  }
}

export default Step5Autos;
