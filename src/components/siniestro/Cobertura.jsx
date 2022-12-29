import styled from "styled-components";
import { CrystalIcon, KeysIcon, PlatformsIcon } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import DocumentIcon from "../../assets/images/document-icon.png";

export const Cobertura = () => {
  return (
    <CoberturaSection>
      <div className="services-title container text-center mt-5 pt-5">
        <h3 className="pb-2 fw-semi-bold text-dark">
          <span className="text-dark fw-semi-bold fs-2 fst-italic">
            Personaliza tu protección con
          </span>
        </h3>
        <h5 className="text-dark fw-semi-bold fs-2 fst-italic text-center">
          nuestras coberturas adicionales
        </h5>
      </div>
      <div className="container py-3 position-relative d-none d-md-block">
        <div className="row d-flex justify-content-between">
          <div className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <KeysIcon />
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
          <div className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <CrystalIcon />
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
          <div className="col-auto d-flex flex-column justify align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height-platform_icon mx-auto">
                <PlatformsIcon />
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
            <div className="col-auto d-flex flex-column justify-content-center align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height">
                  <KeysIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-medium fst-italic lh-sm text-dark fs-15">
                  Llaves perdidas
                  <br />
                  (máximo 1 al año)
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-3 pt-5">
                  Máxima suma asegurada $5,000
                </p>
                <p className="card-title fs-11 fw-bold lh-sm text-dark mt-5">
                  Costo anual: $120.00
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height">
                  <CrystalIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-medium fst-italic lh-sm text-dark fs-15">
                  Cristalazo
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-3 mt-5 pt-5">
                  Dev. deducible cristal y
                  <br />
                  $5,000.00 de ayuda por robo
                </p>
                <p className="card-title fs-11 fw-bold lh-sm text-dark mt-5">
                  Costo $670.00
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-auto d-flex flex-column justify-content-ceenter align-items-center">
              <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
                <div className="icon-height icon-height-platform_icon mx-auto">
                  <PlatformsIcon />
                </div>
              </div>
              <div className="card-body px-2 pb-0 mt-5 text-center">
                <p className="card-title fw-medium fst-italic lh-sm text-dark fs-15 fst-italic">
                  Plataformas con <br />
                  socios conductores
                  <br />
                  (Cuotas anuales)
                </p>
                <p className="card-title fw-normal lh-sm text-dark fs-3 my-3">
                  Por pérdida parcial, total o corralón.
                </p>
                <p className="card-title fs-11 fw-bold lh-sm text-dark">
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

      <div className="d-block text-center fs-2 height-lile">
        <p className="mt-5 mt-xxl-5 text-dark fst-italic py-2">
          Resolvemos tus dudas
        </p>
      </div>

      <div className="container-fluid mx-auto position-relative dudas__container d-none d-md-block">
        <div className="h-100 w-auto d-flex justify-content-center align-items-center">
          <p className="text-center dudas__text fw-normal">
            En caso de robo total o daños materiales, nosotros te <br />
            devolveremos el deducible de tu poliza de auto de acuerdo con la{" "}
            <br />
            asistencia que hayas elegido
          </p>
          <img
            src={
              "https://elementos-red-enlace.s3.amazonaws.com/Landing/document-icon.png"
            }
            alt="Icon Document"
            className="document-icon opacity-50"
          />
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
            <div className="container-fluid mx-auto position-relative dudas__container">
              <div className="h-100 w-auto d-flex justify-content-center align-items-center">
                <p className="text-center dudas__text fw-normal">
                  En caso de robo total o daños materiales, nosotros te <br />
                  devolveremos el deducible de tu poliza de auto de acuerdo con
                  la <br />
                  asistencia que hayas elegido
                </p>
                <img
                  src={
                    "https://elementos-red-enlace.s3.amazonaws.com/Landing/document-icon.png"
                  }
                  alt="Icon Document"
                  className="document-icon opacity-50"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-fluid mx-auto position-relative dudas__container">
              <div className="h-100 w-auto d-flex justify-content-center align-items-center">
                <p className="text-center dudas__text fw-normal">
                  En caso de robo total o daños materiales, nosotros te <br />
                  devolveremos el deducible de tu poliza de auto de acuerdo con
                  la <br />
                  asistencia que hayas elegido
                </p>
                <img
                  src={
                    "https://elementos-red-enlace.s3.amazonaws.com/Landing/document-icon.png"
                  }
                  alt="Icon Document"
                  className="document-icon opacity-50"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-fluid mx-auto position-relative dudas__container">
              <div className="h-100 w-auto d-flex justify-content-center align-items-center">
                <p className="text-center dudas__text fw-normal">
                  En caso de robo total o daños materiales, nosotros te <br />
                  devolveremos el deducible de tu poliza de auto de acuerdo con
                  la <br />
                  asistencia que hayas elegido
                </p>
                <img
                  src={
                    "https://elementos-red-enlace.s3.amazonaws.com/Landing/document-icon.png"
                  }
                  alt="Icon Document"
                  className="document-icon opacity-50"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </CoberturaSection>
  );
};

const CoberturaSection = styled.section`
  height: 155rem;
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
    border-color: #5f93a9 !important;
  }

  .swiper-slide {
    height: 62rem;
  }

  .fs-11 {
    font-size: 11px;
  }

  .fs-15 {
    font-size: 15px;
  }

  .card {
    width: 30rem;
    height: 30rem;
    background-color: #5f93a9;

    .icon-height {
      height: 22.4rem;
    }

    .icon-height-platform_icon {
      height: auto;
      width: 17rem;
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

  .dudas__container {
    height: 45rem;
  }

  .dudas__text {
    font-size: 17px;
    line-height: 4.5rem;
    position: absolute;
    z-index: 5;
  }

  .document-icon {
    position: absolute;
    height: 20rem;
  }

  @media (min-width: 576px) {
    height: 170rem;
    .swiper {
      height: 74rem;
    }
  }

  @media (min-width: 768px) {
    height: 130rem;
    .card {
      width: 20rem;
      height: 20rem;

      .icon-height {
        width: auto;
      }

      .card-body {
        width: 86%;
      }
    }

    .dudas__text {
      font-size: 13px;
      line-height: 3rem;
      padding: 0 3rem;
    }

    .icon-height-platform_icon {
      width: 10rem !important;
    }
  }
`;
