import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";

export const Step1Facturacion = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(values.noContrato)) {
      console.log("Validator noContrato ==> ", validator.isEmpty(values.noContrato))
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <FacturacionContainer>
        <div className="d-none d-md-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fs-35 fw-500 mt-5">
              PASO 1/2:
            </h1>
            <p className="text-center fs-25 fw-normal mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          
          <Card style={{ marginTop: 60 }}>
            <Card.Body>
              <Form onSubmit={submitFormData}>
                <Form.Group className="mb-3 d-flex justify-content-center gap-5">
                  <div className="d-flex flex-column w-75">
                    <Form.Control
                      style={{ border: error ? "2px solid red" : "" }}
                      name="noContrato"
                      defaultValue={values.noContrato}
                      type="text"
                      placeholder="# de Contrato*"
                      onChange={handleFormData("noContrato")}
                    />
                    {error ? (
                      <Form.Text style={{ color: "red" }}>
                        Ingresa número de un contrato válido
                      </Form.Text>
                    ) : (
                      ""
                    )}
                  </div>
                  <button type="submit" className="btn-square">Buscar</button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>


        <div className="d-md-none">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="  primary-title-mb fw-500 mt-5">
              PASO 1/2:
            </h1>
            <p className="text-center text-secondary primary-subtitle-mb fw-normal pt-5 mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          
          <Card style={{ marginTop: 30 }}>
            <Card.Body>
              <Form onSubmit={submitFormData} className="mx-3">
                <Form.Group className="mb-5 pb-5 d-flex flex-column gap-10">
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="noContrato"
                    defaultValue={values.noContrato}
                    type="text"
                    placeholder="# de Contrato*"
                    onChange={handleFormData("noContrato")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" text="Buscar">
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </FacturacionContainer>
    </>
  );
};

const FacturacionContainer = styled.section`
  height: 90vh;
  margin-top: 15rem;

  .primary-title-mb {
    font-size: 4rem;
  }

  .primary-subtitle-mb {
    font-size: 3rem;
  }

  .form-text {
    margin-top: 0rem;
    font-size: 2.5rem;
  }

  .gap-10 {
    gap: 10rem;
  }

  .form-control {
    border: none;
    height: 10rem;
    border-radius: 1.5rem;
    background: #f2f5fc;
    margin-top: 2rem;
    padding: 0 6rem;
    font-size: 2.5rem;
  }

  .card {
    border: none; 
  }

  @media (min-width: 576px) {

    .primary-title-mb {
      font-size: 6rem;
    }

    .primary-subtitle-mb {
      font-size: rem;
    }

    .form-text {
      margin-top: 0rem;
      font-size: 2rem;
    }

    .form-control {
      font-size: 3rem;
      height: 7rem;

      &::placeholder {
        font-size: 3rem;
      }
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .fs-25 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    height: 90vh;
    .form-control {
      width: 100%;
      height: 6rem;
      background: #f2f5fc;
      border: none;
      border-radius: 1.5rem;
      padding-left: 3rem;
      margin-top: 0;
      font-size: 2rem;

      &::placeholder {
        color: #000;
        font-size: 2rem;
      }
    }

    .kkwtUg {
      min-width: 15rem;
    }

    .card {
      border: none; 
    }

    .bBlzVr {
      color: #fff;
      border-radius: 1.5rem;
      background: #8296de;
    }
  }
`;

