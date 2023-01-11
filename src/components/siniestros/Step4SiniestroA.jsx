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
        <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-1 fw-bold mt-5">
              PASO 4/4
            </h1>
            <p className="text-center fs-2 fw-normal mt-5">
              Adjuntar documentación.
            </p>
          </div>
          <Card style={{ marginTop: 100 }}>
            <Card.Body className="d-flex flex-wrap w-100">
              <Form onSubmit={submitFormData} className="w-100 row">
                <Form.Group className="mb-3 col-12 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="nombreSiniestro"
                    defaultValue={values.nombreSiniestro}
                    type="file"
                    placeholder="nombreSiniestro"
                    onChange={handleFormData("nombreSiniestro")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}

                  <Form.Label>Formato solicitud de reembolso*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Identificación oficial vigente con fotografía*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Carátula de la póliza primaria*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Carta de la aseguradora*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Facturas/ comprobantes de gastos*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Copia de estado de cuenta vigente*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Finiquito de la aseguradora*</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-custom">
                  <Form.Control
                  /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="date"
                    defaultValue={values.date}
                    type="file"
                    placeholder="Fecha"
                    onChange={handleFormData("date")}
                    className="w-25"
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                  <Form.Label>Corte de caja*</Form.Label>
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
  /* height: 70vh; */
  height: 110vh;
  margin-top: 15rem;

  @media (min-width: 992px) {
    .input-custom {
      display: flex;
      justify-content: around;
    }
  }
`;