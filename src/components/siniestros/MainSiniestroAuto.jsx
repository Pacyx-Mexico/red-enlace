import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
import { Step1SiniestroA, Step2SiniestroA } from "./";
import { Container, Row, Col } from "react-bootstrap";

export const MainSiniestroAuto = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    noContrato: "",
    asegurados: [],
    nombreSiniestro: "",
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
                <Step1SiniestroA
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
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step2SiniestroA
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step3SiniestroA
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step4SiniestroA
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 5:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <FinalSiniestroPage />
                </Col>
              </Row>
            </Container>
          </div>
        );
    default:
      return <div className="App"></div>;
  }
};
