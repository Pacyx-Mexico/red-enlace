import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { animateScroll as scroll } from "react-scroll";
import { MdArrowBackIosNew } from "react-icons/md";

export const Step2SiniestroGM = ({ nextStep, prevStep, handleFormData, values }) => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(selectedItem)) {
      console.log("Validator asegurados ==> ", validator.isEmpty(selectedItem));
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <SiniestroGMContainer>
        <div className="d-flex flex-column d-none d-lg-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="  fs-35 fw-500 mt-5">PASO 2/4:</h1>
          </div>

          <Card className="h-100" style={{ marginTop: 100 }}>
            <div className="d-flex align-items-end">
              <div onClick={prevStep}>
                <MdArrowBackIosNew className="iconPrev" />
              </div>
              <Card.Body>
                <Form
                  onSubmit={submitFormData}
                  className="d-flex justify-content-center flex-column h-100"
                >
                  <Form.Group className="mb-3 d-flex justify-content-center align-items-end">
                    <Form.Label className="fw-500   mb-0 fs-17 w-25">
                      # de Contrato:
                    </Form.Label>
                    <Form.Control
                      name="asegurados"
                      defaultValue={values.asegurados}
                      type="text"
                      onChange={handleFormData("asegurados")}
                      className="w-25"
                      placeholder={values.noContrato}
                    />
                  </Form.Group>
                  <Dropdown className="w-100 d-flex justify-content-center">
                    <div className="d-flex flex-column w-100">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-button-drop-1"
                        className="mt-4"
                        style={{ border: error ? "2px solid red" : "" }}
                      >
                        <span className="fw-500 mx-5">Asegurado:</span>
                        {selectedItem ? (
                          <span className="opacity-75 fs-10 me-4">
                            {selectedItem}
                          </span>
                        ) : (
                          <span className="opacity-75 fs-10 me-4">
                            Elige qué asegurado tuvo el siniestro
                          </span>
                        )}
                      </Dropdown.Toggle>
                    </div>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        /* onSelect={()=>setSelectedItem("Asegurado 1")} */ onClick={() =>
                          setSelectedItem("Asegurado 1")
                        }
                        eventKey="Asegurado 1"
                      >
                        Asegurado 1
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedItem("Asegurado 2")}
                        eventKey="Asegurado 2"
                      >
                        Asegurado 2
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedItem("Asegurado 3")}
                        eventKey="Asegurado 3"
                      >
                        Asegurado 3
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedItem("Asegurado 4")}
                        eventKey="Asegurado 4"
                      >
                        Asegurado 4
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      Selecciona un asegurado
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <div onClick={scrollTop} className="d-flex justify-content-center mt-5 pt-5">
                    <Button
                      className="mx-auto w-50"
                      variant="primary"
                      type="submit"
                      text="Siguiente"
                    ></Button>
                  </div>
                </Form>
              </Card.Body>
            </div>
          </Card>
        </div>

        <div className="d-flex flex-column d-lg-none px-5">
          <div className="d-flex justify-content-center">
            <h1 className="  fw-500 mt-5 primary-title-mb">PASO 2/4:</h1>
          </div>

          <Card className="h-100" style={{ marginTop: 60 }}>
            <Card.Body>
              <Form
                onSubmit={submitFormData}
                className="d-flex justify-content-center flex-column h-100 position-relative"
              >
                <Form.Group className="mb-3 d-flex justify-content-center align-items-end">
                  <Form.Label className="fw-500   mb-0 fs-1 w-50">
                    # de Contrato:
                  </Form.Label>
                  <Form.Control
                    name="asegurados"
                    defaultValue={values.asegurados}
                    type="text"
                    onChange={handleFormData("asegurados")}
                    className="w-25"
                    placeholder={values.noContrato}
                  />
                </Form.Group>
                <div>
                  <div className="mt-5 pt-5">
                    <p className="fs-15 text-secondary fw-light">
                      Elige al asegurado que tuvo el siniestro
                    </p>
                  </div>

                  <div>
                  <Dropdown className="w-100 d-flex justify-content-center">
                  <div className="d-flex flex-column w-100">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-button-drop-1"
                      className="mt-4"
                      style={{ border: error ? "2px solid red" : "" }}
                    >
                      <span className="fw-500 mx-5">Asegurados:</span>
                      {selectedItem ? (
                        <span className="opacity-75 fs-10 me-4">
                          {selectedItem}
                        </span>
                      ) : ''}
                    </Dropdown.Toggle>
                  </div>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      /* onSelect={()=>setSelectedItem("Asegurado 1")} */ onClick={() =>
                        setSelectedItem("Asegurado 1")
                      }
                      eventKey="Asegurado 1"
                    >
                      Asegurado 1
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedItem("Asegurado 2")}
                      eventKey="Asegurado 2"
                    >
                      Asegurado 2
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedItem("Asegurado 3")}
                      eventKey="Asegurado 3"
                    >
                      Asegurado 3
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedItem("Asegurado 4")}
                      eventKey="Asegurado 4"
                    >
                      Asegurado 4
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    Selecciona un asegurado
                  </Form.Text>
                ) : (
                  ""
                )}
                  </div>
                </div>
                <div onClick={prevStep} className="position-absolute bottom-0">
                  <MdArrowBackIosNew className="iconPrev" />
                </div>
                <div onClick={scrollTop} className="d-flex justify-content-center mt-5 pt-5">
                  <Button
                    className="mx-auto w-50"
                    variant="primary"
                    type="submit"
                    text="Siguiente"
                  ></Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </SiniestroGMContainer>
    </>
  );
};

const SiniestroGMContainer = styled.section`
  height: 89vh;
  margin-top: 15rem;

  .card {
    border: none;
  }

  .dropdown-item {
    font-size: 2.5rem !important;
  }

  .dropdown-menu {
    right: 0 !important;
    text-align: end;
  }

  .primary-title-mb {
    font-size: 4rem;
  }

  #dropdown-button-drop-1 {
    height: 10rem;
  }

  .fs-20 {
    font-size: 20px;
  }

  .fs-15 {
    font-size: 15px;
  }

  .form-control {
    width: 70%;
    border: solid 2px #ffffff;
    border-bottom: 2px solid #000;
    border-radius: 0;
    padding-left: 3rem;
    font-size: 15px;

    &::placeholder {
      color: #000000;
      font-size: 15px;
    }
  }

  .form-text {
    margin-top: 0rem;
    font-size: 2.5rem;
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
      background: #f5fffa;
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

    .form-text {
      margin-top: 0rem;
      font-size: 2rem;
    }

    #dropdown-button-drop-1 {
      height: 6rem;
    }

    .fs-15 {
      font-size: 15px;
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .dropdown-item {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    height: 90vh;
    .form-control {
      width: 70%;
      border: solid 2px #ffffff;
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
      font-size: 15px;
    }

    .card {
      border: none;
    }

    .btn-success {
      background: #f2f5fa;
      border: none;
      color: #000000;
      height: 6rem;
      font-size: 15px;
      border-radius: 1rem;

      &:focus,
      &:active {
        background: #f5fffa;
        color: #000;
        border: none;
        outline: none;
        box-shadow: none;
      }
    }
  }
`;
