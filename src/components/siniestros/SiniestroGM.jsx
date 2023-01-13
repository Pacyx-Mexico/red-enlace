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
        <div className="container-fluid mt-5">
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
                to="/reclamacion-de-siniestro-gm"
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
