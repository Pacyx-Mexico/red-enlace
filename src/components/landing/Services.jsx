import styled from "styled-components";
import {
  MedicineIcon,
  MedicalExpensesIcon,
  CarIcon,
  UserPolicyMontain,
} from "../../assets/icons";
import { Link } from "react-router-dom";

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
      <div className="services-title container-fluid text-center d-none d-md-block">
        <h3 className="pb-2 fw-semi-bold text-dark mt-5">
          <span className="text-lile">Protege</span> a los que más quieres y
          <br />
          <span className="text-lile">ahorra</span> en el proceso
        </h3>
      </div>
      <div className="services-title-mb container-fluid text-start sm-text-start d-md-none">
        <h3 className="fw-semi-bold text-dark">
          <span className="text-lile fw-bold">Protege</span> a los que más
          quieres y <span className="text-lile fw-bold">ahorra</span> en el
          proceso
        </h3>
      </div>
      <div className="container-fluid py-3 position-relative d-none d-md-block">
        <div className="row px-5 mx-5 mr-5 ml-5 d-flex justify-content-around gap-5">
          <div className="col-auto mb-5 pb-5">
            <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100 text-decoration-none">
              <div className="card border border-4 border-first rounded-5 text-center opacity-75 position-relative card-hover_first">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-gastos-medicos.png" alt="Gastos medicos hombre" className="card_img-width card_img-width_first position-relative bottom-0 mx-auto"/>
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center w-100">
                <p className="card-title fw-normal lh-sm text-center fs-2">
                  Devolución de deducible<br />
                  Gastos Médicos
                </p>
              </div>
            </Link>
          </div>
          <div className="col-auto mb-5 pb-5">
            <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100 text-decoration-none">
              <div className="card border border-4 border-second rounded-5 text-center opacity-75 position-relative card-hover_second">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-autos.png" alt="hombre auto" className="card_img-width card_img-width_second position-relative bottom-0 mx-auto"/>
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center w-100">
                <p className="card-title fw-normal lh-sm text-center fs-2">
                  Devolución de deducible<br />
                  Autos
                </p>
              </div>
            </Link>
          </div>
          <div className="col-auto mb-5 pb-5">
            <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100 text-decoration-none">
              <div className="card border border-4 border-fourth rounded-5 text-center opacity-75 position-relative card-hover_third">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/mujer-enlaces.png" alt="hombre auto" className="card_img-width card_img-width_third position-relative bottom-0 mx-auto"/>
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center w-100">
                <p className="card-title fw-normal lh-sm text-center fs-2">
                  Enlaces
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid py-3 position-relative d-md-none">
        <div className="row px-5 mx-5 mr-5 ml-5 d-flex justify-content-between">
          <div className="d-flex justify-content-center gap-10 px-5">
            <div className="col-auto mb-5 pb-5">
              <div className="card border d-flex justify-content-center align-items-center border-4 border-second rounded-5 py-5 px-5 text-center opacity-75">
                <div className="icon-width">
                  <MedicineIcon />
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-normal lh-sm text-first fs-2">
                    Devolución de <br />
                    deducible Gastos
                    <br /> Médicos
                  </p>
                </div>
              </div>
              <div className="mt-5 d-flex w-100">
                <Link to="/deducible-gastos-medicos" className="w-100">
                  <button className="btn btn-lg btn-first rounded-pill fw-bold mx-auto w-100 text-white opacity-75 fs-1">
                    Cotizar
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="card border border-4 border-second rounded-5 py-5 px-5 text-center opacity-75 d-flex justify-content-center align-items-center">
                <div className="icon-width car-mt">
                  <CarIcon />
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-normal car-text lh-sm text-second fs-2">
                    Devolución de <br />
                    deducible Autos
                  </p>
                </div>
              </div>
              <div className="mt-5 d-flex w-100">
                <button className="btn btn-lg btn-second rounded-pill fw-bold mx-auto w-100 text-white opacity-75 fs-1">
                  Cotizar
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-10 px-5">
            <div className="col-auto">
              <div className="card border border-4 border-fourth rounded-5 py-5 px-5 text-center opacity-75 d-flex justify-content-center align-items-center">
                <div className="icon-width">
                  <MedicalExpensesIcon />
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-normal lh-sm text-fourth fs-2">
                    Gastos Médicos
                  </p>
                </div>
              </div>
              <div className="mt-5 d-flex w-100">
                <button className="btn btn-lg btn-fourth rounded-pill fw-bold mx-auto w-100 text-white opacity-75 fs-1">
                  Cotizar
                </button>
              </div>
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
  .text-lile {
    color: #6983d6;
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .card-title {
    margin-bottom: 0rem;
    width: 25.95rem;
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
    width: 35rem;
    height: 45rem;

    .card_img-width {
      width: 35.2rem;
    }
  }

  .card_img-width_first {
    top: -7.8rem;
    right: 1rem;

  }

  .card_img-width_second {
    top: -1.8rem;
    right: 0.8rem;
  }

  .card_img-width_third {
    width: 37.2rem !important;
    top: -7.3rem;
    right: 4rem;
  }

  .card-hover_first:hover {
    box-shadow: 0 0 15px #5674d1;
    transition: box-shadow .2s;
  }

  .card-hover_second:hover {
    box-shadow: 0 0 15px #538fa8;
    transition: box-shadow .2s;
  }

  .card-hover_third:hover {
    box-shadow: 0 0 15px #1da939;
    transition: box-shadow .2s;
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

  @media (max-width: 900px) {
    .card {
      width: 36rem;
      height: 33rem;
    }
  }

  @media (max-width: 764px) {
    padding-top: 20rem;
    padding-bottom: 20rem;

    .services-title-mb h3 {
      padding: 0 3rem 15rem;
      text-align: start;
    }

    .card {
      width: 38rem;
      height: 40rem;
    }

    .card .icon-width {
      width: 20rem;
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
  @media (max-width: 600px) {
    .card {
      width: 30rem;
      height: 30rem;
    }

    .card-body {
      margin-top: 1.8rem;
    }

    .card .icon-width {
      width: 17rem;
    }

    .car-text {
      margin-top: 2rem;
    }

    .gap-10 {
      gap: 9rem;
    }
  }
`;
