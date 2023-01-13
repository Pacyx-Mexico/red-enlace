import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Step1Facturacion, Step2Facturacion, FinalFacturacionPage } from "./";
import { Container, Row, Col } from "react-bootstrap";

export const Facturacion = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    noContrato: "",
    nombres: "",
    edad: [],
    correo: "",
    apellidoPat: "",
    genero: "",
    telefono: "",
    rfc: "",
    apellidoMat: "",
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
                <Step1Facturacion
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
                <Step2Facturacion
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
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <FinalFacturacionPage />
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
