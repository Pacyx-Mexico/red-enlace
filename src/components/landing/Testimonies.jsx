import { StarIcon } from "../../assets/icons";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const Testimonies = () => {
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
    <TestimonialsSection>
      <div className="container position-relative d-none d-md-block">
        <div className="testimonials__title my-4">
          <h2 className="text-center fw-normal lh-sm text-dark">
            Testimoniales
          </h2>
          <div className="d-flex flex-row justify-content-center">
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            <SwiperSlide>
              <div className="testimonials__carousel-bg card border-none shadow position-relative text-dark p-3 pt-xxl-5 px-md-5 mx-5 my-5">
                <div className="testimonials__user-info my-4 my-lg-5 py-4 d-flex flex-column px-md-3 px-xl-5 gap-xl-5">
                  <div className="flex-column align-items-start justify-content-start flex-shrink-0">
                    <div className="text-start text-lg-start">
                      <h5 className="mb-1 text-start">
                        Carla
                        <span className="d-block fs-1">CDMX</span>
                      </h5>
                    </div>
                  </div>
                  <div className="mt-4 mt-md-0 mb-3 mb-md-0 px-sm-1 px-xl-2">
                    <p className="text-center text-sm-start mb-0 fs-2 lh-1">
                      Con Red Enlace pude renovar mi póliza de gastos médicos a
                      menor costo.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          }
          <SwiperSlide>
            <div className="testimonials__carousel-bg card border-none shadow position-relative text-dark p-3 pt-xxl-5 px-md-5 mx-5 my-5">
              <div className="testimonials__user-info my-4 my-lg-5 py-4 d-flex flex-column px-md-3 px-xl-5 gap-xl-5">
                <div className="flex-column align-items-start justify-content-start flex-shrink-0">
                  <div className="text-start text-lg-start">
                    <h5 className="mb-1 text-start">
                      Raúl
                      <span className="d-block fs-1">Guadalajara</span>
                    </h5>
                  </div>
                </div>
                <div className="mt-4 mt-md-0 mb-3 mb-md-0 px-sm-1 px-xl-2">
                  <p className="text-center text-sm-start mb-0 fs-2 lh-1">
                    Cuando lo necesité estuvieron siempre al pendiente de mi
                    siniestro.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonials__carousel-bg card border-none shadow position-relative text-dark p-3 pt-xxl-5 px-md-5 mx-5 my-5">
              <div className="testimonials__user-info my-4 my-lg-5 py-4 d-flex flex-column px-md-3 px-xl-5 gap-xl-5">
                <div className="flex-column align-items-start justify-content-start flex-shrink-0">
                  <div className="text-start text-lg-start">
                    <h5 className="mb-1 text-start">
                      Diana
                      <span className="d-block fs-1">California</span>
                    </h5>
                  </div>
                </div>
                <div className="mt-4 mt-md-0 mb-3 mb-md-0 px-sm-1 px-xl-2">
                  <p className="text-center text-sm-start mb-0 fs-2 lh-1">
                    Me gusta la facilidad para cotizar y contratar.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container position-relative d-md-none">
        <div className="testimonials__title my-4">
          <h2 className="text-center fw-normal lh-sm text-dark">
            Testimoniales
          </h2>
          <div className="d-flex flex-row justify-content-center">
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
            <div className="m-4">
              <StarIcon />
            </div>
          </div>
        </div>
        
        <div className="testimonials__carousel-bg card border-none shadow-lg position-relative text-dark p-3 mx-5 my-5">
          <div className="testimonials__user-info my-4 py-4 d-flex flex-column px-5">
            <div className="flex-column ps-1 align-items-start justify-content-start flex-shrink-0">
              <div className="text-start">
                <h5 className="mb-1 text-start fw-semibold">
                  Diana
                  <span className="ms-5 fs-1 fst-italic fw-medium">California</span>
                </h5>
              </div>
            </div>
            <div className="mt-4 ps-1">
              <p className="mb-0 fs-2 lh-1">
                Me gusta la facilidad para cotizar y< br></br>contratar.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials__carousel-bg card border-none shadow-lg position-relative text-dark p-3 mx-5 my-5">
          <div className="testimonials__user-info my-4 py-4 d-flex flex-column px-5">
            <div className="flex-column ps-1 align-items-start justify-content-start flex-shrink-0">
              <div className="text-start">
                <h5 className="mb-1 text-start fw-semibold">
                  Diana
                  <span className="ms-5 fs-1 fst-italic fw-medium">California</span>
                </h5>
              </div>
            </div>
            <div className="mt-4 ps-1">
              <p className="mb-0 fs-2 lh-1">
                Me gusta la facilidad para cotizar y< br></br>contratar.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials__carousel-bg card border-none shadow-lg position-relative text-dark p-3 mx-5 my-5">
          <div className="testimonials__user-info my-4 py-4 d-flex flex-column px-5">
            <div className="flex-column ps-1 align-items-start justify-content-start flex-shrink-0">
              <div className="text-start">
                <h5 className="mb-1 text-start fw-semibold">
                  Diana
                  <span className="ms-5 fs-1 fst-italic fw-medium">California</span>
                </h5>
              </div>
            </div>
            <div className="mt-4 ps-1">
              <p className="mb-0 fs-2 lh-1">
                Me gusta la facilidad para cotizar y< br></br>contratar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;

  .testimonials__carousel-bg {
    box-shadow: rgba(255, 255, 255);
    border-radius: 30px;
    border: none;
  }

  .testimonials__user-info p {
    font-size: 1.1875rem;
    opacity: 0.9;
    font-weight: 400;
    line-height: 1.875rem;
  }

  .testimonials__user-info span {
    font-size: 1.125rem;
    font-weight: 400;
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    .testimonials__carousel-bg {
      border-radius: 4rem;
    }
  }
`;
