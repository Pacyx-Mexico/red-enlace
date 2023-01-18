import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Step4SiniestroGM = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();

    // checking if value of first name and last name is empty show error else take to step 2
    /* if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    } */
  };
  return (
    <>
      <SiniestroAContainer>
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-35 fw-bold mt-5">
              PASO 4/4
            </h1>
            <p className="text-center fs-25 fw-normal mt-5">
              Adjuntar documentación.
            </p>
          </div>
          <Container onSubmit={submitFormData} className="mt-5 pt-5">
            <Form onSubmit={submitFormData}>
              <Row className="mt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Formato solicitud de reembolso*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Carta de aseguradora*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Finiquito de la aseguradora*</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Identificación oficial vigente con<br />fotografía*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Facturas/ comprobantes de gastos*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Corte de caja*</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Carátula de la póliza primaria*</p>
                  </div>
                </Col>
                <Col md ={8}>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20">Copia de estado de cuenta vigente*</p>
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-center mt-5 pt-5">
                    <Button variant="primary" type="submit" text="Siguiente"></Button>
              </div>
            </Form>
          </Container>
        </div>

        <div className="d-md-none">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic title-primary fs-20 fw-bold mt-5">
              PASO 4/4
            </h1>
            <p className="text-center fs-35 text-secondary subtitle-primary fw-normal mt-5">
              Adjuntar documentación.
            </p>
          </div>
          <Container onSubmit={submitFormData} className="mt-5 pt-5">
            <Form onSubmit={submitFormData}>
              <div className="mt-5">
                <div className="d-flex flex-column justify-content-start mx-5"> 
                  <ul className="d-flex flex-column list-unstyled gap-5 w-100">
                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Formato solicitud de reembolso*</p>     
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Identificación oficial vigente con fotografía*</p>   
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Carátula de la póliza primaria*</p>   
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Carta de la aseguradora*</p>   
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Facturas/ comprobantes de gastos*</p>   
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Copia de estado de cuenta vigente*</p>   
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Finiquito de la aseguradora*</p>   
                    </li>

                    <li className="fs-35 d-flex justify-content-start align-items-center">
                      <Link className="bg-blue rounded-lg">
                        < FiUpload className="icon-width"/>
                      </Link>
                      <p className="my-auto ms-5 ps-5 fs-35 fw-normal">Corte de caja*</p>   
                    </li>
                  </ul>

                  <div className="d-flex justify-content-center mt-5 pt-5">
                    <Button variant="primary" type="submit" text="Siguiente"></Button>
                  </div>
                </div>
              </div>
            </Form>
          </Container>
        </div>
      </SiniestroAContainer>
    </>
  );
};

const SiniestroAContainer = styled.section`
  height: 95vh;

  margin-top: 15rem;

  .fs-20 {
    font-size: 20px;
  }

  .fs-35 {
    font-size: 3rem;
  }

  .bg-blue {
    background: #6580d5;
    padding: 0.5rem 2rem;
    color: #fff;
    border-radius: 1.5rem;
    font-size: 3.5rem;
  }

  @media (min-width: 992px) {
    height: 120vh;
    width: 100%;
    .input-custom {
      display: flex;
      justify-content: around;
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .fs-25 {
      font-size: 2.5rem;
    }

    .fs-20 {
      font-size: 2rem;
    }

    .card {
      border: none;
    }

    .bg-blue {
      background: #6580d5;
      padding: 0.5rem 2rem;
      color: #fff;
      border-radius: 1.5rem;
    }

    .icon-width {
      width: 3.5rem;
      height: auto;
    }
  }
`;
