import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";

export const Step1SiniestroA = ({ nextStep, handleFormData, values }) => {
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
    } */
  };
  return (
    <>
      <SiniestroAContainer>
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-1 fw-bold mt-5">
              PASO 1/4:
            </h1>
            <p className="text-center fs-2 fw-normal mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          
          <Card style={{ marginTop: 60 }}>
            <Card.Body>
              <Form onSubmit={submitFormData}>
                <Form.Group className="mb-3 d-flex gap-5">
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

                  <Button variant="primary" type="submit" text="Buscar">
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>

        <div className="d-md-none">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="primary-title-mb fw-bold">
              PASO 1/4:
            </h1>
            <p className="text-center primary-subtitle-mb text-secondary fw-normal pt-5 mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          <Card style={{ marginTop: 40 }}>
            <Card.Body>
              <Form onSubmit={submitFormData} className>
                <Form.Group className="mb-3 d-flex align-items-center flex-column gap-15 mx-3">
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
                  <Button variant="primary" type="submit" text="Buscar">
                  </Button>
                </Form.Group>
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

  .card {
    border: none;
  }

  .form-control {
    background: red; 
    border: none;
    height: 6rem;
    border-radius: 1.5rem;
    background: #f2f5fc;
    padding: 0 6rem;
    font-size: 2.5rem;

    &::placeholder {
      font-size: 2.5rem;
    }
  }

  .gap-15 {
   gap: 10rem;  
  }

  .bBlzVr {
    width: 20rem;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    height: 90vh;
    .form-control {
      width: 70%;
      background: #f2f5fc;
      border: none;
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
      width: 70%;
      background: #f2f5fc;
      border: none;
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
`;
