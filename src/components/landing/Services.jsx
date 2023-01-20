import styled from "styled-components";
import {
  MedicineIcon,
  MedicalExpensesIcon,
  CarIcon,
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
      <div className="d-flex justify-content-center flex-column d-none d-lg-block">
        <div className="text-center mt-5 pt-5 position-relative">
          <div className="position-relative">
            <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/HND2.png" alt="" className="hand hand-right position-absolute"/>
            <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/HND1.png" alt="" className="hand hand-left position-absolute"/>
          </div>
          <div className="primary-title-hdesk py-5 mt-5">
            <h2 className="fs-10 mb-5 pb-5 pt-5 mt-5 fw-normal">¿Qué nos hace únicos?</h2>
            <div className="d-flex py-5 flex-column bg-blue">
              <p className="fs-11 mt-5 pt-5 fw-normal text-white">
                Devolución <span className="fw-semibold">de deducible</span>
              </p>
              <p className="fs-25 fw-normal mb-5 pb-5 pt-5 mt-5 text-white">
              Somos la empresa pionera en la creación de asistencias <br />
              pensadas 100% en las necesitas en las necesidades de nuestros clientes. <br />
              Reescribimos la historia de las asistencias de seguros <br />
              para <span className="fw-semibold">reembolsar el pago de deducible</span> en caso de accidente<br />
              en tu auto, de enfermedad o en caso de ser hospitalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-blue mt-5 pt-5 d-none d-lg-block">
        <div className="services-title container-fluid text-center pt-1 pb-5">
          <h3 className="mb-5 fw-semi-bold text-dark">
          Conoce nuestros productos
          </h3>
        </div>
        <div className="container-fluid px-5 vh-100 position-relative d-none d-lg-block">
          <div className="row px-5 mb-5 mr-5 ml-5 d-flex justify-content-around gap-5">
            <div onClick={scrollTop} className="col-auto mb-5 pb-5">
              <Link
                to="/deducible-gastos-medicos"
                className="w-100 text-decoration-none"
              >
                <div className="card border border-4 border-first text-center position-relative card-hover_first">
                  <div className="position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-gastos-medicos.png"
                      alt="Gastos medicos hombre"
                      className="card_img-width card_img-width_first position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center w-100">
                  <p className="card-title card-title-lg fw-normal lh-sm text-center fs-25">
                    Devolución de deducible
                    <br />
                    Gastos Médicos
                  </p>
                </div>
              </Link>
            </div>
            <div onClick={scrollTop} className="col-auto mb-5 pb-5">
              <Link to="/deducible-autos" className="w-100 text-decoration-none">
                <div className="card border border-4 border-second text-center position-relative card-hover_second">
                  <div className="position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-autos.png"
                      alt="hombre auto"
                      className="card_img-width card_img-width_second position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center w-100">
                  <p className="card-title card-title-lg fw-normal lh-sm text-center fs-25">
                    Devolución de deducible
                    <br />
                    Autos
                  </p>
                </div>
              </Link>
            </div>
            <div onClick={scrollTop} className="col-auto mb-5 pb-5">
              <Link to="/enlace" className="w-100 text-decoration-none">
                <div className="card border border-4 border-fourth text-center position-relative card-hover_third">
                  <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                    <img
                      src="https://elementos-red-enlace.s3.amazonaws.com/Landing/mujer-enlaces.png"
                      alt="hombre auto"
                      className="card_img-width card_img-width_third position-relative bottom-0 mx-auto"
                    />
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center w-100">
                  <p className="card-title card-title-lg fw-normal lh-sm text-center fs-25">
                    Enlaces
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-3 position-relative d-lg-none">
      <div className="d-flex justify-content-center flex-column mb-lg pb-5">
        <div className="text-center mt-5 pt-5 position-relative">
          <div className="primary-title-h">
            <h2 className="fs-11 mb-5 pb-5 fw-bold">¿Qué nos hace únicos?</h2>
            <div className="d-flex py-5 flex-column bg-blue">
              <p className="fs-35 mt-5 pt-5 fw-normal text-white">
                Devolución <span className="fw-semibold">de deducible</span>
              </p>
              <p className="fs-1 fw-normal mb-5 py-5 px-5 mx-5 mt-5 text-white">
              Somos la empresa pionera en la creación de asistencias pensadas 100% en las necesitas en las necesidades de nuestros clientes.
              Reescribimos la historia de las asistencias de seguros para <span className="fw-semibold">reembolsar el pago de deducible</span> en caso de accidente en tu auto, de enfermedad o en caso de ser hospitalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="services-title-mb container-fluid text-center d-lg-none">
          <h4 className="fw-semi-bold fs-11 text-dar mb-5 pb-5 mt-5 pt-5">
            Conoce nuestros productos
          </h4>
        </div>
        <div className="flex-column px-5 mx-5 mr-5 ml-5 d-flex align-items-center justify-content-center gap-5 bg-gradient-blue">
          <div onClick={scrollTop} className="col-auto mb-5 pb-5 w-75">
            <Link
              to="/deducible-gastos-medicos"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-first text-center position-relative card-hover_first d-flex align-items-center justify-content-center mx-auto shadow-lg rounded-pill">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-gastos-medicos.png"
                    alt="Gastos medicos hombre"
                    className="card_img-width card_img-width_first position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <p className="card-title fw-normal lh-sm text-center fs-20 w-100">
                  Devolución de deducible
                  <br />
                  Gastos Médicos
                </p>
              </div>
            </Link>
          </div>
          <div onClick={scrollTop} className="col-auto mb-5 pb-5 w-75">
            <Link
              to="/deducible-autos"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-second text-center position-relative card-hover_second d-flex align-items-center justify-content-center mx-auto shadow-lg rounded-pill">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-autos.png"
                    alt="Gastos medicos hombre"
                    className="card_img-width card_img-width_second position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <p className="card-title fw-normal lh-sm text-center fs-20 w-100">
                  Devolución de deducible
                  <br />
                  Autos
                </p>
              </div>
            </Link>
          </div>
          <div onClick={scrollTop} className="col-auto mb-5 pb-5 w-75">
            <Link
              to="/enlace"
              className="w-100 text-decoration-none"
            >
              <div className="card border border-4 border-third text-center position-relative card-hover_third d-flex align-items-center justify-content-center mx-auto shadow-lg rounded-pill">
                <div className="icon-width position-absolute d-flex align-items-center justify-content-center">
                  <img
                    src="https://elementos-red-enlace.s3.amazonaws.com/Landing/mujer-enlaces.png"
                    alt="Gastos medicos hombre"
                    className="card_img-width card_img-width_third position-relative bottom-0 mx-auto"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <p className="card-title fw-normal lh-sm text-center fs-20 w-100">
                  Enlaces
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  overflow-y: hidden;
  padding-top: 10rem;
  padding-bottom: 10rem;
  overflow-x: hidden;
  .text-lile {
    color: #6983d6;
  }

  .bg-blue {
    background: #5371d1;
    position: relative;
    z-index: -1;
    margin: 0 5%;
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .card-title {
    margin-bottom: 0rem;
    color: #000000;
    font-size: 3.5rem;
  }

  .primary-title-h {
    margin-top: 10rem !important;
  }

  .mb-5 {
    margin-bottom: 5rem !important;
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

  .bg-gradient-blue {
    background-image: linear-gradient(#fff,#bec9eb);
    padding: 0 10rem;
    margin: 0 10rem;
    height: 100%;
  }

  .card_img-width_first {
    width: 39.2rem;
    top: 3rem;
    right: 0;
    border-radius: 41.5%;
  }

  .card_img-width_second {
    width: 41.1rem;
    top: 5.1rem;
    right: 0;
    border-radius: 0 21rem 21rem;
  }

  .card_img-width_third {
    width: 42.9rem;
    top: 2.3rem;
    right: 0.4rem;
    border-radius: 31rem;
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
    background-color: #1D45C2;
    border: 3px solid #1d45c2 !important;

    &.text-white:hover {
      color: #1d45c2 !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .btn-second {
    background-color: #6F87D2;
    border: 3px solid #6F87D2 !important;

    &.text-white:hover {
      color: #6F87D2 !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .btn-third {
    background-color: #409E75;
    border: 3px solid #409E75 !important;

    &.text-white:hover {
      color: #409E75 !important;
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

  .bg-gradient {
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .hand {
    z-index: -1;
    width: auto;
    height: 55rem;
  }

  .hand-left {
    right: -11%;
    top: 3rem;
    width: auto;
    height: 30rem;
  }

  .hand-right {
    left: -47px;
    top: 30rem;
    width: auto;
    height: 20rem;
  }

  .gap-10 {
    gap: 10rem;
  }  

  .fs-11 {
    font-size: 7.5rem;
    line-height: 9rem;
  }

  .fs-10 {
    font-size: 5rem;
  }
  
  .fs-35 {
    font-size: 5rem;
  }

  .fs-25 {
    font-size: 2rem;
  }

  @media (min-width: 576px) {
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

    .fs-25 {
      font-size: 2.5rem;
    }

    .hand-right {
      z-index: 1;
    left: 54.8%;
    top: 87%;
    width: auto;
    height: 20rem;
}
  }

  @media (min-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;

    .services-title-mb h3 {
      padding: 0 3rem 15rem;
      text-align: start;
    }

    .fs-25 {
      font-size: 2.5rem;
    }

    .card {
      width: 34rem;
      height: 54rem;
    }

    .card_img-width_first {
      width: 35.5rem;
      top: 0.7rem;
      right: 0rem;
      border-radius: 25rem;
    }

    .card_img-width_second {
      width: 33.6rem;
      top: 5.1rem;
      right: 0.1rem;
    }

    .card_img-width_third {
      width: 38rem;
      top: 0.8rem;
      right: 0.3rem;
      border-radius: 21rem;
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
    
    .hand-right {
      left: 65.8%;
      top: 87%;
      width: auto;
      height: 20.6%;
    }

    .hand-left {
      right: -8%;
      top: 17rem;
      width: auto;
      height: 63rem;
    }

    
    .primary-title-hdesk {
      height: 100vh;    
    }
  }

  @media (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
    height: 210vh;
    .card {
      width: 34rem;
      height: 53.5rem;
      border-radius: 50rem;
      opacity: .9;
    }

    .card_img-width_first {
      width: 35.5rem;
      top: 0.3rem;
      right: 1.6rem;
      border-radius: 19rem;
    }

    .primary-title-h {
      margin-top: 10rem !important;
    }

    .mb-5 {
      margin-bottom: 5rem !important;
    }

    .mb-lg {
      margin-bottom: 15rem;
    }

    .bg-blue {
      background: #5371d1;
      position: relative;
      z-index: -1;
    }

    .bg-gradient-blue {
      background-image: linear-gradient(#fff, #bec9eb);
      padding:0 10rem;
      margin:0 10rem;
      height: 90vh;
    }

    .fs-11 {
      font-size: 7.5rem;
      line-height: 9rem;
    }

    .fs-10- {
      font-size: 10rem;
    }

    .card_img-width_second {
      border-radius: 0 21rem 21rem;
      width: 34rem;
      top: 8.4rem;
      right: 0.6rem;
    }

    .card_img-width_third {
      width: 37rem;
      top: 1.5rem;
      right: 2.4rem;
      border-radius: 42rem;
    }

    .services-title {
      padding-top: 68rem;
      padding-bottom: 0;
    }

    .fs-10 {
      font-size: 5.5rem;
    }

    .bg-gradient {
      width: 100%;
      height: 300rem;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .fs-25 {
      font-size: 2.7rem;
      line-height: 3.4rem;
    }
    
    .hand {
      z-index: 1;
      width: auto;
      height: 55rem;
    }

    .hand-left {
      right: 63.9%;
      top: 20rem;
      width: 31.1%;
      height: auto;
    }

    .hand-right {
      left: 65%;
      top: 62rem;
      width: 30%;
      height: auto;
    }
  }
`;