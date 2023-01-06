import styled from "styled-components";
import { Image } from "react-bootstrap";
import siniestroGd from "../../assets/images/Siniestro-gd.png";

export const HeroSiniestros = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <HeroContainer className="home position-relative" id="home">
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block mb-5 pb-5"
        src={siniestroGd}
        alt="Gradient background element"
      />
      <div className="align-items-center position-absolute top-50 w-100 d-none d-md-block">
        <div className="home__info d-flex flex-column justify-content-center text-center align-items-center">
          <h2 className="mb-4 pr-xxl-5 fw-normal z-index  h2-heading text-black">
            ¿Qué hacer en <br />
            caso de <span className="text-black fw-bold">siniestro?</span>
          </h2>
          <p className="mb-4 mb-lg-5 hero_subtitle text-black">
            Ponemos a tu disposición todo lo necesario para la reclamación de un
            siniestro.
          </p>
        </div>

      </div>

      <div className="d-flex align-items-center justify-content-center position-absolute w-100 d-md-none">
        <div className="home__info-mb d-flex flex-column justify-content-center align-items-center">
          <h2 className="pr-xxl-5 fw-normal z-index  h2-heading primary_title">
            ¿Qué hacer en caso de <br />
          </h2>
          <span className=" primary_title fw-bold">siniestro?</span>
          <p className="mb-4 mb-lg-5 hero_subtitle mt-5">
            Ponemos a tu disposición todo lo necesario <br />
            para la reclamación de un siniestro.
          </p>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-color: #fff;
  height: 100rem;
  .gradient_img_bg {
    z-index: 1;
    height: 90%;
    width: auto;
    top: 16rem;
    right: 0;
    opacity: 0.9;
  }
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
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 48rem;
    .gradient_img_bg_sm {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 112rem;
    }

    .RE_img_bg {
      display: none;
    }

    .primary_title {
      font-size: 7rem;
      height: 8rem;
    }

    .primary_subtitle {
      font-size: 32px;
    }

    .hero_subtitle {
      font-size: 2.5rem;
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
  }
`;
