import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";

export const Step4SiniestroA = ({ nextStep, handleFormData, values }) => {
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
                  <Form.Label>Formato solicitud de reembolso*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="nombreSiniestro"
                    defaultValue={values.nombreSiniestro}
                    type="file"
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
                  <Form.Label>Identificación oficial vigente con fotografía*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
                <Form.Group className="mb-3">
                  <Form.Label>Carátula de la póliza primaria*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
                <Form.Group className="mb-3">
                  <Form.Label>Carta de la aseguradora*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
                <Form.Group className="mb-3">
                  <Form.Label>Facturas/ comprobantes de gastos*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
                <Form.Group className="mb-3">
                  <Form.Label>Copia de estado de cuenta vigente*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
                <Form.Group className="mb-3">
                  <Form.Label>Finiquito de la aseguradora*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
                <Form.Group className="mb-3">
                  <Form.Label>Corte de caja*</Form.Label>
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
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
  height: 70rem;
  margin-top: 15rem;
`;
