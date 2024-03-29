import React, { Component } from "react";
import InstructionForm from "../InstructionForm";
import StepIndicatorGM from "./StepIndicatorGM";
import NextPrevStep from "../NextPrevStep";
import TitularGM from "./Inputs/TitularGM";
import AlertForm from "../AlertForm";
import "../../../styles/forms/Gm/Step1GM.css";

class Step1GM extends Component {
  state = {
    initAgeDate: true,
    errorFX__nombre: false,
    errorFX__paterno: false,
    errorFX__materno: false,
    errorFX__edad: false,
    errorFX__genero: false,
    errorFX__rfc: false,
    errorFX__correo: false,
    errorFX__tel: false,

    errorTest__nombre: false,
    errorTest__paterno: false,
    errorTest__materno: false,
    errorTest__edad: false,
    errorTest__rfc: false,
    errorTest__correo: false,
    errorTest__tel: false,

    errorNull__nombre: false,
    errorNull__paterno: false,
    errorNull__materno: false,
    errorNull__edad: false,
    errorNull__genero: false,
    errorNull__rfc: false,
    errorNull__correo: false,
    errorNull__tel: false,

    initGenero: true,

    offStep1: "false",
    showAlertStep1: false,
  };

  validationONStep1 = () => {
    if (
      this.props.state.nombre !== "" &&
      this.props.state.paterno !== "" &&
      this.props.state.materno !== "" &&
      this.props.state.edad !== "" &&
      this.props.state.ageDate !== "" &&
      this.props.state.genero !== "" &&
      this.props.state.rfc !== "" &&
      this.props.state.correo !== "" &&
      this.props.state.tel !== ""
    ) {
      if (
        this.state.errorTest__nombre !== true &&
        this.state.errorTest__paterno !== true &&
        this.state.errorTest__materno !== true &&
        this.state.errorTest__edad !== true &&
        this.state.errorTest__rfc !== true &&
        this.state.errorTest__correo !== true &&
        this.state.errorTest__tel !== true
      ) {
        this.setState({
          offStep1: "true",
        });
      }
    } else {
      this.setState({
        offStep1: "false",
      });
    }
  };

