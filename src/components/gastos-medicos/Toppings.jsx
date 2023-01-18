import styled from "styled-components";
import { HospitalIcon, ComputerIcon, MuerteIcon } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export const Toppings = () => {
  return (
    <CharacteristicSection>
      <div className="services-title container text-center mt-5 pt-5">
        <h3 className="pb-2 fw-semi-bold fs-35 text-dark">
          Personaliza tu protección con nuestras coberturas adicionales <br />
          <span className="text-dark fw-semi-bold fst-italic text-center">
            Trabajamos para superar tus expectativas con:
          </span>
        </h3>
      </div>
      <div className="container py-3 position-relative d-none d-md-block">
        <div className="row d-flex justify-content-between">
          <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <MuerteIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-bold lh-sm text-dark fs-25">
                Indemnización diaria por hospitalización
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-25 mt-5">
                Ayuda diaria de hasta $10,000 MN
                <br />
                Ayuda diaria de hasta $20,000MN
              </p>
            </div>
          </div>
          <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <HospitalIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-bold lh-sm text-dark fs-25">
                Aumento de tabulador
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-25 mt-5">
                Te regresamos un porcentaje para los gastos <br />
                de consulta y honorarios de médico principal
              </p>
            </div>
          </div>
          <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <ComputerIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-bold lh-sm text-dark fs-25">
                Ayuda diaria para gastos extra de hospital
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-25 mt-5">
                Con un tope de hasta $10,000MN
                <br />
                Con un tope de hasta $20,000MN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3 position-relative d-md-none">
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
            <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height">
                  <MuerteIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-bold lh-sm text-dark fs-35">
                  Indemnización diaria por hospitalización
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-35 mt-5">
                  Ayuda diaria de hasta $10,000 MN
                  <br />
                  Ayuda diaria de hasta $20,000MN
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height">
                  <HospitalIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-bold lh-sm text-dark fs-35">
                  Aumento de tabulador
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-35 mt-5">
                  Te regresamos un porcentaje para los gastos <br />
                  de consulta y honorarios de médico principal
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height">
                  <ComputerIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-bold lh-sm text-dark fs-35">
                  Ayuda diaria para gastos extra de hospital
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-35 mt-5">
                  Con un tope de hasta $10,000MN
                  <br />
                  Con un tope de hasta $20,000MN
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </CharacteristicSection>
  );
};

const CharacteristicSection = styled.section`
  height: 81.7rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

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

  .card-title {
    margin-bottom: 0rem;
  }

  .text-primary,
  .border-primary {
    color: #ffffff !important;
    border-color: #5c77cc !important;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #707070;
  } 

  .fs-35 {
    font-size: 3rem;
  }

  .fs-25 {
    font-size: 2.13rem;
  }

  .card {
    width: 19rem;
    height: 19rem;
    background-color: #5c77cc;

    .icon-height {
      height: 15rem;
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

  @media (max-width: 576px) {
    .swiper {
      height: 48rem;
    }
  }

  @media (max-width: 767px) {
    height: 101rem;
    .card {
      width: auto;
      height: 20rem;

      .icon-height {
        width: 10rem;
      }

      .card-body {
        width: 86%;
      }
    }

    .swiper {
      height: 48rem;
    }
  }
`;