import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

export const Step2SiniestroGM = ({ nextStep, handleFormData, values }) => {
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
      <div className="d-flex flex-column d-none d-lg-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-35 fw-bold mt-5">
              PASO 2/4:
            </h1>
          </div>

          <Card className="h-100" style={{ marginTop: 100 }}>
            <Card.Body>
              <Form onSubmit={submitFormData} className="d-flex justify-content-center flex-column h-100">
                <Form.Group className="mb-3 d-flex justify-content-center align-items-end">
                  <Form.Label className="fw-bold fst-italic mb-0 fs-17 w-25"># de Contrato:</Form.Label>
                  <Form.Control
                    /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="asegurados"
                    defaultValue={values.asegurados}
                    type="text"
                    onChange={handleFormData("asegurados")}
                    className="w-25"
                    placeholder={values.noContrato}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Dropdown className="w-100 d-flex justify-content-center">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="mt-4">
                    <span className="fw-bold mx-5">Asegurados:</span>
                    <span className="opacity-75 fs-10 me-4">Elige que asegurado tuvo el siniestro</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <Button className="mx-auto w-50"
                    variant="primary"
                    type="submit"
                    text="Siguiente"
                  ></Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex flex-column d-lg-none px-5">
          <div className="d-flex justify-content-center">
            <h1 className="fst-italic fw-bold mt-5 primary-title-mb">
              PASO 2/4:
            </h1>
          </div>

          <Card className="h-100" style={{ marginTop: 60 }}>
            <Card.Body>
              <Form onSubmit={submitFormData} className="d-flex justify-content-center flex-column h-100">
                <Form.Group className="mb-3 d-flex flex-row justify-content-center align-items-center gap-5">
                  <Form.Label className="fw-bold fst-italic mb-0 fs-20"># de Contrato:</Form.Label>
                  <Form.Control
                    /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="asegurados"
                    defaultValue={values.asegurados}
                    type="text"
                    onChange={handleFormData("asegurados")}
                    className="w-50"
                    placeholder={values.noContrato}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <div>
                  <div className="mt-5 pt-5">
                    <p className="fs-15 text-secondary fw-light">Elige al asegurado que tuvo el siniestro</p>
                  </div>

                  <div>
                    <Dropdown className="w-100 d-flex justify-content-center">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="mt-4 text-start px-5 text-secondary">
                      <span className="fw-light text-start ">Asegurado:</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Asegurado 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Asegurado 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Asegurado 3
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Asegurado 4
                    </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <Button className="mx-auto w-50"
                    variant="primary"
                    type="submit"
                    text="Siguiente"
                  ></Button>
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
  height: 89vh;
  margin-top: 15rem;

  .card {
    border: none; 
  }

  .primary-title-mb {
    font-size: 4rem;
  }

  .fs-20 {
    font-size: 20px;
  }

  .fs-15 {
    font-size: 15px;
  }

  .form-control {
    width: 70%;
    border: solid 2px #FFFFFF;
    border-bottom: 2px solid #000;
    border-radius: 0;
    padding-left: 3rem;
    font-size: 15px;

    &::placeholder {
      color: #000000;
      font-size: 15px;
    }
  }

  .btn-success {
    background: #f2f5fa;
    border: none;
    color: #000000;
    font-size: 15px;
    border-radius: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus, 
    &:active {
      background: #F5FFFA;
      color: #000;
      border: none;
      outline: none;
      box-shadow: none;
    }
  }

  @media (min-width: 768px) {
    .fs-20 {
    font-size: 20px;
  }

  .fs-15 {
    font-size: 15px;
  }
  }

  @media (min-width: 992px) {
    height: 90vh;
    .form-control {
      width: 70%;
      border: solid 2px #FFFFFF;
      border-bottom: 2px solid #000;
      border-radius: 0;
      padding-left: 3rem;
      font-size: 15px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &::placeholder {
        color: #000000;
        font-size: 15px;
      }
    }

    .fs-17 {
      font-size: 17px;
    }

    .fs-10 {
      font-size: 10px;
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .card {
      border: none; 
    }

    .btn-success {
      background: #f2f5fa;
      border: none;
      color: #000000;
      font-size: 15px;
      border-radius: 1rem;

      &:focus, 
      &:active {
        background: #F5FFFA;
        color: #000;
        border: none;
        outline: none;
        box-shadow: none;
      }
    }
  }
`;
