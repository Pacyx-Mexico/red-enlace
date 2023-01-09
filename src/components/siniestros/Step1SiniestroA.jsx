import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Form, Card } from "react-bootstrap";
import validator from "validator";

export const Step1SiniestroA = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);
  return (
    <>
      <SiniestroAContainer>
        Step1Siniestro
        <Link
          to="/reclamacion-de-siniestro-auto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          <Button text="Siguiente" />
        </Link>
      </SiniestroAContainer>
    </>
  );
};

const SiniestroAContainer = styled.section`
  height: 50rem;
  margin-top: 15rem;
`;
