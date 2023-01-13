import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <div>
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-1 fw-bold mt-5">
              PASO 4/4
            </h1>
            <p className="text-center fs-2 fw-normal mt-5">
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
                    <p className="my-auto ms-5 ps-5 fs-2">Formato solicitud de reembolso*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Carta de aseguradora*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Finiquito de la aseguradora*</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Identificación oficial vigente con<br />fotografía*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Facturas/ comprobantes de gastos*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Corte de caja*</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Carátula de la póliza primaria*</p>
                  </div>
                </Col>
                <Col md ={8}>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-2">Copia de estado de cuenta vigente*</p>
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-center mt-5 pt-5">
                    <Button variant="primary" type="submit" text="Siguiente"></Button>
              </div>
            </Form>
          </Container>
        </div>
      </SiniestroAContainer>
    </>
  );
};

const SiniestroAContainer = styled.section`
  /* height: 70vh; */
  height: 120vh;
  margin-top: 15rem;

  @media (min-width: 992px) {
    width: 100%;
    .input-custom {
      display: flex;
      justify-content: around;
    }

    .card {
      border: none;
    }

    .bg-blue {
      background: #6099b2;
      padding: .5rem 2rem;
      color: #FFF;
      border-radius: 1.5rem;
    }

    .icon-width {
      width: 3.5rem;
      height: auto;
    }
  }
`;