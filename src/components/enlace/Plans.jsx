import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { GreenCityBg } from "../../assets/backgrounds";

export const Plans = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <PlansSection>
      <div className="services-title container text-center">
        <h5 className="text-dark fs-1 fw-semi-bold text-center pt-4 fst-italic">
          Asistencia a tu medida
        </h5>
        <p className="fw-light fs-1">
          Ahorra en el pago de tu póliza de Gastos Médicos
        </p>
      </div>
      <div className="container py-3 d-none d-lg-block">
        <div className="row d-flex justify-content-around gap-5">
          <div className="col-auto">
            <div className="card bg-white border border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none">
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                <p className="fs-2 fw-normal mb-0">Enlace Max</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-5 lh-sm mt-4 green-text">
                  Aumentamos el deducible <br />
                </p>
                <p className="card-title fw-normal text-primary fs-5">
                  de tu póliza actual para <br />
                  bajar el costo y, en caso de <br />
                  siniestro, Red Enlace cubre <br />
                  esa diferencia para que tu <br />
                  no pagues ni un peso.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border opacity-100 border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none">
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                <p className="fs-2 fw-normal mb-0">Enlace Total</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-5 lh-sm mt-4 green-text">
                  Aumentamos el coaseguro <br />
                </p>
                <p className="card-title fw-normal text-primary fs-5">
                  de tu póliza actual para <br />
                  bajar el costo y, en caso de <br />
                  siniestro, Red Enlace cubre <br />
                  esa diferencia para que tu <br />
                  no pagues ni un peso.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border opacity-100 border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none">
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                <p className="fs-2 fw-normal mb-0">Enlace Max Total</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-5 lh-sm mt-4 green-text">
                  Aumentamos el deducible y coaseguro de tu póliza actual
                </p>
                <p className="card-title fw-normal text-primary fs-5">
                  para bajar el costo y, <br />
                  en caso de siniestro, Red <br />
                  Enlace cubre esa diferencia <br />
                  para que tu no pagues ni un <br />
                  peso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3 position-relative d-lg-none">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="col-auto">
              <div className="card bg-white border border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none">
                <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                  <p className="fs-2 fw-normal mb-0">Enlace Max</p>
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-bold fst-italic fs-5 lh-sm mt-4 green-text">
                    Aumentamos el deducible <br />
                  </p>
                  <p className="card-title fw-normal text-primary fs-5">
                    de tu póliza actual para <br />
                    bajar el costo y, en caso de <br />
                    siniestro, Red Enlace cubre <br />
                    esa diferencia para que tu <br />
                    no pagues ni un peso.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto">
              <div className="card border opacity-100 border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none">
                <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                  <p className="fs-2 fw-normal mb-0">Enlace Total</p>
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-bold fst-italic fs-5 lh-sm mt-4 green-text">
                    Aumentamos el coaseguro <br />
                  </p>
                  <p className="card-title fw-normal text-primary fs-5">
                    de tu póliza actual para <br />
                    bajar el costo y, en caso de <br />
                    siniestro, Red Enlace cubre <br />
                    esa diferencia para que tu <br />
                    no pagues ni un peso.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto">
              <div className="card border opacity-100 border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none">
                <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                  <p className="fs-2 fw-normal mb-0">Enlace Max Total</p>
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-bold fst-italic fs-5 lh-sm mt-4 green-text">
                    Aumentamos el deducible y coaseguro de tu póliza actual
                  </p>
                  <p className="card-title fw-normal text-primary fs-5">
                    para bajar el costo y, <br />
                    en caso de siniestro, Red <br />
                    Enlace cubre esa diferencia <br />
                    para que tu no pagues ni un <br />
                    peso.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-100 position-absolute RE_img_bg">
        <GreenCityBg />
      </div>
    </PlansSection>
  );
};

const PlansSection = styled.section`
  height: 80rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;

  hr {
    margin-top: 10rem !important;
  }

  .text-lile,
  .border-lile {
    color: #6983d6;
    border: 10px solid #6983d6 !important;
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .RE_img_bg {
    z-index: 5;
    top: 60%;
  }

  .card-title {
    margin-bottom: 0rem;
  }

  .green-text {
    color: #79c789;
  }

  .text-primary,
  .border-primary {
    color: black !important;
    border-color: #f9fafd !important;
  }

  .card-price {
    width: 25rem;
    height: 5rem;
    background-color: #79c789;
    color: white;
    margin-left: -3rem;
  }

  .card {
    width: 26rem;
    height: 31rem;
    background-color: #ffffff;

    .icon-height {
      height: 15rem;
    }

    .card-body .card-title {
      font-size: 14px;
    }
  }

  .btn-first {
    background-color: #6983d6;
    border: 3px solid #6983d6 !important;

    &.text-white:hover {
      color: #6983d6 !important;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .services-title {
    padding-bottom: 10rem;
  }

  @media (max-width: 991px) {
    height: 194rem;
    .card {
      width: auto;
      height: 26rem;

      .icon-height {
        width: auto;
      }

      .card-body {
        width: 86%;
      }
    }
  }
`;
