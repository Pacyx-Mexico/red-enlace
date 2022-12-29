import styled from "styled-components";
import { MoneyIcon, SeventyTwoHoursIcon, HospitalIcon, MoneyTwoIcon } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export const Beneficios = () => {
  return (
    <BeneficiosSection>
      <div className="services-title container text-center mt-5 pt-5">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-semi-bold fs-1 fst-italic">
            Beneficios de ser parte de la comunidad Red Enlace
          </span>
        </h3>
      </div>
      <div className="container py-3 position-relative d-none d-md-block">
        <div className="row d-flex justify-content-around gap-5">
          <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <MoneyIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                Ahorro garantizado,
                <br /> hasta 35%
              </p>
            </div>
          </div>
          <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <SeventyTwoHoursIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                Pago de siniestros en
                <br /> menos de 72 horas
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
              <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                Ayuda diaria por <br /> hospitalización
              </p>
            </div>
          </div>
          <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <MoneyTwoIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                En caso de enfermedades <br />
                graves nosotros pagamos <br />
                tu deducible
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
                  <MoneyIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-bold lh-sm text-dark fs-3">
                  Llaves perdidas
                  <br />
                  (máximo 1 al año)
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                  Máxima suma asegurada $5,000
                </p>
                <p className="card-title fw-bold lh-sm text-dark fs-5">
                  Costo anual: $120.00
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height">
                  <SeventyTwoHoursIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-bold lh-sm text-dark fs-3">
                  Cristalazo
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                  Dev. deducible cristal y
                  <br />
                  $5,000.00 de ayuda por robo
                </p>
                <p className="card-title fw-bold lh-sm text-dark fs-5">
                  Costo $670.00
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
                  Plataformas con socios conductores <br />
                  (Cuotas anuales)
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                  Por pérdida parcial, total o corralón.
                </p>
                <p className="card-title fw-bold lh-sm text-dark fs-5">
                  $10,000 por 20 días <br />
                  $15,000 por 30 días
                  <br />
                  $20,000 por 40 días
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </BeneficiosSection>
  );
};

const BeneficiosSection = styled.section`
  height: 85rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .height-lile {
    height: auto;
    background: #f1f6f8;
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
    border-color: #79c789 !important;
  }

  .card {
    width: 18rem;
    height: 18rem;
    background-color: #79c789;

    .icon-height {
      height: 15rem;
    }

    .icon-height-platform_icon {
      height: auto;
      width: 9rem;
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
    height: 194rem;
    .card {
      width: auto;
      height: 20rem;

      .icon-height {
        width: auto;
      }

      .card-body {
        width: 86%;
      }
    }
  }
`;
