import styled from "styled-components";
import gradientImageBg from "../../assets/images/gradient-image-bg-right.png";
import phone from "../../assets/images/phone.png";
import { Image } from "react-bootstrap";

export const DevolucionDeducible = () => {
  return (
    <SpecialContainer className="position-relative overflow-hidden">
      <div className="container-fluid">
        <div className="py-5 my-xxl-5"></div>
        <div className="row pt-5 mt-5">
          <div className="col-lg-7 col-xl-6 offset-lg-1 d-flex flex-column justify-content-end align-items-end text-end text-lg-end">
            <h1 className="fw-normal mt-4">Contratación</h1>
            <h1 className="fw-bold">100% digital.</h1>
            <p className="text-secondary mt-2 mb-5 fs-1 fw-light">
              Somos la única opción de contratación <br />
              100% digital de principio a fin.
            </p>
          </div>
          <div className="col-lg-6 offset-xl-1 order-lg-2 d-flex">
            <Image
              className="gradient_img_bg position-absolute"
              src={gradientImageBg}
              alt="Gradient background element"
            />
            <Image className="phone_img position-absolute" src={phone} alt="" />
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
    left: 0rem;
    opacity: 0.9;
  }

  .phone_img {
    z-index: 2;
    height: 90%;
    width: auto;
    top: 1rem;
    left: 25rem;
  }
`;