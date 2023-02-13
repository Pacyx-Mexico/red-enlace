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
import { animateScroll as scroll } from "react-scroll";
import { MdArrowBackIosNew } from "react-icons/md";

export const Step4SiniestroA = ({ nextStep, prevStep, handleFormData, values }) => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
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
      <SiniestroAContainer className="w-100">
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="  fs-35 fw-500 mt-5">
              PASO 4/4
            </h1>
            <p className="text-center fs-25 fw-normal mt-5">
              Adjuntar documentación.
            </p>
          </div>
          <div onSubmit={submitFormData} className="mt-5 pt-5">
            <Form onSubmit={submitFormData} className="position-relative">
              <Row className="mt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      <input type="file" style={{'display': 'none'}}/>
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Formato solicitud de reembolso*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Carta de aseguradora*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Finiquito de la aseguradora*</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Identificación oficial vigente con<br />fotografía*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Facturas/ comprobantes de gastos*</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Corte de caja*</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col className="d-flex mx-auto">
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Carátula de la póliza primaria*</p>
                  </div>
                </Col>
                <Col md ={8}>
                  <div className="d-flex align-items-center">
                    <Link className="bg-blue rounded-lg ">
                      < FiUpload className="icon-width"/>
                    </Link>
                    <p className="my-auto ms-5 ps-5 fs-20 fw-normal">Copia de estado de cuenta vigente*</p>
                  </div>
                </Col>
              </Row>
              <div onClick={prevStep} className="position-absolute bottom-0">
                <MdArrowBackIosNew className="iconPrev" />
              </div>
              <div onClick={scrollTop} className="d-flex justify-content-center mt-5 pt-5">
                <Button variant="primary" type="submit" text="Siguiente"></Button>
              </div>
            </Form>
          </div>
        </div>

        <div className="d-md-none">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="  title-primary fs-20 fw-500 mt-5">
              PASO 4/4
            </h1>
            <p className="text-center fs-35 text-secondary subtitle-primary fw-normal mt-5">
              Adjuntar documentación.
            </p>
          </div>
          <Container onSubmit={submitFormData} className="mt-5 pt-5">
            <Form onSubmit={submitFormData}>
              <div className="mt-5">
                <div className="d-flex flex-column justify-content-start mx-5 position-relative"> 
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
                  <div onClick={prevStep} className="position-absolute bottom-0 start-0">
                    <MdArrowBackIosNew className="iconPrev" />
                  </div>
                  <div onClick={scrollTop} className="d-flex justify-content-center mt-5 pt-5">
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
    padding: .5rem 2rem;
    color: #FFF;
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

    .card {
      border: none;
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