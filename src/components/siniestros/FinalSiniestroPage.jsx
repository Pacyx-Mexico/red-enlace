import React from "react";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import { RedLogoIcon } from "../../assets/icons/RedLogoIcon";

export const FinalSiniestroPage = () => {
  return (
    <FinalSiniestroAContainer className="w-100">
      <div className="fs-45 text-center fw-bold fst-italic mt-5 pt-5">
        <h4>
          Tu siniestro ha sido reclamado de manera exitosa
        </h4>
      </div>
      <Container className="d-none d-md-block">
        <div className="mt-10 pt-5">
          <div className="d-flex justify-content-center gap-10 align-items-center">
            <p className="fs-20">
              ¿Tienes dudas? <br />
              (55)54881900
            </p>
            <div className="RedLogo-width">
              <RedLogoIcon />
            </div>
            <p className="fs-20">
              Contáctanos <br />
              (55)41400531
            </p>
          </div>
          <div className="mt-5 pt-5">
            <p className="fs-20 text-center mt-5">contacto@redenlace.com.mx</p>
          </div>
        </div>
      </Container>

      <Container className="d-md-none">
        <div className="mt-10 pt-5 d-flex flex-column">
          <div className="my-5 py-5 d-flex justify-content-center">{/* 
            <p className="fs-20 text-center mt-5">contacto@redenlace.com.mx</p> */}
            <div className="RedLogo-width my-5 py-5">
              <RedLogoIcon />
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column text-center gap-10 align-items-center">
            <p className="fs-35">
              ¿Tienes dudas? <br />
              Contáctanos
            </p>
            <div className="fs-35 d-flex justify-content-between gap-10 mt-5">
              <span>(55)54881900</span>
              <span>(55) 41400531</span>
            </div>
          </div>

          <div className="text-center border-top-custom">
            <p className="fs-35 mt-5 pt-5">contacto@redenlace.com.mx</p>
          </div>
        </div>
      </Container>
    </FinalSiniestroAContainer>
  );
};

const FinalSiniestroAContainer = styled.section`
  height: 86vh;
  margin-top: 15rem;

  .RedLogo-width {
      width: 20rem;
      height: auto;
      padding-bottom: 5rem;
  }

  .fs-35 {
    font-size: 3.5rem;
  }

  .gap-10 {
    gap: 10rem;
  }

  @media (min-width: 768px) {
    .RedLogo-width {
      width: 15rem;
      height: auto;
      border-bottom: 2px solid #133ac9;
      padding-bottom: 5rem;
    }
    
    .fs-20 {
      font-size: 15px;
    }
  }

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