import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import validator from "validator";
import { Form, Card /* , Button */ } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

export const Step2SiniestroA = ({ nextStep, handleFormData, values }) => {
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
                  <Form.Label>Asegurados</Form.Label>
                  <Form.Control
                    /* Cambiar por dropDown */
                    style={{ border: error ? "2px solid red" : "" }}
                    name="asegurados"
                    defaultValue={values.asegurados}
                    type="text"
                    placeholder="asegurados"
                    onChange={handleFormData("asegurados")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Asegurados
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
                <Button
                  variant="primary"
                  type="submit"
                  text="Siguiente"
                ></Button>
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
