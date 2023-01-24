import { StarIcon } from "../../assets/icons";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RedEnlaceBgHero } from "../../assets/backgrounds";
import { Pagination, Navigation } from "swiper";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

export const Testimonies = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(40%,0)" },
    to: [{ transform: "translate(0%,0)" }, { transform: "translate(40%,0)" }],
    config: { duration: 5000 },
    reset: true,
    // reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  const testimonials = [
    {
      name: "Carla",
      city: "CDMX",
      text: "Con Red Enlace pude renovar mi póliza de gastos médicos a menor costo.",
    },
    {
      name: "Raúl",
      city: "Guadalajara",
      text: "Cuando lo necesité estuvieron siempre al pendiente de mi siniestro.",
    },
    {
      name: "Diana",
      city: "California",
      text: "Me gusta la facilidad para cotizar y contratar.",
    },
  ];
  return (
    <TestimonialsSection className="d-flex align-items-center">
      <div className="postion-relative">
        <div className=" container position-absolute RE_img_bg d-none d-md-block">
          <RedEnlaceBgHero />
        </div>
      </div>
      <div className="container position-relative d-none d-md-block">
        <div className="testimonials__title mb-5 pb-5">
          <h3 className="text-center fw-normal fs-55 text-dark">Testimoniales</h3>
          <div className="d-flex flex-row justify-content-center">
            <div className="m-3">
              <StarIcon />
            </div>
            <div className="m-3">
              <StarIcon />
            </div>
            <div className="m-3">
              <StarIcon />
            </div>
            <div className="m-3">
              <StarIcon />
            </div>
            <div className="m-3">
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="container" key={key}>
          <animated.div style={scrolling}>
            <div className="d-flex flex-row">
              <div className="d-flex">
                <div className="testimonials__carousel-bg card border-none shadow position-relative text-dark p-3 pt-xxl-5 px-md-5 mx-5 my-5">
                  <div className="testimonials__user-info my-4 my-lg-5 py-4 d-flex flex-column px-md-3 px-xl-5 gap-xl-5">
                    <div className="flex-column align-items-start justify-content-start flex-shrink-0">
                      <div className="text-start text-lg-start">
                        <h5 className="mb-1 text-start">
                          Carla
                          <span className="d-block">CDMX</span>
                        </h5>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-0 mb-3 mb-md-0 px-sm-1 px-xl-2">
                      <p className="text-center text-sm-start mb-0 fs-1 lh-base">
                        Con Red Enlace pude renovar mi póliza de gastos médicos
                        a menor costo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonials__carousel-bg card border-none shadow position-relative text-dark p-3 pt-xxl-5 px-md-5 mx-5 my-5">
                  <div className="testimonials__user-info my-4 my-lg-5 py-4 d-flex flex-column px-md-3 px-xl-5 gap-xl-5">
                    <div className="flex-column align-items-start justify-content-start flex-shrink-0">
                      <div className="text-start text-lg-start">
                        <h5 className="mb-1 text-start">
                          Raúl
                          <span className="d-block">Guadalajara</span>
                        </h5>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-0 mb-3 mb-md-0 px-sm-1 px-xl-2">
                      <p className="text-center text-sm-start mb-0 fs-1 lh-base">
                        Cuando lo necesité estuvieron siempre al pendiente de mi
                        siniestro.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonials__carousel-bg card border-none shadow position-relative text-dark p-3 pt-xxl-5 px-md-5 mx-5 my-5">
                  <div className="testimonials__user-info my-4 my-lg-5 py-4 d-flex flex-column px-md-3 px-xl-5 gap-xl-5">
                    <div className="flex-column align-items-start justify-content-start flex-shrink-0">
                      <div className="text-start text-lg-start">
                        <h5 className="mb-1 text-start">
                          Diana
                          <span className="d-block">California</span>
                        </h5>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-0 mb-3 mb-md-0 px-sm-1 px-xl-2">
                      <p className="text-center text-sm-start mb-0 fs-1 lh-base">
                        Me gusta la facilidad para cotizar y contratar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>

      <div className="container position-relative d-md-none px-0">
        <hr className="custom-hr "/>
        <div className="testimonials__title my-5 mx-5">
          <h2 className="text-center fw-normal mt-5 pt-5 lh-sm text-dark">
            Testimoniales
          </h2>
          <div className="d-flex flex-row justify-content-center">
            <div className="m-2">
              <StarIcon />
            </div>
            <div className="m-2">
              <StarIcon />
            </div>
            <div className="m-2">
              <StarIcon />
            </div>
            <div className="m-2">
              <StarIcon />
            </div>
            <div className="m-2">
              <StarIcon />
            </div>
          </div>
        </div>

        <div className="testimonials__carousel-bg card border-none shadow-lg position-relative text-dark p-3 mx-5 my-5">
          <div className="testimonials__user-info my-4 py-4 d-flex flex-row px-5">
            <div className="ps-1 align-items-start justify-content-start flex-shrink-0">
              <div className="text-start">
                <h5 className="mt-2 text-start fw-semibold">Diana</h5>
              </div>
            </div>
            <div className="ps-1 ms-5 d-flex justify-content-start flex-column">
              <span className="fs-1   fw-medium mb-3">California</span>
              <p className="mb-0 fs-2 lh-1">
                Me gusta la facilidad para cotizar y<br></br>contratar.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials__carousel-bg card border-none shadow-lg position-relative text-dark p-3 mx-5 my-5">
          <div className="testimonials__user-info my-4 py-4 d-flex flex-row px-5">
            <div className="ps-1 align-items-start justify-content-start flex-shrink-0">
              <div className="text-start">
                <h5 className="mt-2 text-start fw-semibold">Carla</h5>
              </div>
            </div>
            <div className="ps-1 ms-5 d-flex justify-content-start flex-column">
              <span className="fs-1   fw-medium mb-3">CDMX</span>
              <p className="mb-0 fs-2 lh-1">
                Con el Red Enlace pude renovar mi póliza de
                <br />
                gastos médicos a menor costo
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials__carousel-bg card border-none shadow-lg position-relative text-dark p-3 mx-5 my-5">
          <div className="testimonials__user-info my-4 py-4 d-flex flex-row px-5">
            <div className="ps-1 align-items-start justify-content-start flex-shrink-0">
              <div className="text-start">
                <h5 className="mt-2 text-start fw-semibold">Raúl</h5>
              </div>
            </div>
            <div className="ps-1 ms-5 d-flex justify-content-start flex-column">
              <span className="fs-1   fw-medium mb-3">
                Guadalajara
              </span>
              <p className="mb-0 fs-2 lh-1">
                Cuando lo necesite estuvieron siempre al
                <br />
                pendiente de mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  height: 80vh;
  padding-top: 5rem;
  padding-bottom: 10rem;
  overflow: hidden;

  .RE_img_bg {
    z-index: -1;
    width: 100%;
    height: 40% !important;
    opacity: 1;
    left: 6.5%;
  }

  .RE_img_bg-2 {
    width: 50%;
    height: 40% !important;
    opacity: 0.1;
    right: 0;
  }

  .testimonials__carousel-bg {
    box-shadow: rgba(255, 255, 255);
    border-radius: 30px;
    border: none;
    width: 30%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #707070;
  }

  .fs-55 {
    font-size: 5.5rem;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 5rem;
  }

  .testimonials__user-info p {
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 400;
    line-height: 1.875rem;
  }

  .testimonials__user-info span {
    font-size: 2.5rem;
    font-weight: 500;
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    height: 65vh;
    .testimonials__carousel-bg {
      border-radius: 4rem; 
      width: 95%;
    }

    .custom-hr {
      height: 2rem;
      width: 100%;
      background: #c7d1ef;
      border-top: none;
      opacity: 1;
      margin: 0;
    }
  }
`;