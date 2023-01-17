import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import { CarIcon } from "../../assets/icons";

export const SiniestroAuto = () => {
  return (
    <>
      <Navbar />
      <SiniestroAutoContainer>
        <div className="container-fluid mt-5 d-none d-md-block">
          <div className="d-flex row h-100">
            <div className="col-md-3 icon-cruz d-flex justify-content-center flex-column align-items-center">
              <div className="w-50 mb-5">
                <CarIcon />
              </div>
              <p className="text-white fs-1 text-center">
                Devolución de <br />
                deducible Autos <br />
              </p>
            </div>
            <div className="col-md-9 d-flex justify-content-center flex-column align-items-center gap-5">
              <p className="fs-35 text-center pb-5 mb-5">
                Que sea el golpe de tu coche, <br />
                <span className="fw-bold">No sea un golpe en tu cartera</span>
              </p>
              <Link
                to="/reclamacion-siniestros/auto-form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                /* onClick={accept} */
              >
                <Button text="Siguiente" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 d-md-none">
          <div className="d-flex row h-100">
            <div className="icon-cruz d-flex flex-column mt-5 pt-5">
              <p className="fs-20 fst-italic text-center mb-5 pb-5">
                Devolución de <br />
                deducible Autos <br />
              </p>
              <div className="w-50 mb-5 car-icon my-5 py-5">
                <CarIcon />
              </div>
            </div>
            <div className="col-md-9 d-flex justify-content-center flex-column align-items-center gap-5">
              <p className="fs-35 text-center pb-5 mb-5 text-secondary mt-5 pt-5">
                Que sea el golpe de tu coche, <br />
                <span className="fw-bold">No sea un golpe en tu cartera</span>
              </p>
              <Link
                to="/reclamacion-siniestros/auto-form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                /* onClick={accept} */
              >
                <Button text="Siguiente" />
              </Link>
            </div>
          </div>
        </div>
      </SiniestroAutoContainer>
      <Footer />
    </>
  );
};

const SiniestroAutoContainer = styled.section`
  height: 100vh;
  padding-top: 8.5rem;
  padding-bottom: 10rem;

  .icon-cruz {
    background: #FFF; 
  }

  .car-icon {
    position: relative;
    right: 12rem;
  }

  .fs-35 {
    font-size: 3.5rem;
  }

  svg path,
  svg circle {
    fill: #5F93A9;
  }

  .fs-20 {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    height: 100vh;
    svg path,
    svg circle {
    fill: #FFF;
  }

  .car-icon {
    position: relative;
    right: 25rem;
  }

  .icon-cruz {
      background: #5F93A9;
      height: 80rem;
    }
  }

  @media (min-width: 992px) {
    height: 110vh;
    .icon-cruz {
      background: #5F93A9;
      height: 80rem;
    }

    .fs-35 {
      font-size: 3.5rem;
    }
  }
`;
