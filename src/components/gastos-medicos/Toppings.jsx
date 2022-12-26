import styled from "styled-components";
import { HospitalIcon, ComputerIcon, MuerteIcon } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export const Toppings = () => {
  return (
    <CharacteristicSection>
      <div className="services-title container text-center mt-5 pt-5">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-semi-bold fs-2 fst-italic">
            Personaliza tu protección con nuestras coberturas adicionales
          </span>
        </h3>
        <h5 className="text-dark fw-semi-bold fs-2 fst-italic text-center">
          Trabajamos para superar tus expectativas con:
        </h5>
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
              <p className="card-title fw-bold lh-sm text-dark fs-3">
                Indemnización diaria por hospitalización
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-5 mt-5">
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
              <p className="card-title fw-bold lh-sm text-dark fs-3">
                Aumento de tabulador
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-5 mt-5">
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
              <p className="card-title fw-bold lh-sm text-dark fs-3">
                Ayuda diaria para gastos extra de hospital
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-5 mt-5">
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
                <p className="card-title fw-bold lh-sm text-dark fs-3">
                  Indemnización diaria por hospitalización
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-5 mt-5">
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
                <p className="card-title fw-bold lh-sm text-dark fs-3">
                  Aumento de tabulador
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-5 mt-5">
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
                <p className="card-title fw-bold lh-sm text-dark fs-3">
                  Ayuda diaria para gastos extra de hospital
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-5 mt-5">
                  Con un tope de hasta $10,000MN
                  <br />
                  Con un tope de hasta $20,000MN
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <hr className="border border-5 border-lile mt-5 mt-xxl-5" />
    </CharacteristicSection>
  );
};

const CharacteristicSection = styled.section`
  height: 80rem;
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

  .card {
    width: 18rem;
    height: 18rem;
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

  @media (max-width: 767px) {
    height: 84rem;
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
  }
`;