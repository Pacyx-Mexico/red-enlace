import React, { Component } from "react";
import AlertForm from "../../../../Inputs/AlertForm";
import AdditionalForm from "./AdditionalForm";

class MainAdditional extends Component {
  state = {
    add1__Name_i: true,
    add1__LastNameP_i: true,
    add1__LastNameM_i: true,
    add1__Age_i: true,
    add1__AgeDate_i: true,
    add1__Genere_i: true,
    deductibleAdd_i: true,

    alarmAdditional: false,
  };

  changeInitName = () => {
    this.setState({
      add1__Name_i: false,
    });
  };
  changeInitLastNameP = () => {
    this.setState({
      add1__LastNameP_i: false,
    });
  };
  changeInitLastNameM = () => {
    this.setState({
      add1__LastNameM_i: false,
    });
  };
  changeInitAge = () => {
    this.setState({
      add1__Age_i: false,
    });
  };
  changeInitAgeDate = () => {
    this.setState({
      add1__AgeDate_i: false,
    });
  };
  changeInitGenere = () => {
    this.setState({
      add1__Genere_i: false,
    });
  };
  closedAlertAdditional = () => {
    this.setState({
      alarmAdditional: false,
    });
  };

  confirmEditAdd = () => {
    if (this.props.additionalON === "true") {
      this.props.closeAdditional();
    } else {
      this.setState({
        alarmAdditional: true,

        add1__Name_i: false,
        add1__LastNameP_i: false,
        add1__LastNameM_i: false,
        add1__Age_i: false,
        add1__AgeDate_i: false,
        add1__Genere_i: false,
        deductibleAdd_i: false,
      });
    }
  };

  render() {
    return (
      <>
        <AdditionalForm
          data={this.props.data}
          init={this.state}
          add={this.props.add}
          deleteAdd={this.props.deleteAdd}
          idLink={this.props.idLink}
          handleChange={this.props.handleChange}
          additionalON={this.props.additionalON}
          confirmEdit={this.confirmEditAdd}
          changeInitName={this.changeInitName}
          changeInitLastNameP={this.changeInitLastNameP}
          changeInitLastNameM={this.changeInitLastNameM}
          changeInitAge={this.changeInitAge}
          changeInitAgeDate={this.changeInitAgeDate}
          changeInitGenere={this.changeInitGenere}
          dataName={this.props.dataName}
          dataLastNameP={this.props.dataLastNameP}
          dataLastNameM={this.props.dataLastNameM}
          dataGenere={this.props.dataGenere}
          dataAge={this.props.dataAge}
          dataAgeDate={this.props.dataAgeDate}
          dataDeductible={this.props.dataDeductible}
        />
        <AlertForm
          showAlert={this.state.alarmAdditional}
          closedAlert={this.closedAlertAdditional}
          linkId={this.props.idLink}
        />
      </>
    );
  }
}

export default MainAdditional;
