import styled from "styled-components";
import "../../styles/productos/HeaderVideo.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Image } from "react-bootstrap";

export const GastosMedicosHero = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <HeroContainer className="home d-flex" id="home">
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block"
        src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/hero-gastos-medicos.png"}
        alt="Gradient background element"
      />
      <div className="align-items-center position-relative top-25 w-75 d-none d-lg-flex">
        <div className="hero-title d-flex flex-column justify-content-center text-center align-items-start">
          <h2 className="mb-4 pt-5 fs-65 fw-normal z-index text-dark text-start">
            Devolución de deducible <br />
            <span>Gastos Médicos</span>
          </h2>
          <p className="text-secondary pb-5 mb-5 mt-4 lh-md hero_subtitle fw-light">
            Te cuidamos. Te devolvemos tu deducible de manera garantizada
          </p>
          <div onClick={scrollTop}>
            <Link
              to="/cotizador-deducible-gastos-medicos"
              className="headerTitle__btn">
              <Button text="Contratar" /> 
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center w-100 h-100 d-lg-none">
        <h2 className="fw-normal fw-medium text-dark primary_title mb-5 pb-5">
          Devolución de deducible <br />
          Gastos Médicos
        </h2>
        <div className="d-flex justify-content-center px-5 mx-5 h-50">
          <Image
            className="gradient_img_bg_sm img-fluid px-5 d-md-none"
            src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/Gastos-medicos-mb.png"}
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
  height: 100vh;

  .ihjuak {
    background:  #FFF !important;
    color: #5872c4;
  }
  .gradient_img_bg {
    z-index: 1;
    height: 85%;
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
    margin-bottom: 7.5rem;
  }
  .primary_title {
    font-size: 25px;
  }
  .img-fluid {
    width: auto;
    height: 100%;
  }
  .mt-11 {
    margin-top: 11rem;
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
    font-size: 2.79rem;
    font-weight: 400;
    line-height: 2rem;
    z-index: 2;
    margin-left: 0rem;
    text-align: start;
  }


  @media (min-width: 576px) {
    height: 160rem;
    .gradient_img_bg_sm {
      width: auto;
      height: 90rem;
      margin-top: 10rem;
    }
  }

  @media (min-width: 768px) {
    height:100vh;
    .gradient_img_bg_sm {
      width: 70%;
      height: 100%;
    }

    .RE_img_bg {
      display: none;
    }

    .primary_title {
      font-size: 20px;
      padding: 0 4rem;
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

    .fs-65 {
      font-size: 7rem;
      margin-top: 14rem;
    }
  }
`;

