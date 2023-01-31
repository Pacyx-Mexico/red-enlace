import styled from "styled-components";
import "../../styles/productos/HeaderVideo.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Image } from "react-bootstrap";

export const HeroAutos = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <HeroContainer className="home d-flex mb-5 pb-5 w-100" id="home">
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block"
        src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/Group+732.png"}
        alt="Gradient background element"
      />
      <div className="align-items-center w-75 d-none d-md-flex">
        <div className="hero-title d-flex flex-column justify-content-start text-center align-items-start">
          <h2 className="mb-4 pr-xxl-5 fw-normal z-index text-dark fs-65 text-start">
            Devolución de deducible <br />
            Autos
          </h2>
          <p className="text-secondary pb-5 mb-5 mt-4 mb-lg-5 hero_subtitle fw-light">
            Te cuidamos. Te devolvemos tu deducible de manera garantizada
          </p>
          <div onClick={scrollTop}>
            <Link
              to="/cotizador-deducible-autos"
              className="headerTitle__btn"
            >
              <Button text="Contratar" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center w-100 h-100 d-md-none">
        <h2 className="fw-normal fw-500 text-dark primary_title mb-5 pb-5 mt-5">
          Devolución de deducible <br /> 
          Autos
        </h2>
        <div className="d-flex justify-content-center h-50">
          <Image
            className="gradient_img_bg_sm img-fluid px-5 d-md-none"
            src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/Grupo+738.png"}
            alt="Gradient background element"
          />
        </div>
        <div className="d-flex justify-content-center w-100 d-md-none pt-5 mt-50">
          <div onClick={scrollTop}>
            <Link
              to="/cotizador-deducible-gastos-medicos"
              className="headerTitle__btn"
            >
              <Button text="Contratar" />
            </Link>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-color: #fff;
  overflow: hidden;
  height: 100rem;
  .gradient_img_bg {
    z-index: 1;
    height: 83%;
    width: auto;
    top: 16rem;
    right: 0;
    opacity: 0.9;
  }
  .man_img-bg {
    z-index: 2;
    height: 90%;
    width: auto;
    top: 9.6rem;
    left: -16rem;
  }

  .hero-title {
    margin-left: 10rem;
  }
  .fs-65 {
    font-size: 7rem;
    margin-top:14rem;
  }
  .mt-11 {
    margin-top: 11rem;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .w-85 {
    width: 85%;
  }
  .z-index {
    z-index: 2;
  }
  .mt-50 {
    margin-top: 5rem;
  }
  .text-primary {
    color: #314faf !important;
  }
  .RE_img_bg {
    z-index: 1;
    height: 40% !important;
    top: 30%;
    right: 0;
    opacity: 0.2;
  }
  .hero_subtitle {
    font-size: 2.79rem;
    font-weight: 400;
    line-height: 2rem;
    z-index: 2;
    margin-left: 0rem;
    text-align: start;
  }

  @media (min-width: 576px) {
    .gradient_img_bg_sm {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    overflow-x: hidden;
    height: 100vh;
    top: 15rem;
    .gradient_img_bg_sm {
      width: auto;
      height: 102%;
    }

    .RE_img_bg {
      display: none;
    }

    .primary_title {
      font-size: 25px;
    }

    .primary_subtitle {
      font-size: 32px;
    }

    .home__info-mb {
      position: absolute;
      top: 20rem;
    }

    .man_img-mb {
      bottom: -67.1rem;
      left: 0;
      width: auto;
      height: 60%;
      z-index: 4;
    }

    .z-index-2 {
      z-index: 10;
    }

    .redlogo {
      bottom: 0;
      left: 0;
      z-index: 15;
    }
  }
`;
