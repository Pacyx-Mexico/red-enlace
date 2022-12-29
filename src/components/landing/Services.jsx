import styled from "styled-components";
import {
  MedicineIcon,
  MedicalExpensesIcon,
  CarIcon,
} from "../../assets/icons";
import { NavLink } from "react-router-dom";

export const Services = () => {
  let services = [
    {
      border: "border-primary",
      icon: <MedicineIcon />,
      text: `Devolución de <br />deducible Gastos<br /> Médicos`,
      button: "btn-first",
    },
    {
      border: "border-second",
      icon: <CarIcon />,
      text: `Devolución de <br />deducible Autos`,
      button: "btn-second",
    },
    {
      border: "border-third",
      icon: <MedicalExpensesIcon />,
      text: `Al fin seguro`,
      button: "btn-third",
    },
    {
      border: "border-fourth",
      icon: <MedicalExpensesIcon />,
      text: `Gastos Médicos`,
      button: "btn-fourth",
    },
  ];
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <ServicesContainer>
      {/* {map.services(service => console.log(service))} */}
      <div className="services-title container-fluid text-center d-none d-lg-block">
        <h3 className="pb-2 fw-semi-bold text-dark mt-5">
          <span className="text-lile">Protege</span> a los que más quieres y
          <br />
          <span className="text-lile">ahorra</span> en el proceso
        </h3>
      </div>
      <div className="services-title-mb container-fluid text-center d-lg-none">
        <h4 className="fw-semi-bold text-dar mb-5 pb-5">
          Conoce nuestros productos
        </h4>
      </div>
      <div className="container-fluid py-3 position-relative d-none d-lg-block">
        <div className="row px-5 mx-5 mr-5 ml-5 d-flex justify-content-around gap-5">
          <div className="col-auto mb-5 pb-5">
            <NavLink
              onClick={scrollTop}
              to="/deducible-gastos-medicos"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-first rounded-5 text-center opacity-75 position-relative card-hover_first">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-gastos-medicos.png"
                    alt="Gastos medicos hombre"
                    className="card_img-width card_img-width_first position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center w-100">
                <p className="card-title fw-normal lh-sm text-center fs-2">
                  Devolución de deducible
                  <br />
                  Gastos Médicos
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-auto mb-5 pb-5">
            <NavLink onClick={ scrollTop } to="/siniestro" className="w-100 text-decoration-none">
              <div className="card border border-4 border-second rounded-5 text-center opacity-75 position-relative card-hover_second">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-autos.png"
                    alt="hombre auto"
                    className="card_img-width card_img-width_second position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center w-100">
                <p className="card-title fw-normal lh-sm text-center fs-2">
                  Devolución de deducible
                  <br />
                  Autos
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-auto mb-5 pb-5">
            <NavLink onClick={ scrollTop } to="/enlace" className="w-100 text-decoration-none">
              <div className="card border border-4 border-fourth rounded-5 text-center opacity-75 position-relative card-hover_third">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/mujer-enlaces.png"
                    alt="hombre auto"
                    className="card_img-width card_img-width_third position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center w-100">
                <p className="card-title fw-normal lh-sm text-center fs-2">
                  Enlaces
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container-fluid py-3 position-relative d-lg-none">
        <div className="flex-column px-5 mx-5 mr-5 ml-5 d-flex align-items-center justify-content-center gap-5">
          <div className="col-auto mb-5 pb-5 w-75">
            <NavLink
              onClick={scrollTop}
              to="/deducible-gastos-medicos"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-first rounded-5 text-center opacity-75 position-relative card-hover_first d-flex align-items-center justify-content-center mx-auto shadow-lg">
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
            </NavLink>
          </div>
          <div className="col-auto mb-5 pb-5 w-75">
            <NavLink
              onClick={scrollTop}
              to="/deducible-gastos-medicos"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-second rounded-5 text-center opacity-75 position-relative card-hover_second d-flex align-items-center justify-content-center mx-auto shadow-lg">
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
            </NavLink>
          </div>
          <div className="col-auto mb-5 pb-5 w-75">
            <NavLink
              onClick={scrollTop}
              to="/deducible-gastos-medicos"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-third rounded-5 text-center opacity-75 position-relative card-hover_third d-flex align-items-center justify-content-center mx-auto shadow-lg">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/mujer-enlaces.png"
                    alt="Gastos medicos hombre"
                    className="card_img-width card_img-width_third position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <p className="card-title fw-normal lh-sm text-center fs-2 w-100">
                  Enlaces
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
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
    height: 41rem;
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
    padding-bottom: 20rem;
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
  }

  @media (min-width: 768px) {
    padding-top: 20rem;
    padding-bottom: 20rem;

    .services-title-mb h3 {
      padding: 0 3rem 15rem;
      text-align: start;
    }

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
  }

  @media (min-width: 992px) {
    .card {
      width: 36rem;
      height: 42rem;
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

    .card_img-width_third {
      width: 35.9rem;
      top: -8.4rem;
      right: 3rem;
    }
  }
`;
