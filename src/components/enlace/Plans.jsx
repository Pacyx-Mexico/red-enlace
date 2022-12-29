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
      <div className="services-title container text-center d-none d-md-block">
        <h5 className="text-dark fs-25 fw-semi-bold text-center pt-4 fst-italic">
          Asistencia a tu medida
        </h5>
        <p className="fs-20 fw-light">
          Ahorra en el pago de tu póliza de Gastos Médicos
        </p>
      </div>
      <div className="container py-3 d-none d-md-block">
        <div className="row d-flex justify-content-around">
          <div className="col-auto">
            <div className="card bg-white border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-end align-items-center p-5">
                <p className="fs-1 mb-0">Enlace Max</p>
              </div>
              <div className="d-flex flex-column card-body align-items-center justify-content-center px-2 pb-0">
                <p className="card-title fst-italic fs-4 lh-sm my-4 text-primary">
                  <span className="fw-bold green-text">Aumentamos el deducible</span> <br />
                  de tu póliza actual para 
                  bajar el costo y, en caso de 
                  siniestro, Red Enlace cubre 
                  esa diferencia para que tu 
                  no pagues ni un peso.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card bg-white border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-end align-items-center opacity-100 p-5">
                <p className="fs-1 mb-0">Enlace Total</p>
              </div>
              <div className="card-body d-flex flex-column card-body align-items-center justify-content-center px-2 pb-0">
                <p className="card-title fst-italic fs-4 lh-sm my-4 text-primary">
                  <span className="fw-bold green-text">Aumentamos el coaseguro</span> <br />
                  de tu póliza actual para 
                  bajar el costo y, en caso de 
                  siniestro, Red Enlace cubre 
                  esa diferencia para que tu 
                  no pagues ni un peso.
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card bg-white border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-end align-items-center p-5">
                <p className="fs-1 mb-0">Enlace Max Total</p>
              </div>
              <div className="card-body d-flex flex-column card-body align-items-center justify-content-center px-2 pb-0">
                <p className="card-title fst-italic fs-4 lh-sm my-4 text-primary">
                  <span className="fw-bold green-text">Aumentamos el deducible y coaseguro de tu póliza actual </span> 
                  para bajar el costo y, 
                  en caso de siniestro, Red 
                  Enlace cubre esa diferencia 
                  para que tu no pagues ni un 
                  peso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3 position-relative d-md-none">
        <div className="services-title container text-center">
          <h5 className="text-dark fs-25 fw-semi-bold text-center pt-4 fst-italic">
            Asistencia a tu medida
          </h5>
          <p className="fs-20 fw-light mt-5">
            Ahorra en el pago de tu póliza de<br />Gastos Médicos
          </p>
        </div>
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
            <div className="w-100 h-50rem">
              <div className="card bg-white border border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none mx-auto">
                <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-end align-items-center">
                  <p className="fw-normal my-auto me-5">Enlace Max</p>
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-normal text-primary">
                    <span className="fw-bold green-text">
                    Aumentamos el deducible <br />
                    </span>
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
            <div className="w-100 h-50rem">
              <div className="card border opacity-100 border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none mx-auto">
                <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-end align-items-center">
                  <p className="fw-normal my-auto me-5">Enlace Total</p>
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-normal text-primary">
                    <span className="fw-bold green-text">
                      Aumentamos el coaseguro <br />
                    </span>
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
            <div className="w-100 h-50rem">
              <div className="card border opacity-100 border-0 border-primary rounded-5 py-5 px-2 text-center shadow-lg border-none mx-auto">
                <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-end align-items-center">
                  <p className="fw-normal my-auto me-5">Enlace Max Total</p>
                </div>
                <div className="card-body px-2 pb-0">
                  <p className="card-title fw-bold fst-italic lh-sm mt-4 green-text">
                  </p>
                  <p className="card-title fw-normal text-primary">
                    <span className="fw-bold green-text">Aumentamos el deducible y coaseguro de tu póliza actual </span> para bajar el costo y, <br />
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
      <div className="w-100 position-absolute RE_img_bg d-none d-md-block">
        <GreenCityBg />
      </div>
    </PlansSection>
  );
};

const PlansSection = styled.section`
  height: 115rem;
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
    width: 40rem;
    height: 8.5rem;
    background-color: #79c789;
    color: white;
    margin-left: -10rem;
    font-size: 14px;
  }

  .card {
    width: 40rem;
    height: 50rem;
    background-color: #ffffff;

    .icon-height {
      height: 15rem;
    }

    .card-body .card-title {
      font-size: 11px;
    }
  }

  .h-50rem {
    height: 60rem;
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

  .fs-25 {
    font-size: 20px;
  }

  .fs-20 {
      font-size: 18px;
  }

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 991px) {
    height: 80rem;
    .card {
      width: 28rem;
      height: 34rem;
      background-color: #ffffff;

      .icon-height {
        width: auto;
      }

      .card-body {
        width: 86%;
      }

      .card-price {
        width: 30rem;
        height: 6.5rem;
        background-color: #79c789;
        color: #FFFFFF;
        margin-left: -8rem;
      }
    }

    .fs-25 {
      font-size: 25px;
    }

    .fs-20 {
      font-size: 20px;
    }
  }
`;
