import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NavLink, Link } from "react-router-dom";

export const SelectSiniestro = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Navbar />
      <SelectSiniestroContainer>
        <div className="services-title container-fluid text-center d-none d-lg-block">
          <h3 className="pb-2 fw-semi-bold text-dark mt-5">
            Selecciona el producto
          </h3>
        </div>
        <div className="container-fluid py-3 position-relative d-none d-lg-block">
          <div className="row px-5 mx-5 mr-5 ml-5 d-flex justify-content-center gap-10">
            <div onClick={scrollTop} className="col-auto mb-5 pb-5">
              <Link
                to="/reclamacion-siniestros/gastos-medicos"
                className="w-100 text-decoration-none"
              >
                <div className="card border border-4 border-first rounded-pill text-center position-relative card-hover_first">
                  <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-gastos-medicos.png"
                      alt="Gastos medicos hombre"
                      className="card_img-width card_img-width_first position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center w-100">
                  <p className="card-title fw-normal lh-sm text-center fs-25">
                    Devolución de deducible
                    <br />
                    Gastos Médicos
                  </p>
                </div>
              </Link>
            </div>
            <div onClick={scrollTop} className="col-auto mb-5 pb-5">
              <Link
                to="/reclamacion-siniestros/autos"
                className="w-100 text-decoration-none"
              >
                <div className="card border border-4 border-second rounded-pill text-center position-relative card-hover_second">
                  <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-autos.png"
                      alt="hombre auto"
                      className="card_img-width card_img-width_second position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center w-100">
                  <p className="card-title fw-normal lh-sm text-center fs-25">
                    Devolución de deducible
                    <br />
                    Autos
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid pb-3 pt-5 mt-5 position-relative d-lg-none">
          <div className="flex-column px-5 mx-5 mr-5 ml-5 d-flex align-items-center justify-content-center gap-5">
            <div className="services-title container-fluid text-center">
              <h3 className="pb-2 fw-semi-bold text-dark mt-5">
                Selecciona el producto
              </h3>
            </div>
            <div onClick={scrollTop} className="col-auto mb-5 pb-5 w-75">
              <Link
                to="/reclamacion-siniestros/gastos-medicos"
                className="w-100 text-decoration-none"
              >
                <div className="card border border-4 border-first rounded-pill text-center opacity-75 position-relative card-hover_first d-flex align-items-center justify-content-center mx-auto shadow-lg">
                  <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-gastos-medicos.png"
                      alt="Gastos medicos hombre"
                      className="card_img-width card_img-width_first position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                  <p className="card-title fw-normal lh-sm text-center fs-2 w-100">
                    Devolución de deducible
                    <br />
                    Gastos Médicos
                  </p>
                </div>
              </Link>
            </div>
            <div onClick={scrollTop} className="col-auto mb-5 pb-5 w-75">
              <Link
                to="/reclamacion-siniestros/autos"
                className="w-100 text-decoration-none"
              >
                <div className="card border border-4 border-second rounded-pill text-center opacity-75 position-relative card-hover_second d-flex align-items-center justify-content-center mx-auto shadow-lg">
                  <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-autos.png"
                      alt="Gastos medicos hombre"
                      className="card_img-width card_img-width_second position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                  <p className="card-title fw-normal lh-sm text-center fs-2 w-100">
                    Devolución de deducible
                    <br />
                    Autos
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SelectSiniestroContainer>
      <Footer />
    </>
  );
};

const SelectSiniestroContainer = styled.section`
  height: 210rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  .text-lile {
    color: #6983d6;
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .card-title {
    margin-bottom: 0rem;
    color: #000000;
  }

  .text-,
  .border- {
    &first {
      color: white !important;
      border-color: #1d45c2 !important;
      background-color: #1d45c2 !important;
    }

    &second {
      color: white !important;
      border-color: #1a6a8b !important;
      background-color: #1a6a8b !important;
    }

    &third {
      color: white !important;
      border-color: #1b8e5c !important;
      background-color: #1b8e5c !important;
    }

    &fourth {
      color: white !important;
      border-color: #1da939 !important;
      background-color: #1da939 !important;
    }
  }

  .card {
    width: 41rem;
    height: 64rem;
  }

  .fs-25 {
    font-size: 2.5rem;
  }

  .card_img-width_first {
    width: 37rem;
    top: 4.9rem;
    right: 0;
    border-radius: 50rem;
  }

  .card_img-width_second {
    width: 41.1rem;
    top: 5.1rem;
    right: 0;
    border-radius: 0 21rem 21rem;
  }

  .card_img-width_third {
    width: 33.9rem;
    top: -2.9rem;
    right: 2rem;
  }

  .card-hover_first:hover {
    box-shadow: 0 0 15px #5674d1;
    transition: box-shadow 0.2s;
  }

  .card-hover_second:hover {
    box-shadow: 0 0 15px #538fa8;
    transition: box-shadow 0.2s;
  }

  .card-hover_third:hover {
    box-shadow: 0 0 15px #1da939;
    transition: box-shadow 0.2s;
  }

  .rounded-5 {
    border-radius: 5.5rem !important;
  }

  .btn-first {
    background-color: #1d45c2;
    border: 3px solid #1d45c2 !important;

    &.text-white:hover {
      color: #1d45c2 !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .btn-second {
    background-color: #1a6a8b;
    border: 3px solid #1a6a8b !important;

    &.text-white:hover {
      color: #1a6a8b !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .btn-third {
    background-color: #1b8e5c;
    border: 3px solid #1b8e5c !important;

    &.text-white:hover {
      color: #1b8e5c !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .btn-fourth {
    background-color: #1da939;
    border: 3px solid #1da939 !important;

    &.text-white:hover {
      color: #1da939 !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .services-title {
    padding-bottom: 5rem;
  }

  .gap-10 {
    gap: 10rem;
  }

  @media (min-width: 570px) {
    height: 210rem;
    .card {
      width: 41rem;
      height: 63.8rem;
    }

    .card-body {
      margin-top: 1.8rem;
    }

    .car-text {
      margin-top: 2rem;
    }

    .gap-10 {
      gap: 9rem;
    }
  }

  @media (min-width: 768px) {
    height: 260rem;
    padding-top: 20rem;
    padding-bottom: 20rem;

    .services-title-mb h3 {
      padding: 0 3rem 15rem;
      text-align: start;
    }

    .card {
      width: 50rem;
      height: 80rem;
    }

    .card_img-width_first {
      width: 47rem;
      top: 5.7rem;
      right: 0rem;
    }

    .card_img-width_second {
      width: 50rem;
      top: 7.4rem;
      right: 0.1rem;
    }

    .card_img-width_third {
      width: 49.1rem;
      top: -5rem;
      right: 2.5rem;
    }

    .car-text {
      margin-top: 4.5rem;
    }

    .car-mt {
      margin-top: 4rem;
    }

    .gap-10 {
      gap: 25rem;
    }
  }

  @media (min-width: 992px) {
    height: 130vh;
    .card {
      width: 36rem;
      height: 59rem;
    }

    .card_img-width_first {
      width: 36rem;
      top: 5rem;
      left: -0.5rem;
    }

    .card_img-width_second {
      border-radius: 0 21rem 21rem;
      width: 35.9rem;
      top: 11.2rem;
      right: 0.6rem;
    }

    .card_img-width_third {
      width: 35.9rem;
      top: -8.4rem;
      right: 3rem;
    }
  }
`;


