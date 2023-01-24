import styled from "styled-components";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { PersonIcon, ReportIcon, ChatIcon, IdeaIcon } from "../../assets/icons";
import Fade from "react-bootstrap/Fade";
// import { GreenStain } from "../../assets/backgrounds";

export const NewCharacteristics = () => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver = () => {
    setIsHovering1(true);
  };

  const handleMouseOut = () => {
    setIsHovering1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  return (
    <CharacteristicsSection className="position-relative">
      <div className="services-title container text-center mb-5 d-none d-md-block">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-normal">
            Complementamos
            <br />{" "}
            <span className="text-dark fw-500 bold-fs">tu protección</span>
          </span>
        </h3>
      </div>
      <div className="mt-5 pt-5 w-100 d-none d-md-block">
        <div className="services-position">
          <ul className="d-flex flex-row justify-content-around mx-auto">
            <li className="flex-1 text-center d-flex flex-column align-items-center">
              <p
                className="services__title"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Procesos eficientes
              </p>
              {isHovering1 && (
                <Fade in={isHovering1}>
                  <p className="fs-2 text-center">
                    El proceso para contratar cualquiera de <br />
                    nuestros productos es fácil y sencillo.
                  </p>
                </Fade>
              )}
            </li>
            <li className="flex-1 text-center">
              <p
                className="services__title "
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
              >
                Productos a la medida
              </p>
              {isHovering2 && (
                <p className="fs-2 text-center">
                  Productos que se adaptan a <br />
                  tus necesidades.
                </p>
              )}
            </li>
            <li className="flex-1 text-center">
              <p
                className="services__title"
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}
              >
                Atención personalizada
              </p>
              {isHovering3 && (
                <p className="fs-2 text-center">
                  Siempre podrás hablar con
                  <br />
                  alguien para resolver tus dudas.
                </p>
              )}
            </li>
            <li className="flex-1 text-center ">
              <p
                className="services__title"
                onMouseOver={handleMouseOver4}
                onMouseOut={handleMouseOut4}
              >
                innovación
              </p>
              {isHovering4 && (
                <p className="fs-2 text-center ">
                  Nos adaptamos a nuevas
                  <br />
                  formas de comunicación para
                  <br />
                  ofrecer un servicio eficiente.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="container py-3 position-relative d-md-none">
        <div className="services-title px-4 container text-center">
          <h3 className="pb-2 fw-semi-bold text-dark">
            <span className="text-dark fw-normal fs-50 fw-500">La única opción digital para <br />
              complementar tu protección</span>
          </h3>
          <h5 className="text-dark fs-30 fw-normal text-center pt-4">Trabajamos para superar tus expectativas con:</h5>
        </div>
        <div className="row d-flex justify-content-between mx-5 px-5 gap-5">
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center d-flex row align-items-center justify-content-around">
              <div className="icon-height d-flex align-items-center">
                <PersonIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center w-75">
                <p className="card-title fw-500 lh-sm text-primary   fs-30">
                  Productos a la medida
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-25 mt-5 align-self-center">
                  Productos que se adaptan a<br />
                  tus necesidedes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex ms-5 align-items-center">
                <ReportIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center w-75">
                <p className="card-title fw-500 lh-sm text-primary fs-30">
                  Procesos eficientes
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-25 mt-5">
                  El proceso para contratar cualquiera de nuestros productos es fácil y sencillo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex ms-5 align-items-center">
                <ChatIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center w-75">
                <p className="card-title fw-500 lh-sm text-primary   fs-30">
                  Atención personalizada
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-25 mt-5">
                  Siempre podrás hablar con alguien <br />
                  para resolver tus dudas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex ms-5 align-items-center">
                <IdeaIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center w-75">
                <p className="card-title fw-500 lh-sm text-primary fs-30">
                  Innovación
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-25 mt-5">
                  Nos adaptamos a nuevas formas de comunicación, para ofrecer un servicio eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center w-100 d-none d-md-block">
        <img
          src="https://elementos-red-enlace.s3.amazonaws.com/Landing/Recurso+2.png"
          alt=""
          className="green_stain_bg"
        />
      </div>
    </CharacteristicsSection>
  );
};

const CharacteristicsSection = styled.section`
  height: auto;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .green_stain_bg {
    z-index: -10;
    height: auto;
    width: 100%;
    bottom: -117px;
    position: absolute;
    opacity: 0.3;
  }

  .services-title,
  .services-position {
    position: relative;
    z-index: 5;

    ul {
      list-style: none;

      li p:first-child::before {
        /* add the new bullet point */
        display: inline-block;
        content: "";
        -webkit-border-radius: 0.375rem;
        border-radius: 0.375rem;
        height: 0.8rem;
        width: 0.8rem;
        margin-right: 1rem;
        margin-bottom: .5rem;
        background-color: #000;
      }
    }
  }

  .services__title {
    font-size: 2.5rem;
    transition: visibility 2s, opacity 0.5s linear, font-weight 0.15s;

    &:hover {
      font-weight: 700;
    }

    &:hover > .services-hover {
      opacity: 1;
    }
  }

  .services-hover {
    opacity: 0;
  }

  .bold-fs {
    font-size: 8rem;
  }

  hr {
    margin-top: 10rem !important;
  }

  .text-lile,
  .border-lile {
    color: #6983d6;
    border: 10px solid #6983d6 !important;
  }

  .fs-50 {
    font-size: 5rem;
  }

  .fs-30 {
    font-size: 3rem;
  }

  .fs-25 {
    font-size: 2.5rem;
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .card-title {
    margin-bottom: 0rem;
  }

  .text-primary,
  .border-primary {
    color: #ffffff !important;
    border-color: #78bc9e !important;
  }

  .card {
    width: auto;
    height: 26rem;
    background-color: #78bc9e;

    .icon-height {
      height: 100%;
      width: 15%;
    }

    .card-body {
      width: auto;
    }
  }

  .btn-first {
    background-color: #6983d6;
    border: 3px solid #6983d6 !important;

    &.text-white:hover {
      color: #6983d6 !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .services-title {
    padding-bottom: 10rem;
  }

  @media (min-width: 768px) {
    height: 75rem;
    .services-title {
      padding-bottom: 15rem;
    }

    .flex-1 {
      flex: 1;
    }
  }

  @media (min-width: 992px) {
    .card {
      width: 28rem;
      height: 40rem;

      .card-body .card-title {
        font-size: 14px;
      }
    }
  }
`;
