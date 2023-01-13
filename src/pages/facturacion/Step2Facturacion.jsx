import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";

export const Step2Facturacion = ({ nextStep, handleFormData, values }) => {
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
      <FacturacionContainer>
        <div>
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-1 fw-bold mt-5">
              PASO 2/2
            </h1>
            <p className="text-center fs-2 fw-normal mt-5">
              Valida tu información
            </p>
          </div>

          <Card style={{ marginTop: 100 }}>
            <Card.Body className="container mx-auto d-flex flex-column justify-content-center align-items-center">
              <Form onSubmit={submitFormData} className="d-flex justify-content-center align-items-center gap-5 w-100 flex-column">
                <div className="d-flex justify-content-center gap-5">
                  <Form.Group className="mb-3">
                    <Form.Control
                    /* Cambiar por dropDown */
                      style={{ border: error ? "2px solid red" : "" }}
                      name="nombres"
                      defaultValue={values.nombres}
                      type="text"
                      placeholder="nombre(s)*"
                      onChange={handleFormData("nombres")}
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
                      name="edad"
                      defaultValue={values.edad}
                      type="text"
                      placeholder="Edad*"
                      onChange={handleFormData("edad")}
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
                      name="correo"
                      defaultValue={values.correo}
                      type="text"
                      placeholder="Correo electrónico*"
                      onChange={handleFormData("correo")}
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
                </div>
                <div className="d-flex justify-content-center gap-5">
                  <Form.Group className="mb-3">
                    <Form.Control
                    /* Cambiar por dropDown */
                      style={{ border: error ? "2px solid red" : "" }}
                      name="apellidoPat"
                      defaultValue={values.apellidoPat}
                      type="text"
                      placeholder="Apellido paterno*"
                      onChange={handleFormData("apellidoPat")}
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
                      name="genero"
                      defaultValue={values.genero}
                      type="text"
                      placeholder="Género"
                      onChange={handleFormData("genero")}
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
                      name="telefono"
                      defaultValue={values.telefono}
                      type="text"
                      placeholder="Teléfono*"
                      onChange={handleFormData("telefono")}
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
                </div>
                <div className="d-flex justify-content-center gap-5">
                  <Form.Group className="mb-3">
                    <Form.Control
                    /* Cambiar por dropDown */
                      style={{ border: error ? "2px solid red" : "" }}
                      name="apellidoMat"
                      defaultValue={values.apellidoMat}
                      type="text"
                      placeholder="Apellido Materno*"
                      onChange={handleFormData("apellidoMat")}
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
                      name="rcf"
                      defaultValue={values.rcf}
                      type="text"
                      placeholder="RFC*"
                      onChange={handleFormData("rcf")}
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
                </div>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <Button variant="primary" type="submit" text="Siguiente"></Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </FacturacionContainer>
    </>
  );
};

const FacturacionContainer = styled.section`
  height: 50rem;
  margin-top: 15rem;

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
  }
`;

