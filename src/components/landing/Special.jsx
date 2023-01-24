import styled from "styled-components";
import { Image } from "react-bootstrap";

export const Special = () => {
  return (
    <SpecialContainer className="position-relative overflow-hidden">
      <div className="container-fluid h-100 d-none d-lg-block">
        <div className="d-flex h-75 pt-5 mt-5">
          <div className="position relative">
            <Image
              className="gradient_img_bg position-absolute"
              src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/gradient-image-bg-right.png"}
              alt="Gradient background element"
            />
            <Image className="phone_img position-absolute" src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/phone.png"} alt="" />
          </div>
          <div className="col-lg-7 col-xl-6 offset-lg-1 d-flex flex-column justify-content-center align-items-start text-start text-lg-start">
            <h1 className="fw-normal mt-4">Contratación</h1>
            <h1 className="fw-bold">100% digital.</h1>
            <p className="text-secondary mt-2 mb-5 fs-30 fw-light">
              Somos la única opción de contratación <br />
              100% digital de principio a fin.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid d-lg-none h-100">
        <div className="row h-100">
          <div className="position-relative d-flex flex-column justify-content-between z-index-custom">
            <div className="d-flex flex-column justify-content-center align-items-center text-center text-lg-start mb-5 pb-5">
              <h1 className="fw-normal mt-4 special__title-first">
                Contratación
              </h1>
              <h1 className="fw-bold special__title-second">
                100% digital.
              </h1>
            </div>
            <div className="d-flex">
            <Image
              className="gradient_img_bg position-absolute"
              src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/gradient-image-bg-right.png"}
              alt="Gradient background element"
            />
            <Image className="phone_img position-absolute" src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/phone.png"} alt="" />
            </div>
            <div className="d-flex flex-column align-items-center text-center special__last-text">
              <p className="mb-5 fs-30 fw-light">
                Somos la única opción de contratación <br />
                <span className="fw-bold fst-italic">
                  100% digital de principio a fin.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SpecialContainer>
  );
};

const SpecialContainer = styled.section`
  height: 100rem;

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .gradient_img_bg {
    z-index: -2;
    height: 55%;
    width: 90%;
    top: 25%;
    right: 0;  
  }

  .fs-30 {
    font-size: 3rem;
  }

  .phone_img {
    z-index: -1;
    height: 67%;
    width: auto;
    top: 21%;
    left: 27%;
  }

  @media (min-width: 570px) {
    height: 160rem;

    .gradient_img_bg {
      z-index: 1;
      height: 55%;
      width: 95%;
      top: 36%;
      opacity: 0.9;
    }

    .phone_img {
      z-index: 2;
      height: 60%;
      width: auto;
      top: 35%;
      left: 35%;
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

  @media (min-width:768px) {
    height: 180rem;
    .gradient_img_bg {
      z-index: -2;
      height: 55%;
      width: 85%;
      top: 37%;
      right: 0rem;
      opacity: 0.9;
    }

    .phone_img {
      z-index: -1;
      height: 65%;
      width: auto;
      top: 33%;
      left: 35%;
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

  @media (min-width: 992px) {
    height: 100rem;
    .gradient_img_bg {
      z-index: -2;
      height: 65%;
      width: 60%;
      top: 10%;
      right: 9.5rem;
      opacity: 0.9;
    }

    .phone_img {
      z-index: -1;
      height: 83%;
      width: auto;
      top: 3%;
      left: 55%;
    }
  }
`;
