import React from "react";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import { RedLogoIcon } from "../../assets/icons/RedLogoIcon";

export const FinalFacturacionPage = () => {
  return (
    <FinalFacturacionContainer>
      <div className="fs-45 text-center fw-bold fst-italic mt-5 pt-5">
        <h4>
          Tu factura será enviada al correo:
        </h4>
      </div>
      <Container>
        <div className="mt-10 pt-5">
          <div className="text-center">
            <p className="fs-20">
              Si tienes alguna duda, contáctanos!
            </p>
            <div className="RedLogo-width">
              <RedLogoIcon />
            </div>
          </div>
        </div>
      </Container>

    </FinalFacturacionContainer>
  );
};

const FinalFacturacionContainer = styled.section`
  height: 90vh;
  margin-top: 15rem;

  @media (min-width: 992px) {
    .fs-45 {
      font-size: 4.5rem;
    }

    .RedLogo-width {
      width: 15rem;
      height: auto;
      border-bottom: 2px solid #133ac9;
      padding-bottom: 5rem;
    }

    .gap-10 {
      gap: 10rem;
    }

    .mt-10 {
      margin-top: 10rem;
    }

    .fs-20 {
      font-size: 15px;
    }
  }
`;
