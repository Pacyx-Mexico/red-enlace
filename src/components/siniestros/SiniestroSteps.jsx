import styled from "styled-components";
import { Point } from "../../assets/icons";
import { NavLink, Link } from "react-router-dom";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";

export const SiniestroSteps = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <ServicesContainer className="position-relative">
      {/* {map.services(service => console.log(service))} */}
      <div className="services-title container-fluid text-center d-none d-lg-block">
        <h3 className="pb-2 fw-normal fs-40 text-dark mt-5">
          Sigue estos 3 sencillos pasos
        </h3>
      </div>
      <div className="container-fluid text-center d-lg-none">
        <h4 className="fw-semi-bold services-title-mb  text-dark mb-5 pb-5">
          Conoce nuestros productos
        </h4>
      </div>
      <div className="container-fluid position-relative d-none d-lg-block ms-10">
        <div className="flex-column d-flex w-50 justify-content-start gap-5">
          <div className="col-auto mb-5">
            <div className=" text-center card-hover_first">
              <div className="icon-width d-flex align-items-center">
                <Point />
                <h2 className="ms-5 number-fs  ">Paso 1</h2>
              </div>
            </div>
            <div className="ms-5 ps-3 d-flex w-100">
              <p className="card-title fw-normal lh-sm text-start mb-5 pb-5">
                Selecciona el producto
              </p>
            </div>
            <hr className="custom-hr" />
          </div>
          <div className="col-auto mb-5">
            <div className=" text-center card-hover_first">
              <div className="icon-width d-flex align-items-center">
                <Point />
                <h2 className="ms-5 number-fs  ">Paso 2</h2>
              </div>
            </div>
            <div className="ms-5 ps-3 d-flex w-100">
              <p className="card-title fw-normal lh-sm text-start mb-5 pb-5">
                Descarga y requisita los formatos correspondientes, no olvides
                firmarlos
              </p>
            </div>
            <hr className="custom-hr" />
          </div>
          <div className="col-auto mb-5">
            <div className=" text-center card-hover_first">
              <div className="icon-width d-flex align-items-center">
                <Point />
                <h2 className="ms-5 number-fs  ">Paso 3</h2>
              </div>
            </div>
            <div className="ms-5 ps-3 d-flex w-100">
              <p className="card-title fw-normal lh-sm text-start mb-5 pb-5">
                Completa tu información y adjunta la documentación solicitada
              </p>
            </div>
            <hr className="custom-hr" />
          </div>
        </div>
      </div>

      <div className="justify-content-center w-100 mt-5 pt-5 d-none d-lg-flex">
        <div onClick={scrollTop}>
          <Link
            to="/reclamacion-siniestros/select"
            className="headerTitle__btn"
          >
            <Button text="Reclamar siniestro" />
          </Link>
        </div>
      </div>

      <div className="container-fluid py-3 position-relative d-lg-none">
        <div className="flex-column px-5 mx-5 mr-5 ml-5 d-flex align-items-center justify-content-center gap-5">
          <div className="d-flex flex-column justify-content-center w-76">
            <div className="d-flex align-items-center justify-content-center gap-5">
              <div className="d-flex flex-row align-items-center gap-5 me-5 pe-5">
                <div className="d-flex flex-column justify-content-center align-items-center gap-5">
                  <div className="card border-0 rounded-5 text-center position-relative card-hover_first d-flex align-items-center justify-content-center mx-auto">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="icon-width d-flex align-items-center justify-content-center">
                        <h2 className="number-fs fw-normal">1</h2>
                      </div>
                    </div>
                  </div>
                  <div className="arrow d-flex justify-content-center my-5 opacity-75">
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="mb-5 pb-5 d-flex justify-content-center">
                  <p className="card-title fw-normal fs-30 lh-sm w-100 mb-5 pb-5">
                    Selecciona el producto
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center w-76">
            <div className="d-flex align-items-center justify-content-center gap-5">
              <div className="d-flex flex-row align-items-center gap-5 me-4">
                <div className="d-flex flex-column justify-content-center align-items-center gap-5">
                  <div className="card border-0 rounded-5 text-center position-relative card-hover_first d-flex align-items-center justify-content-center mx-auto">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="icon-width d-flex align-items-center justify-content-center">
                        <h2 className="number-fs fw-normal">2</h2>
                      </div>
                    </div>
                  </div>
                  <div className="arrow d-flex justify-content-center my-5 opacity-75">
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="mb-5 pb-5 d-flex justify-content-center">
                  <p className="card-title fw-normal fs-30 lh-sm w-100 mb-5 pb-5">
                    Descarga y requisita los <br />
                    formatos correspondientes, <br />
                    no olvides firmarlos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <NavLink
              onClick={scrollTop}
              to="/deducible-gastos-medicos"
              className="w-100 text-dark text-decoration-none"
            >
              <div className="d-flex flex-column justify-content-center w-76">
                <div className="d-flex align-items-center justify-content-center gap-5">
                  <div className="d-flex flex-row align-items-center gap-5 me-4">
                    <div className="d-flex flex-column justify-content-center align-items-center gap-5">
                      <div className="card border-0 rounded-5 text-center position-relative card-hover_first d-flex align-items-center justify-content-center mx-auto">
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="icon-width d-flex align-items-center justify-content-center">
                            <h2 className="number-fs fw-normal">3</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="card-title fw-normal fs-30 lh-sm w-100">
                        Completa tu información y <br />
                        adjunta la documentación <br />
                        solicitada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center w-100 mt-5 pt-5">
            <div onClick={scrollTop}>
              <Link
                to="/reclamacion-siniestros/select"
                className="headerTitle__btn"
              >
                <Button text="Reclamar siniestro" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  z-index: 2;
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
    font-size: 2.5rem;
  }

  .number-fs {
    font-size: 3.5rem;
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
    width: 30rem;
    height: 30rem;
    background: #e8ebfa;
  }

  .card_img-width_first {
    width: 31rem;
    top: -2.4rem;
    right: 0;
  }

  .card_img-width_second {
    width: 32rem;
    top: 0rem;
    right: 4.9rem;
  }

  .card_img-width_third {
    width: 33.9rem;
    top: -2.9rem;
    right: 2rem;
  }

  .rounded-5 {
    border-radius: 5.5rem !important;
  }

  .fs-30 {
    font-size: 3rem;
  }

  .arrow {
    width: 40%;
  }

  .arrow svg {
    width: auto;
    height: 5rem;
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

  .w-76 {
    width: 76rem;
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
    padding-bottom: 20rem;
  }

  .services-title-mb {
    font-size: 4.5rem;
  }

  .gap-10 {
    gap: 10rem;
  }

  @media (min-width: 576px) {
    .card {
      width: 41rem;
      height: 41rem;
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

    .card-title {
      font-size: 3.5rem;
    }

    .w-76 {
      width: 76rem;
    }
  }

  @media (min-width: 768px) {
    z-index: 2;
    padding-top: 20rem;
    padding-bottom: 20rem;

    .card {
      width: 50rem;
      height: 58rem;
    }

    .card_img-width_first {
      width: 44rem;
      top: -3.6rem;
      right: 0rem;
    }

    .card_img-width_second {
      width: 44rem;
      top: 0.9rem;
      right: 3.3rem;
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

    .card-title {
      font-size: 2.5rem;
    }

    .w-76 {
      width: 153rem;
    }
  }

  @media (min-width: 992px) {
    .card {
      width: 36rem;
      height: 42rem;
    }

    .custom-hr {
      height: 0.5rem;
      background: #c5e3d6;
      border-top: none;
      opacity: 1;
      border-radius: 20rem;
      margin: 0;
    }

    .card_img-width_first {
      width: 31rem;
      top: -4.5rem;
      left: 2rem;
    }

    .card_img-width_second {
      width: 32.3rem;
      top: -0.7rem;
      right: 0.9rem;
    }

    .ms-10 {
      margin-left: 13rem;
    }

    .card_img-width_third {
      width: 35.9rem;
      top: -8.4rem;
      right: 3rem;
    }

    .fs-40 {
      font-size: 4rem;
    }
  }
`;
