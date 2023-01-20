import styled from "styled-components";
import { CrystalIcon, KeysIcon, PlatformsIcon, HandSecure, DocumentIcon, CarCrash } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Dudes } from './Dudes'

export const Cobertura = () => {
  return (
    <CoberturaSection>
      <div className="services-title container text-center mt-5 pt-5">
        <h3 className="pb-2 fw-normal fs-35 text-dark">
            Personaliza tu protección con <br />
            nuestras coberturas adicionales
        </h3>
        <h3 className="text-dark fw-semi-bold fs-35 fst-italic text-center">
          
        </h3>
      </div>
      <div className="container py-3 position-relative d-none d-md-block">
        <div className="row d-flex justify-content-around">
          <div className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div className="card border border-4 border-primary rounded-5 py-5 px-5 text-center shadow-lg">
              <div className="icon-height">
                <KeysIcon />
              </div>
            </div>
            <div className="card-body px-2 pb-0 mt-5 text-center">
              <p className="card-title fw-bold lh-sm text-dark fs-25">
                Llaves perdidas
                <br />
                (máximo 1 al año)
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-25 pt-5">
                Máxima suma asegurada $5,000
              </p>
              <p className="card-title fw-bold lh-sm text-dark fs-15">
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
              <p className="card-title fw-bold lh-sm text-dark fs-25">
                Cristalazo
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-25 pt-5">
                Dev. deducible cristal y
                <br />
                $5,000.00 de ayuda por robo
              </p>
              <p className="card-title fw-bold lh-sm text-dark fs-15">
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
              <p className="card-title fw-bold lh-sm text-dark fs-25">
                Plataformas con socios conductores <br />
                (Cuotas anuales)
              </p>
              <p className="card-title fw-normal lh-sm text-dark fs-25 pt-5">
                Por pérdida parcial, total o corralón.
              </p>
              <p className="card-title fw-bold lh-sm text-dark fs-15">
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
                <p className="card-title fw-normal lh-sm text-dark fs-15 pt-5">
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

      <div className="container-fluid mx-auto position-relative dudas__container d-none d-md-block mt-5 pt-5">
        <h4 className="mt-5 mt-xxl-5 text-dark height-lile fw-normal py-4">
          Preguntas frecuentes
        </h4>
        <Dudes />
      </div>

      <div className="container h-75 py-3 d-md-none">
        <div className="mx-5 dudas__container gap-5">
          <div>
            <h4 className="fst-italic  text-center my-5 py-5">
              Resolvemos tus dudas
            </h4>
          </div>
          <div className="w-auto d-flex justify-content-around align-items-center gap-5 mb-5 pb-5">
            <div className="document-icon rounded-5 d-flex align-items-center justify-content-center d-md-none">
              <DocumentIcon />
            </div>
            <p className="text-start dudas__text fw-normal">
              En caso de robo total, perdida total<br />
              o daños materiales, nosotros te<br />
              devolveremos el deducible de tu<br />
              poliza de tu auto de acuerdo con la<br />
              asistencia que hayas elegido<br />
            </p>
          </div>

          <div className="w-auto d-flex justify-content-around align-items-center gap-5 my-5 py-5">
            <div className="document-icon rounded-5 d-flex align-items-center justify-content-center d-md-none">
              <HandSecure />
            </div>
            <p className="text-start dudas__text fw-normal">
              Operamos con cualquier compañía <br />
              aseguradora dentro del territorio<br />
              nacional
            </p>
          </div>

          <div className="w-auto d-flex justify-content-around align-items-center gap-5 mt-5 pt-5">
            <div className="document-icon rounded-5 d-flex align-items-center justify-content-center d-md-none">
              <CarCrash />
            </div>
            <p className="text-start dudas__text fw-normal">
              Se apagará el deducible hasta que<br />
              se agote la suma del plan<br />
              contratado, sin importar el número<br />
              de eventos<br />
            </p>
          </div>
        </div>
      </div>
    </CoberturaSection>
  );
};

const CoberturaSection = styled.section`
  height: 230rem;
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

  .swiper-slide-h-50 {
    height: 50rem;
  }

  .fs-35 {
    font-size: 4rem;
  }

  .fs-11 {
    font-size: 2.7rem;
  }

  .fs-15 {
    font-size: 3rem;
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

  .swiper-button-next,
  .swiper-button-prev {
    color: #707070;
  } 

  .services-title {
    padding-bottom: 10rem;
  }

  .dudas__container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .dudas__text {
    font-size: 2.5rem;
    line-height: 4.5rem;
  }

  .document-icon {
    height: 20rem;
    width: 20rem;
    padding: 1rem 5rem;
    background-color: #eaeef9;
  }

  @media (min-width: 576px) {
    height: 251rem;
    .swiper {
      height: 74rem;
    }

    .dudas__container {
      height: 100%;
    }

    .dudas__text {
      font-size: 3rem;
    }

    .document-icon {
      height: 25rem;
      width: 25rem;
    }
  }

  @media (min-width: 768px) {
    height: 160rem;
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

    .dudas__container {
      height: 45rem;
    }

    .dudas__text {
      font-size: 2.5rem;
      line-height: 3rem;
      padding: 0 3rem;
    }

    .document-icon {
      position: absolute;
      height: auto;
      width: 22rem;
      background: transparent;
      z-index: -1;
      opacity: .6;
    }

    .icon-height-platform_icon {
      width: 10rem !important;
    }

    .fs-35 {
      font-size: 4.5rem;
    }

    .fs-25 {
      font-size: 2.5rem;
    }

    .fs-15 {
      font-size: 2rem;
    }
  }
`;
