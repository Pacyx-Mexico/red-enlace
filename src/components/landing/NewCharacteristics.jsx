import styled from "styled-components";
import { Image } from "react-bootstrap";
// import { GreenStain } from "../../assets/backgrounds";

export const NewCharacteristics = () => {
  return (
    <CharacteristicsSection className="position-relative">
      <div className="services-title container text-center">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-normal">Complementamos<br/> <span className="text-dark fw-bold bold-fs">tu protección</span></span>
        </h3>
      </div>
      <div className="container">
        <div className="d-flex flex-row">
          <ul>
            <li>
              Procesos eficientes
            </li>
            <li>
              Productos a la medida
            </li>
          </ul>
        </div>
      </div>
      {/* <div className=" container w-50 position-absolute RE_img_bg">
        <GreenStain />
      </div> */}
    </CharacteristicsSection>
  );
};

const CharacteristicsSection = styled.section`
  height: 90rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .green_stain_bg {
    z-index: 1;
    height: 90%;
    width: 75%;
    top: 16rem;
    opacity: 0.9;
  }

  .bold-fs {
    font-size: 8rem;
  }
`;
