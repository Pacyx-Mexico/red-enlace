import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import validator from "validator";
import { Form, Card } from "react-bootstrap";

export const Step1SiniestroA = ({ nextStep, handleFormData, values }) => {
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
      <SiniestroAContainer>
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="  fs-35 fw-500 mt-5">
              PASO 1/4:
            </h1>
            <p className="text-center fs-25 fw-normal mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          
          <Card style={{ marginTop: 60 }}>
            <Card.Body className="px-5">
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
            <h1 className="primary-title-mb fw-500 mt-5">
              PASO 1/4:
            </h1>
            <p className="text-center primary-subtitle-mb text-secondary fw-normal pt-5 mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          <Card style={{ marginTop: 40 }}>
            <Card.Body>
            <Form onSubmit={submitFormData} className="d-flex justify-content-center gap-10 flex-column">
                <Form.Group className="mb-3 d-flex align-items-center flex-column gap-2 mx-5">
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="noContrato"
                    defaultValue={values.noContrato}
                    type="text"
                    placeholder="# de Contrato*"
                    onChange={handleFormData("noContrato")}
                  />
                  {error ? (
                    <Form.Text className="align-self-start ms-1" style={{ color: "red" }}>
                      Ingresa número de un contrato válido
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" text="Buscar">
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </SiniestroAContainer>
    </>
  );
};

const SiniestroAContainer = styled.section`
  height: 90vh;
  margin-top: 15rem;

  .primary-title-mb {
    font-size: 4rem;
  }

  .primary-subtitle-mb {
    font-size:3rem ; 
  }

  .form-text {
    margin-top: 0rem;
    font-size: 2.5rem;
  }

  .card {
    border: none;
  }

  .form-control {
    background: red; 
    border: none;
    height: 10rem;
    border-radius: 1.5rem;
    background: #f2f5fc;
    padding: 0 6rem;
    font-size: 2.5rem;

    &::placeholder {
      font-size: 2.5rem;
    }
  }

  .gap-10 {
   gap: 10rem;  
  }

  .bBlzVr {
    width: 20rem;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    height: 90vh;

    .form-text {
      margin-top: 0rem;
      font-size: 2rem;
    }

    .gjxwFZ,
    .flvQUx {
      border-radius: 2rem !important;
      background:#d9dff4;
      border: #d9dff4;
      color: #000;
    }

    .gjxwFZ:hover,
    .flvQUx:hover {
      background: #8099db; 
    }

    .form-control {
      width: 100%;
      background: #f2f5fc;
      border: none;
      height: 6rem;
      border-radius: 1.5rem;
      padding-left: 3rem;
      font-size: 10px;

      &::placeholder {
        color: #000;
        font-size: 10px;
      }
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

  @media (min-width: 992px) {
    height: 90vh;
    .form-control {
      width: 100%;
      background: #f2f5fc;
      border: none;
      border-radius: 1.5rem;
      padding-left: 3rem;
      font-size: 2rem;

      &::placeholder {
        color: #000;
        font-size: 2rem;
      }
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .fs-25 {
      font-size: 2.5rem;
    }

    .card {
      border: none; 
    }

    .bBlzVr {
      color: #fff;
      border-radius: 1.5rem;
      background: #8296de;
    }

    .kkwtUg {
      min-width: 15rem;
    }
  }
`;
