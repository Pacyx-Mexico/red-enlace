import styled from "styled-components";
import {
  PersonIcon,
  ReportIcon,
  ChatIcon,
  IdeaIcon,
} from "../../assets/icons";

export const Characteristics = () => {
  return (
    <CharacteristicSection>
      <div className="services-title container text-center">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-normal">La única <span className="text-dark fw-bold">opción digital</span> para <br />
            complementar tu protección</span>
        </h3>
        <h5 className="text-dark fs-1 fw-normal text-center pt-4">Trabajamos para superar tus expectativas con:</h5>
      </div>
      <div className="container py-3 position-relative d-none d-lg-block">
        <div className="row d-flex justify-content-between">
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center">
              <div className="icon-height">
                <PersonIcon />
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold lh-sm text-primary">
                  Productos <br />a la medida
                </p>
                <p className="card-title fw-normal lh-sm text-primary mt-3">
                  Productos que se <br />adaptan<br /> a tus necesidedes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <div className="icon-height">
                <ReportIcon />
              </div>
              <div className="card-body">
                <p className="card-title fw-bold lh-sm text-primary">
                  Procesos <br />eficientes
                </p>
                <p className="card-title fw-normal lh-sm text-primary mt-3">
                  El proceso para <br />contratar cualquiera de nuestros productos es fácil y sencillo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <div className="icon-height">
                <ChatIcon />
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold lh-sm text-primary">
                  Atención personalizada
                </p>
                <p className="card-title fw-normal lh-sm text-primary mt-3">
                  Siempre podrás hablar<br />con alguien para<br />resolver tus dudas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <div className="icon-height">
                <IdeaIcon />
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold lh-sm text-primary">
                  Innovación
                </p>
                <p className="card-title fw-normal lh-sm text-primary mt-4">
                  Nos adaptamos a<br />nuevas formas de<br />comunicación, para<br />ofrecer un servicio<br />eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3 position-relative d-lg-none">
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
      <hr className="border border-5 border-lile mt-5 mt-xxl-5" />
    </CharacteristicSection>
  )
}

const CharacteristicSection = styled.section`
  height: 90rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

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
    height: 194rem;
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