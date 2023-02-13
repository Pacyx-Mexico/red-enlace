import styled from "styled-components";
import { Image } from "react-bootstrap";
import { RedEnlaceBg } from "../../assets/backgrounds";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Hero = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const scrollToSection = () => {
    scroll.scrollTo("productos", {
      containerId: "productos",
    });
  };

  return (
    <HeroContainer className="home position-relative" id="home">
      <Image
        className="man_img-bg position-absolute d-none d-lg-block"
        src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/PrincipalHero.png"}
        alt="Hombre sonriente cruzado de brazos con camisa blanca"
      />
      <div className="position-absolute d-none d-lg-block z-index-15">
        <div onClick={scrollTop}>
          <ScrollLink
            to="productos"
            spy={false}
            hashSpy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="color-white"
            activeClass="some-active-class"
          >
            <button className="button-hero rounded-pill pt-1">Cotizar</button>
          </ScrollLink>
        </div>
      </div>
      <div className="position-absolute d-lg-none z-index-15">
        <div onClick={scrollTop}>
          <ScrollLink
            to="productos"
            spy={false}
            hashSpy={true}
            smooth={true}
            offset={560}
            duration={500}
            className="color-white"
            activeClass="some-active-class"
          >
            <button className="button-hero rounded-pill pt-1">Cotizar</button>
          </ScrollLink>
        </div>
      </div>
      <div className="align-items-start flex-column position-absolute top-75 w-50 d-none d-lg-flex home__info">
          <h2 className="mb-4 pr-xxl-5 fw-bold z-index-3 text-primary text-start h2-heading">
            Ahorra <br />
            en tu póliza <br />
            de seguro
          </h2>
          <p className="mb-4 mb-md-5 lh-base z-index-3 hero_subtitle">
            con devolución de <br />
            deducible
          </p>
      </div>

      <div className="d-flex align-items-center justify-content-center position-absolute w-100 d-lg-none">
        <div className="home__info-mb d-flex flex-column justify-content-center align-items-center">
          <h2 className="pr-xxl-5 fw-bold z-index text-primary h1-heading primary_title">
            Ahorra
          </h2>
          <span className="text-primary text-center primary_subtitle fw-bold lh-sm">
            En tu póliza de <br />
            seguro
          </span>
          <p className="mb-4 mb-md-5 lh-base z-index-3 hero_subtitle-mb">
            Con devolución de <br />
            deducible
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center z-index-2 position-absolute w-100 h-100  d-lg-none">
        <Image
          className="man_img-mb position-relative"
          src={
            "https://elementos-red-enlace.s3.amazonaws.com/Landing/hombre-mobile.png"
          }
          alt="Hombre sonriente cruzado de brazos con camisa blanca"
        />
        <Image
          className="gradient_img_bg_sm position-absolute d-lg-none"
          src={
            "https://elementos-red-enlace.s3.amazonaws.com/Landing/gradient-image-bg.png"
          }
          alt="fondo Gradiente"
        />
        <Image
          className="redlogo position-absolute"
          src={
            "https://elementos-red-enlace.s3.amazonaws.com/Landing/RedLogo.png"
          }
          alt="fondo Gradiente"
        />
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-color: #fff;
  height: 100vh;
  .gradient_img_bg {
    z-index: 2;
    height: 78.5%;
    width: 66%;
    bottom: 0rem;
    opacity: 0.9;
  }

  .redenlace_logo {
    z-index: 1;
    height: 50rem;
    width: auto;
    left: 90rem;
    opacity: 0.1;
  }

  .home__info {
    z-index: 3;
    bottom: 3.5%;
    left: 4%;
  }

  .z-index-3 {
    z-index: 3;
  }

  .z-index-15 {
    z-index: 15;
    top: 89%;
    left: 27rem;
  }

  .button-hero {
    height: 5.5rem;
    min-width: auto;
    padding: 0 3rem;
    background: #fff;
    color: #5872c4;
    border: 1px solid #5872c4;
    font-size: 2.3rem;
    font-weight: 400;
    transition: all ease 0.3s;
  }

  .button-hero:hover {
    background-color: #5872c4;
    color: #fff;
  }
  .man_img-bg {
    z-index: 2;
    height: 88%;
    width: auto;
    bottom: 0;
    right: 0;
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
    width: 47% !important;
    top: 30%;
    opacity: 0.1;
    right: 0;
  }
  .hero_subtitle {
    position: relative;
    font-size: 3.4rem;
    font-weight: 400;
    line-height: 2rem;
    z-index: 2;
    text-align: start;
    color: #5CA689;
  }

  @media (max-width: 992px) {
    height: 168rem;
    .gradient_img_bg_sm {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 112rem;
    }

    .z-index-15 {
      z-index: 15;
      top: 90%;
      left: 40%;
    }

    .hero_subtitle-mb {
      font-size: 20px;
      font-weight: 400;
      z-index: 5;
      text-align: center;
      color: #5CA689;
      position: relative;
      top: 75rem;
  }

    .RE_img_bg {
      display: none;
    }

    .primary_title {
      font-size: 90px;
      height: 18rem;
    }

    .primary_subtitle {
      font-size: 32px;
    }

    .home__info-mb {
      position: absolute;
      top: 15rem;
    }

    .man_img-mb {
      bottom: -67.1rem;
      left: 0;
      width: auto;
      height: 60%;
      z-index: 4;
    }

    .redlogo {
      bottom: 0;
      left: 0;
      z-index: 15;
    }
  }
`;