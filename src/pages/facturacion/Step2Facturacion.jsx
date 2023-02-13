import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import { MdArrowBackIosNew } from "react-icons/md";

export const Step2Facturacion = ({ prevStep, nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    /* if (validator.isEmpty(selectedItem)) {
      console.log("Validator asegurados ==> ", validator.isEmpty(selectedItem));
      setError(true);
    } else {
      nextStep();
    }
    if (validator.isEmpty(selectedItem)) {
      console.log("Validator asegurados ==> ", validator.isEmpty(selectedItem));
      setError(true);
    } else {
      nextStep();
    } */
    nextStep();
  };
  return (
    <>
      <FacturacionContainer>
        <div className="d-none d-lg-block">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fs-35 fw-500 mt-5">PASO 2/2:</h1>
            <p className="text-center fs-25 fw-normal mt-5">
              Valida tu información
            </p>
          </div>

          <Card style={{ marginTop: 80 }}>
            <div className="d-flex align-items-end">
              <Card.Body className="w-100 d-flex justify-content-center mx-5 ">
                <Form
                  onSubmit={submitFormData}
                  className="d-flex gap-5 flex-column w-100 mx-5 px-5 pr-facturacion position-relative"
                >
                  <div className="d-flex justify-content-center gap-5">
                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        name="nombres"
                        defaultValue={values.nombres}
                        type="text"
                        placeholder="Nombre (s)*"
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
                  <div className="d-flex justify-content-start me-5 gap-5">
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
                  <div onClick={prevStep} className="position-absolute start-0">
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
            </div>
          </Card>
        </div>

        <div className="d-lg-none d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fs-40 mt-5 fw-500">PASO 2/2:</h1>
            <p className="text-center fs-35 fw-normal mt-5">
              Valida tu información
            </p>
          </div>

          <Card
            className="d-flex justify-content-center w-100 px-5"
            style={{ marginTop: 50 }}
          >
            <Card.Body className="w-100 d-flex justify-content-center mx-5 ">
              <Form
                onSubmit={submitFormData}
                className="d-flex gap-5 flex-column w-100"
              >
                <div className="d-flex justify-content-center flex-column gap-5">
                  <Form.Group className="mb-3">
                    <Form.Control
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
                <div className="d-flex justify-content-center flex-column gap-5">
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
                <div className="d-flex flex-column gap-5">
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
                <div className="d-flex justify-content-center mt-5 pt-5 position-relative">
                  <div onClick={prevStep} className="position-absolute start-0">
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
      </FacturacionContainer>
    </>
  );
};

const FacturacionContainer = styled.section`
  overflow-x: hidden;
  height: 105vh;
  margin-top: 15rem;

  .pr-facturacion {
    margin-right: 6rem !important;
  }

  .fs-40 {
    font-size: 4rem;
  }

  .fs-35 {
    font-size: 3.5rem;
  }

  .card {
    border: none;
  }
  .input-text {
    border-radius: 1rem;
    background: #f2f5fc;
    border: none;
    width: 100%;
    height: 10rem;
    text-align: center;
    font-size: 3rem;

    &::placeholder {
      color: #25282c;
    }
  }

  @media (min-width: 576px) {
    .input-text {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 992px) {
    height: 90vh;
    width: 100%;
    .card {
      border: none;
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .fs-25 {
      font-size: 2.5rem;
    }

    .card-body {
      display: flex;
      flex-direction: row;
    }

    .input-text {
      border-radius: 1rem;
      background: #f2f5fc;
      border: none;
      width: 100%;
      font-size: 2rem;
      height: 6rem;
      padding-left: 2rem;

      &::placeholder {
        color: #25282c;
        text-align: center;
        opacity: 0.8;
      }
    }

    .mb-3 {
      width: 33%;
    }
  }
`;
