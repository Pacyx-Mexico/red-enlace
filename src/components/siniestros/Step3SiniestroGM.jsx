import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import { MdArrowBackIosNew } from "react-icons/md";

export const Step3SiniestroGM = ({
  nextStep,
  prevStep,
  handleFormData,
  values,
}) => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  const today = new Date();
  const [error, setError] = useState(false);
  const [date, setDate] = useState(new Date());

  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(values.nombreSiniestro) || validator.isEmpty(date)) {
      console.log(
        "Validator noContrato ==> ",
        validator.isEmpty(values.nombreSiniestro)
      );
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <SiniestroGMContainer className="w-100">
        <div className="d-none d-lg-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fs-35 fw-500 mt-5">PASO 3/4</h1>
            <p className="text-center fs-25 fw-normal mt-5">
              Proporciona el nombre y fecha del siniestro.
            </p>
          </div>

          <Card style={{ marginTop: 80 }}>
            <Card.Body className="container mx-auto d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex align-items-end">
                <div onClick={prevStep}>
                  <MdArrowBackIosNew className="iconPrev" />
                </div>
                <Form
                  onSubmit={submitFormData}
                  className="d-flex justify-content-center align-items-center gap-5 w-100 flex-column"
                >
                  <div className="d-flex justify-content-center gap-5">
                    <Form.Group className="mb-3">
                      <Form.Control
                        /* Cambiar por dropDown */
                        style={{ border: error ? "2px solid red" : "" }}
                        name="nombreSiniestro"
                        defaultValue={values.nombreSiniestro}
                        type="text"
                        placeholder="nombre del siniestro/ padecimiento"
                        onChange={handleFormData("nombreSiniestro")}
                        className="input-text"
                      />
                      {error ? (
                        <Form.Text style={{ color: "red" }}>
                          Falta nombre del siniestro o padecimiento
                        </Form.Text>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        type="date"
                        name="date"
                        placeholder="Due date"
                        value={date}
                        /*                       onChange={handleFormData("date")} */
                        className="input-text"
                        onChange={(e) => {
                          setDate(e.target.value);
                          handleFormData("date");
                        }}
                      />
                      {error ? (
                        <Form.Text style={{ color: "red" }}>
                          Selecciona fecha del siniestro
                        </Form.Text>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </div>
                  <div
                    onClick={scrollTop}
                    className="d-flex justify-content-center mt-5 pt-5"
                  >
                    <Button
                      variant="primary"
                      type="submit"
                      text="Siguiente"
                    ></Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="d-lg-none">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="  fs-20 fw-500 mt-5">PASO 3/4</h1>
            <p className="text-center fs-35 text-secondary fw-normal mt-5">
              Proporciona el nombre y fecha del siniestro.
            </p>
          </div>

          <Card style={{ marginTop: 60 }} className="w-100 px-5">
            <Card.Body className="container mx-auto d-flex flex-column justify-content-center align-items-center">
              <Form
                onSubmit={submitFormData}
                className="d-flex justify-content-center align-items-center gap-5 w-100 flex-column position-relative"
              >
                <div className="d-flex flex-column justify-content-center w-100 gap-5">
                  <Form.Group className="mb-3">
                    <Form.Control
                      /* Cambiar por dropDown */
                      style={{ border: error ? "2px solid red" : "" }}
                      name="nombreSiniestro"
                      defaultValue={values.nombreSiniestro}
                      type="text"
                      placeholder="nombre del siniestro/ padecimiento"
                      onChange={handleFormData("nombreSiniestro")}
                      className="input-text"
                    />
                    {error ? (
                      <Form.Text style={{ color: "red" }}>
                        Falta nombre del siniestro o padecimiento
                      </Form.Text>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      style={{ border: error ? "2px solid red" : "" }}
                      type="date"
                      name="date"
                      placeholder="Due date"
                      value={date}
                      /*                       onChange={handleFormData("date")} */
                      className="input-text"
                      onChange={(e) => {
                        setDate(e.target.value);
                        handleFormData("date");
                      }}
                    />
                    {error ? (
                      <Form.Text style={{ color: "red" }}>
                        Selecciona fecha del siniestro
                      </Form.Text>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                </div>
                <div
                  onClick={scrollTop}
                  className="d-flex justify-content-center mt-5 pt-5"
                >
                  <div onClick={prevStep} className="position-absolute bottom-0 start-0">
                    <MdArrowBackIosNew className="iconPrev" />
                  </div>
                  <Button
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

  .fs-20 {
    font-size: 20px;
  }

  .fs-25 {
    font-size: 2.5rem;
  }

  .fs-35 {
    font-size: 3.5rem;
  }

  .form-text {
    margin-top: 0rem;
    font-size: 2.5rem;
  }

  .form-control {
    background: red;
    border: none;
    height: 10.5rem;
    border-radius: 2.5rem;
    background: #f2f5fc;
    padding: 0 2.5rem;
    font-size: 3rem;

    &::placeholder {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .form-text {
      margin-top: 0rem;
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    height: 90vh;
    width: 100%;
    .card {
      border: none;
    }

    .card-body {
      display: flex;
      flex-direction: row;
    }

    .input-text {
      border-radius: 1rem;
      background: #f2f5fc;
      border: none;
      width: 60rem;
      font-size: 12px;

      &::placeholder {
        color: #25282c;
      }
    }

    .form-control {
      background: red;
      border: none;
      height: 6rem;
      border-radius: 1.5rem;
      background: #f2f5fc;
      padding: 0 6rem;
      font-size: 2.3rem;

      &::placeholder {
        font-size: 2rem;
      }
    }
  }
`;
