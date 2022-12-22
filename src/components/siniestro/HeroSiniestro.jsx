import styled from "styled-components";
import gradientImageBg from "../../assets/images/hero-siniestro.png";
import phone from "../../assets/images/phone.png";
import { Image } from "react-bootstrap";

export const HeroSiniestro = () => {
  return (
    <HeroContainer className="position-relative overflow-hidden pt-5">
      <div className="container-fluid pt-5">
        <div className="py-5 my-xxl-5"></div>
        <div className="row pt-5 mt-5">
          <div className="col-lg-6 offset-xl-1 order-lg-2 d-flex">
            <Image
              className="gradient_img_bg position-absolute"
              src={gradientImageBg}
              alt="Gradient background element"
            />
          </div>
          <div className="col-lg-7 col-xl-6 offset-lg-1 d-flex justify-content-start flex-column text-start">
            <h2 className="fw-normal mt-4 text-start">
              Devolución de deducible <br />
              Gastos Médicos
            </h2>
            <p className="text-secondary mt-2 mb-5 fs-2 fw-light">
              Te cuidamos. Te devolvemos tu deducible de manera garantizada
            </p>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 80rem;

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .gradient_img_bg {
    z-index: 1;
    height: 80%;
    width: auto;
    top: 10rem;
    right: 0rem;
    opacity: 0.9;
  }

  .phone_img {
    z-index: 2;
    height: 90%;
    width: auto;
    top: 1rem;
    right: 25rem;
  }
`;
