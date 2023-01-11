import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";

export const Step3SiniestroA = ({ nextStep, handleFormData, values }) => {
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
            <h1 className="fst-italic fs-1 fw-bold mt-5">PASO 3/4</h1>
            <p className="text-center fs-2 fw-normal mt-5">
              Proporciona el nombre y fecha del siniestro.
            </p>
          </div>

          <Card style={{ marginTop: 100 }}>
            <Card.Body className="container mx-auto d-flex flex-column justify-content-center align-items-center">
              <Form
                onSubmit={submitFormData}
                className="d-flex justify-content-center align-items-center gap-5 w-100 gx-5"
              >
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
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="text"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="input-text"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <div className="d-flex justify-content-center mt-5 pt-5">
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
      </SiniestroAContainer>
    </>
  );
};

const SiniestroAContainer = styled.section`
  height: 50rem;
  margin-top: 15rem;

  @media (min-width: 992px) {
    height: 90vh;
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
  }
`;
