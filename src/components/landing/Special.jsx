import styled from "styled-components";
import { Image } from "react-bootstrap";

export const Special = () => {
  return (
    <SpecialContainer className="position-relative overflow-hidden">
      <div className="container-fluid d-none d-md-block">
        <div className="py-5 my-xxl-5"></div>
        <div className="row pt-5 mt-5">
          <div className="col-lg-6 offset-xl-1 order-lg-2 d-flex">
            <Image
              className="gradient_img_bg position-absolute"
              src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/gradient-image-bg-right.png"}
              alt="Gradient background element"
            />
            <Image className="phone_img position-absolute" src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/phone.png"} alt="" />
          </div>
          <div className="col-lg-7 col-xl-6 offset-lg-1 d-flex flex-column justify-content-center align-items-center text-center text-lg-start">
            <h1 className="fw-normal mt-4">Contratación</h1>
            <h1 className="fw-bold">100% digital.</h1>
            <p className="text-secondary mt-2 mb-5 fs-1 fw-light">
              Somos la única opción de contratación <br />
              100% digital de principio a fin.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex flex-column justify-content-center align-items-center text-center text-lg-start mb-5 pb-5">
            <h1 className="fw-normal mt-4 special__title-first d-md-none">
              Contratación
            </h1>
            <h1 className="fw-bold special__title-second d-md-none">
              100% digital.
            </h1>
          </div>
          <div className="col-lg-6 offset-xl-1 order-lg-2 d-flex">
            <Image
              className="gradient_img_bg position-absolute"
              src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/gradient-image-bg-right.png"}
              alt="Gradient background element"
            />
            <Image className="phone_img position-absolute" src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/phone.png"} alt="" />
          </div>
          <div className="d-flex flex-column align-items-center text-center text-lg-start position-absolute special__last-text d-md-none">
            <p className="mb-5 fs-1 fw-light d-md-none">
              Somos la única opción de contratación <br />
              <span className="fw-bold fst-italic d-md-none">
                100% digital de principio a fin.
              </span>
            </p>
          </div>
        </div>
      </div>
    </SpecialContainer>
  );
};

const SpecialContainer = styled.section`
  height: 80rem;

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .gradient_img_bg {
    z-index: 1;
    height: 80%;
    width: 45%;
    top: 4rem;
    right: 0rem;
    opacity: 0.9;
  }

  .phone_img {
    z-index: 2;
    height: 90%;
    width: auto;
    top: 1rem;
    right: 25rem;
  }

  @media (max-width:767px) {
    height: 170rem;
    .gradient_img_bg {
      z-index: 1;
      height: 56%;
      width: 90%;
      top: 25%;
    }

    .phone_img {
      z-index: 2;
      height: 70%;
      width: auto;
      top: 20%;
      left: 32%;
    }

    .special__title-first {
      font-size: 42px;
    }

    .special__title-second {
      font-size: 44px;
    }

    .special__last-text {
      bottom: 0;
    }
  }

  @media (max-width: 600px) {
    height: 160rem;

    .gradient_img_bg {
      z-index: 1;
      height: 45%;
      width: 100%;
      top: 48rem;
      opacity: 0.9;
    }

    .phone_img {
      z-index: 2;
      height: 65%;
      width: auto;
      top: 22%;
      left: 24%;
    }

    .special__title-first {
      font-size: 42px;
    }

    .special__title-second {
      font-size: 44px;
    }

    .special__last-text {
      bottom: 1px;
    }
  }

  @media (max-width: 500px) {
    .phone_img {
      left: 15%;
    }
  }
`;
