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
        <div className="container-fluid mt-5">
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
                to="/reclamacion-de-siniestro-auto"
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
  height: 110rem;
  padding-top: 8.5rem;
  padding-bottom: 10rem;

  @media (min-width: 992px) {
    .icon-cruz {
      background: #647dd7;
      height: 80rem;
    }

    .fs-35 {
      font-size: 3.5rem;
    }
  }
`;
