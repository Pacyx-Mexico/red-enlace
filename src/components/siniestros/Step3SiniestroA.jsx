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
          <Card style={{ marginTop: 100 }}>
            <Card.Body>
              <Form onSubmit={submitFormData}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre del siniestro</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="nombreSiniestro"
                    defaultValue={values.nombreSiniestro}
                    type="text"
                    placeholder="nombreSiniestro"
                    onChange={handleFormData("nombreSiniestro")}
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
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="text"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Button variant="primary" type="submit" text="Siguiente">
                </Button>
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
`;
