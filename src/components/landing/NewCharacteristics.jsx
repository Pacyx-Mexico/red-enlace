import styled from "styled-components";
import { Image } from "react-bootstrap";
import {
  PersonIcon,
  ReportIcon,
  ChatIcon,
  IdeaIcon,
} from "../../assets/icons";
// import { GreenStain } from "../../assets/backgrounds";

export const NewCharacteristics = () => {
  return (
    <CharacteristicsSection className="position-relative">
      <div className="services-title container text-center mb-5 d-none d-md-block">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-normal">Complementamos<br/> <span className="text-dark fw-bold bold-fs">tu protección</span></span>
        </h3>
      </div>
      <div className="mt-5 pt-5 w-100 d-none d-md-block">
        <div className="services-position">
          <ul className="d-flex flex-row justify-content-around mx-auto">
            <li>
              <p className="services__title">
                Procesos eficientes
              </p>
              <p className="services-hover text-center">
              El proceso para contratar cualquiera de <br />
              nuestros productos es fácil y sencillo.
              </p>
            </li>
            <li>
              <p className="services__title">
                Productos a la medida
              </p>
              <p className="services-hover">
              Productos que se adaptan a <br />
              tus necesidades.
              </p>
            </li>
            <li>
              <p className="services__title">
                Atención personalizada
              </p>
              <p className="services-hover">
              Siempre podrás hablar con<br />
              alguien para resolver tus dudas.
              </p>
            </li>
            <li>
              <p className="services__title">
                innovación 
              </p>
              <p className="services-hover">
              Nos adaptamos a nuevas<br />
              formas de comunicación para<br />
              ofrecer un servicio eficiente.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container py-3 position-relative d-md-none">
        <div className="row d-flex justify-content-between mx-5 px-5 gap-5">
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex align-items-center">
                <PersonIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center">
                <p className="card-title fw-bold lh-sm text-primary fs-1">
                  Productos a la medida
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-2 mt-5 align-self-center">
                  Productos que se adaptan a<br />tus necesidedes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex align-items-center">
                <ReportIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center">
                <p className="card-title fw-bold lh-sm text-primary fs-1">
                  Procesos eficientes
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-2 mt-5">
                  El proceso para contratar cualquiera de <br />nuestros productos es fácil y sencillo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex align-items-center">
                <ChatIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center">
                <p className="card-title fw-bold lh-sm text-primary fs-1">
                  Atención personalizada
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-2 mt-5">
                  Siempre podrás hablar con alguien <br />para resolver tus dudas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center d-flex row align-items-center justify-content-center">
              <div className="icon-height d-flex align-items-center">
                <IdeaIcon />
              </div>
              <div className="card-body px-2 pb-0 d-flex flex-column justify-content-center">
                <p className="card-title fw-bold lh-sm text-primary fs-1">
                  Innovación
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-2 mt-5">
                  Nos adaptamos a nuevas formas de<br />comunicación, para ofrecer un servicio<br />eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center w-100 d-none d-md-block">
        <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/Recurso+2.png" alt="" className="green_stain_bg"/>
      </div>
    </CharacteristicsSection>
  );
};

const CharacteristicsSection = styled.section`
  height: 90rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .green_stain_bg {
    z-index: -1;
    height: auto;
    width: 100%;
    bottom: 0;
    position: absolute;
    opacity: 0.8;
  }

  .services-title,
  .services-position {
    position: relative;
    z-index: 5;
  }

  .services__title {
    font-size: 2rem;
    transition: visibility 2s, opacity 0.5s linear, font-weight .15s;

    &:hover {
      font-weight: 700;
    }

    &:hover>.services-hover {
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

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .card-title {
    margin-bottom: 0rem;
  }

  .text-primary,
  .border-primary {
    color: #FFFFFF !important;
    border-color:  #78BC9E !important;
  }

  .card {
    width: 28rem;
    height: 40rem;
    background-color: #78BC9E;

    .icon-height {
      height: 15rem;
    }

    .card-body .card-title {
      font-size: 14px;
    }
  }

  .btn-first {
    background-color: #6983d6;
    border: 3px solid #6983d6 !important;

    &.text-white:hover {
      color: #6983d6 !important;
    }

    &:hover {
      background-color: #FFFFFF;
    }
  }

  .services-title {
    padding-bottom: 10rem;
  }

  @media (max-width: 991px) {
    height: 140rem;
    .card {
      width: auto;
      height: 26rem;

      .icon-height {
        width: auto;
      }

      .card-body {
        width: 86%;
      }
    }
  }
`;
