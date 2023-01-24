import styled from "styled-components";
import { Image } from "react-bootstrap";

export const HeroSiniestros = () => {
  return (
    <HeroContainer className="home position-relative" id="home">
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block mb-5 pb-5"
        src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/Group+737.png"}
        alt="Gradient background element"
      />
      <div className="align-items-center position-absolute top-50 w-100 d-none d-lg-flex ms-10">
        <div className="home__info d-flex flex-column justify-content-center text-start align-items-start">
          <h2 className="mb-4 pr-xxl-5 fw-normal z-index text-start h2-heading text-black">
            ¿Qué hacer en <br />
            caso de siniestro?
          </h2>
          <p className="mb-4 mb-lg-5 mt-5 hero_subtitle text-black">
            Ponemos a tu disposición todo lo necesario para la reclamación de un
            siniestro.
          </p>
        </div>

      </div>

      <div className="d-flex align-items-center justify-content-center position-absolute w-100 d-lg-none">
        <div className="home__info-mb d-flex flex-column justify-content-center w-100 align-items-center gap-5">
          <h2 className="pr-xxl-5 z-index fw-normal h2-heading primary_title">
            ¿Qué hacer en caso de <br />
            <span className="primary_title fw-normal">siniestro?</span>
          </h2>
          <p className="mb-4 mb-lg-5 hero_subtitle w-100 px-5 mt-5 lh-5">
            Ponemos a tu disposición todo lo necesario
            para la reclamación de un siniestro.
          </p>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 48rem;
  z-index: 2;
  .gradient_img_bg_sm {
    left: 0;
    bottom: 0;
    width: 100%;
    z-index:-1;
    height: 112rem;
  }

  .RE_img_bg {
    display: none;
  }

  .primary_title {
    font-size: 6rem;
  }

  .primary_subtitle {
    font-size: 32px;
  }

  .hero_subtitle {
    font-size: 3.5rem;
    font-weight: 400;
    color: #6f6f6f;
    text-align: center;
    line-height: 3rem;
    z-index: 2;
  }

  .home__info-mb {
    position: absolute;
    top: 20rem;
  }

  .man_img-mb {
    bottom: -67.1rem;
    left: 0;
    width: auto;
    height: 60%;
    z-index: 4;
  }

  .z-index-2 {
    z-index: 10;
  }

  .redlogo {
    bottom: 0;
    left: 0;
    z-index: 15;
  }

  @media (min-width: 768px) {
    height: 80rem;
    .gradient_img_bg {
      z-index: -1;
      height: 218.5vh;
      width: 35%;
      top: 0;
      right: 0;
      opacity: 0.9;
    }
  }

  @media (min-width: 992px) {
    background-color: #fff;

    .man_img-bg {
      z-index: 2;
      height: 90%;
      width: auto;
      top: 9.6rem;
      left: -16rem;
    }
    .img-fluid {
      max-width: 100%;
      height: auto;
    }
    .w-85 {
      width: 85%;
    }
    .z-index {
      z-index: 2;
    }
    .RE_img_bg {
      z-index: 1;
      top: 12%;
      right: 0;
      opacity: 1;
    }
    .hero_subtitle {
      font-size: 2.5rem;
      font-weight: 400;
      line-height: 2rem;
      z-index: 2;
    }
  }
`;

