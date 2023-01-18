import styled from "styled-components";
import "../../styles/productos/HeaderVideo.css";
import heroSMobile from '../../assets/images/hero-siniestro-mobile.png';
import { Link } from "react-router-dom";
import Button from "../Button";
import { Image } from "react-bootstrap";

export const HeroAutos = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <HeroContainer className="home position-relative mb-5 pb-5" id="home">
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block mb-5 pb-5"
        src={"https://elementos-red-enlace.s3.amazonaws.com/Group+711.png"}
        alt="Gradient background element"
      />
      <div className="align-items-center position-absolute top-50 w-85 d-none d-md-block">
        <div className="hero-title d-flex flex-column justify-content-center text-center align-items-start">
          <h2 className="mb-4 pr-xxl-5 fw-normal z-index text-dark text-start">
            Devolución de deducible <br />
            <span className="fst-italic">Autos</span>
          </h2>
          <p className="text-secondary mb-4 mb-lg-5 hero_subtitle fw-light">
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
        <h2 className="fw-normal fw-medium text-dark h2-heading primary_title">
          Devolución de deducible <br /> 
          <span className="fst-italic">Autos</span>
        </h2>
        <div className="d-flex justify-content-center px-5 mx-5">
          <Image
            className="gradient_img_bg_sm img-fluid px-5 d-md-none"
            src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/hero-siniestro-mobile.png"}
            alt="Gradient background element"
          />
        </div>
        <div className="d-flex justify-content-center w-100 d-md-none mt-5 pt-5">
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
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100rem;
  .gradient_img_bg {
    z-index: 1;
    height: 90%;
    width: auto;
    top: 16rem;
    right: -2.5%;
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
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 2rem;
    z-index: 2;
    margin-left: 0rem;
  }

  @media (min-width: 576px) {
    .gradient_img_bg_sm {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    height: 178rem;
    .gradient_img_bg_sm {
      width: 70rem;
      height: 100%;
    }

    .RE_img_bg {
      display: none;
    }

    .primary_title {
      font-size: 25px;
      margin-bottom: 10rem;
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
