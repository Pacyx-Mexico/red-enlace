import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Button from "../Button";
import { MedicineIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

export const SiniestroGM = () => {
  return (
    <>
      <Navbar />
      <SiniestroGMContainer>
        <div className="container-fluid mt-5 d-none d-md-block">
          <div className="d-flex row h-100">
            <div className="col-md-3 icon-cruz d-flex justify-content-center flex-column align-items-center">
              <div className="w-50 mb-5">
                <MedicineIcon />
              </div>
              <p className="text-white fs-1 text-center">
                Devolución de <br />
                deducible Gastos <br />
                Médicos
              </p>
            </div>
            <div className="col-md-9 d-flex justify-content-center flex-column align-items-center gap-5">
              <p className="fs-35 text-center pb-5 mb-5">
                Para que la única recuperación por <br />
                la que te preocupes <span className="fw-bold">sea la tuya</span>
              </p>
              <Link
                to="/reclamacion-siniestros/gastos-medicos-form"
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
                deducible Gastos <br />
                Médicos
              </p>
              <div className="w-50 mb-5 car-icon my-5 py-5">
                <MedicineIcon />
              </div>
            </div>
            <div className="col-md-9 d-flex justify-content-center flex-column align-items-center gap-5">
              <p className="fs-35 text-center pb-5 mb-5 text-secondary mt-5 pt-5">
              Para que la única recuperación por <br />
                la que te preocupes <span className="fw-bold">sea la tuya</span>
              </p>
              <Link
                to="/reclamacion-siniestros/gastos-medicos-form"
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
      </SiniestroGMContainer>
      <Footer />
    </>
  );
};

const SiniestroGMContainer = styled.section`
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