  validationNombre = () => {
    if (this.props.state.nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.nombre)) {
        this.setState({
          errorFX__nombre: true,
          errorTest__nombre: true,
          errorNull__nombre: false,
        });
      } else {
        this.setState({
          errorFX__nombre: false,
          errorTest__nombre: false,
          errorNull__nombre: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre: true,
        errorNull__nombre: true,
        errorTest__nombre: false,
      });
    }
  };
  validationPaterno = () => {
    if (this.props.state.paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.paterno)) {
        this.setState({
          errorFX__paterno: true,
          errorTest__paterno: true,
          errorNull__paterno: false,
        });
      } else {
        this.setState({
          errorFX__paterno: false,
          errorTest__paterno: false,
          errorNull__paterno: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno: true,
        errorNull__paterno: true,
        errorTest__paterno: false,
      });
    }
  };
  validationMaterno = () => {
    if (this.props.state.materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.materno)) {
        this.setState({
          errorFX__materno: true,
          errorTest__materno: true,
          errorNull__materno: false,
        });
      } else {
        this.setState({
          errorFX__materno: false,
          errorTest__materno: false,
          errorNull__materno: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno: true,
        errorNull__materno: true,
        errorTest__materno: false,
      });
    }
  };
  validationEdad = () => {
    if (this.props.state.edad !== "") {
      if (this.props.state.edad >= 1 && this.props.state.edad <= 101) {
        this.setState({
          errorFX__edad: false,
          errorTest__edad: false,
          errorNull__edad: false,
        });
      } else {
        this.setState({
          errorFX__edad: true,
          errorTest__edad: true,
          errorNull__edad: false,
        });
      }
    } else {
      this.setState({
        errorFX__edad: true,
        errorNull__edad: true,
        errorTest__edad: false,
      });
    }
  };
  changeInitAgeDate = () => {
    this.setState({
      initAgeDate: false,
    });
  };
  validationGenero = () => {
    if (this.props.state.genero === "") {
      this.setState({
        errorFX__genero: true,
        errorNull__genero: true,
      });
    } else {
      this.setState({
        errorFX__genero: false,
        errorNull__genero: false,
      });
    }
  };
  changeInitGenero = () => {
    this.setState({
      initGenero: false,
    });
  };
  validationRFC = () => {
    if (this.props.state.rfc !== "") {
      if (
        !/^([a-zñA-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z]|[0-9]){2}([aA]|[0-9]){1})?$/.test(
          this.props.state.rfc
        )
      ) {
        this.setState({
          errorFX__rfc: true,
          errorTest__rfc: true,
          errorNull__rfc: false,
        });
      } else {
        this.setState({
          errorFX__rfc: false,
          errorTest__rfc: false,
          errorNull__rfc: false,
        });
      }
    } else {
      this.setState({
        errorFX__rfc: true,
        errorNull__rfc: true,
        errorTest__rfc: false,
      });
    }
  };
  validationCorreo = () => {
    if (this.props.state.correo !== "") {
      if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          this.props.state.correo
        )
      ) {
        this.setState({
          errorFX__correo: true,
          errorTest__correo: true,
          errorNull__correo: false,
        });
      } else {
        this.setState({
          errorFX__correo: false,
          errorTest__correo: false,
          errorNull__correo: false,
        });
      }
    } else {
      this.setState({
        errorFX__correo: true,
        errorNull__correo: true,
        errorTest__correo: false,
      });
    }
  };
  validationTel = () => {
    if (this.props.state.tel !== "") {
      if (!/^\d{7,14}$/.test(this.props.state.tel)) {
        this.setState({
          errorFX__tel: true,
          errorTest__tel: true,
          errorNull__tel: false,
        });
      } else {
        this.setState({
          errorFX__tel: false,
          errorTest__tel: false,
          errorNull__tel: false,
        });
      }
    } else {
      this.setState({
        errorFX__tel: true,
        errorNull__tel: true,
        errorTest__tel: false,
      });
    }
  };

  closedAlertStep1 = () => {
    this.setState({
      showAlertStep1: false,
    });
  };

  nextStep1 = () => {
    if (this.state.offStep1 === "false") {
      this.setState({
        showAlertStep1: true,
      });
      this.validationNombre();
      this.validationPaterno();
      this.validationMaterno();
      this.validationEdad();
      this.changeInitAgeDate();
      this.changeInitGenero();
      this.validationRFC();
      this.validationCorreo();
      this.validationTel();
    } else {
      if (
        this.state.errorTest__nombre !== true &&
        this.state.errorTest__paterno !== true &&
        this.state.errorTest__materno !== true &&
        this.state.errorTest__edad !== true &&
        this.state.errorTest__rfc !== true &&
        this.state.errorTest__correo !== true &&
        this.state.errorTest__tel !== true
      ) {
        this.props.sendStep1();
      } else {
        this.setState({
          showAlertStep1: true,
        });
        this.validationNombre();
        this.validationPaterno();
        this.validationMaterno();
        this.validationEdad();
        this.changeInitGenero();
        this.validationRFC();
        this.validationCorreo();
        this.validationTel();
      }
    }
  };

  render() {
    return (
      <section id="formStep1GM">
        <StepIndicatorGM state={this.props.state} />
        <InstructionForm instruction="Por favor llena todos los campos del Asegurado titular" />
        <TitularGM
          state={this.props.state}
          error={this.state}
          activeStep={this.props.activeStep}
          validationONStep1={this.validationONStep1}
          handleChange={this.props.handleChange}
          validationNombre={this.validationNombre}
          validationPaterno={this.validationPaterno}
          validationMaterno={this.validationMaterno}
          validationEdad={this.validationEdad}
          validationGenero={this.validationGenero}
          validationRFC={this.validationRFC}
          validationCorreo={this.validationCorreo}
          validationTel={this.validationTel}
          changeInitGenero={this.changeInitGenero}
          changeInitAgeDate={this.changeInitAgeDate}
        />
        <NextPrevStep
          icon={false}
          text="Continuar"
          off={this.state.offStep1}
          nextStep={this.nextStep1}
        />
        <AlertForm
          showAlert={this.state.showAlertStep1}
          closedAlert={this.closedAlertStep1}
          linkId="formStep1GM"
          text="Por favor asegúrate de llenar todos los campos correctamente antes de continuar"
        />
      </section>
    );
  }
}

export default Step1GM;
