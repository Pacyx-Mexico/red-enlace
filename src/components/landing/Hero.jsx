import styled from "styled-components";
import gradientBgNoOp from "../../assets/images/gradient-image-bg-no-op.png";
import man from "../../assets/images/hombre.png";
import gradientBg from "../../assets/images/gradient-image-bg.png";
import RedLogo from "../../assets/images/RedLogo.png";
import manMb from "../../assets/images/hombre-mobile.png";
import { Image } from "react-bootstrap";
import { RedEnlaceBg } from "../../assets/backgrounds";

export const Hero = () => {
  return (
    <HeroContainer className="home position-relative" id="home">
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block"
        src={ gradientBgNoOp }
        alt="Gradient background element"
      />
      <Image
        className="gradient_img_bg position-absolute d-none d-md-block"
        src={ gradientBgNoOp }
        alt="Gradient background element"
      />
      <Image className="man_img-bg position-absolute d-none d-md-block" src={ man } alt="" />
      <div className=" container w-50 position-absolute RE_img_bg d-none d-md-block">
        <RedEnlaceBg />
      </div>
      <div className="align-items-center position-absolute top-50 w-85 d-none d-md-block">
        <div className="home__info d-flex flex-column justify-content-center text-center align-items-center">
          <h2 className="mb-4 pr-xxl-5 fw-bold pt-5 mt-5 z-index text-primary h2-heading">
            Ahorro &nbsp;<span className="text-white"> fácil y seguro</span>
          </h2>
          <p className="text-white mb-4 mb-lg-5 hero_subtitle">
            te regresamos tu deducible
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center position-absolute w-100 d-sm-none">
        <div className="home__info-mb d-flex flex-column justify-content-center align-items-center">
          <h2 className="pr-xxl-5 fw-bold z-index text-primary h1-heading primary_title">
            Ahorro
          </h2>
          <span className="text-primary primary_subtitle fw-bold">fácil y seguro</span>
        </div>
      </div>

      <div className="d-flex justify-content-center z-index-2 position-absolute">
        <Image className="man_img-mb img-fluid d-sm-none position-relative" src={ manMb } alt="" />
        <Image
        className="gradient_img_bg_sm img-fluid position-absolute d-sm-none"
        src={ gradientBg }
        alt="Gradient background element"
        />
        <Image
        className="redlogo img-fluid position-absolute d-sm-none"
        src={ RedLogo }
        alt="Gradient background element"
        />
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
    width: 75%;
    top: 16rem;
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
  .text-primary {
    color: #314faf !important;
  }
  .RE_img_bg {
    z-index: 1;
    height: 40% !important;
    width: auto;
    top: 21rem;
    right: 0;
    opacity: 0.2;
  }
  .hero_subtitle {
    font-size: 3.4rem;
    font-weight: 400;
    line-height: 2rem;
    z-index: 2;
    margin-left: 30rem;
  }

  @media (max-width:576px) {
    height: 155rem;
    .gradient_img_bg_sm {
      left: 0;
      top: 47.3%;
      width: 100%;
      height: 112rem;
    }

    .RE_img_bg {
      display:none;
    }

    .primary_title {
      font-size: 90px;
      height: 18rem;
    }

    .primary_subtitle {
      font-size:32px;
    }

    .home__info-mb {
      position: absolute;
      top: 15rem;
    }

    .man_img-mb {
      top: 59rem;
      left: 0;
      right: 0;
      width: 90%;
      height: 60%;
      z-index:4
    }

    .z-index-2 {
      z-index:10;
    }

    .redlogo {
    top: 132rem;
    left: 0;
    z-index: 15;
    }
  }
`;