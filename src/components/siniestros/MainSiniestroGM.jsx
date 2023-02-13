import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
import {
  Step1SiniestroGM,
  Step2SiniestroGM,
  Step3SiniestroGM,
  Step4SiniestroGM,
  FinalSiniestroPage,
} from "./";
import { Container, Row, Col } from "react-bootstrap";

export const MainSiniestroGM = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    noContrato: "",
    asegurados: [],
    nombreSiniestro: "",
    date: "",
    documentacion: {
      solicitud: "",
      identificación: "",
      caratulaPoliza: "",
      cartaAseguradora: "",
      facturasGastos: "",
      copiaEstadoCuenta: "",
      finiquitoAseguradora: "",
      corteCaja: "",
    },
  });

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <>
          <Navbar type="productos" />
          <Container className="h-100">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step1SiniestroGM
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      );

    case 2:
      return (
        <div className="App">
          <Navbar type="productos" />
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step2SiniestroGM
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Navbar type="productos" />
          <div>
            <Row className="w-100">
              <Col className="d-flex justify-content-center">
                <Step3SiniestroGM
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Navbar type="productos" />
          <Container>
            <Row className="w-100">
              <Col className="d-flex justify-content-center">
                <Step4SiniestroGM
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
    case 5:
      return (
        <div className="App">
          <Navbar type="productos" />
          <Container>
            <Row>
              <Col className="custom-margin">
                <FinalSiniestroPage />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
    default:
      return <div className="App"></div>;
  }
};
