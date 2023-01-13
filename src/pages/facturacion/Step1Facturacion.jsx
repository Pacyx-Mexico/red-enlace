import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";

export const Step1Facturacion = ({ nextStep, handleFormData, values }) => {
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
      <FacturacionContainer>
        <div>
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fst-italic fs-1 fw-bold mt-5">
              PASO 1/2:
            </h1>
            <p className="text-center fs-2 fw-normal mt-5">
              Proporciona tu número de contrato.
            </p>
          </div>
          
          <Card style={{ marginTop: 60 }}>
            <Card.Body>
              <Form onSubmit={submitFormData} className>
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
      </FacturacionContainer>
    </>
  );
};

const FacturacionContainer = styled.section`
  height: 50rem;
  margin-top: 15rem;

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

