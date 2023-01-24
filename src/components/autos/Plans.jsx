import styled from "styled-components";
import { PersonIcon, ReportIcon, ChatIcon, IdeaIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { CityBackground } from "../../assets/backgrounds";

export const Plans = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <PlansSection>
      <div className="services-title container text-center d-none d-md-block">
        <h5 className="text-dark fs-45 fw-normal text-center pt-4">
          Descubre nuestros paquetes disponibles
        </h5>
      </div>
      <div className="services-title container text-center d-md-none">
        <h5 className="text-dark fs-50 fw-normal text-center pt-4">
          Descubre nuestros <br />
          paquetes disponibles
        </h5>
      </div>
      <div className="container py-3 d-none d-lg-block">
        <div className="d-flex justify-content-around gap-5">
          <div className="col-auto">
            <div className="card border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <p className="card-title fw-semi-bold lh-sm text-primary fs-35">Básico</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-50 p-5">
                <p className="fs-40 mb-0 ps-5">$750.00</p>
              </div>
              <div className="card-body w-100 px-2 pb-0">
                <p className="card-title lh-sm mb-5 pt-5 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-subtitle fw-normal lh-sm text-primary my-3">
                  Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-semibold">$10,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-50 fs-15">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary fs-35">Standar</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-50 p-5">
                <p className="fs-40   mb-0 ps-5">$1,400.00</p>
              </div>
              <div className="card-body w-100 px-2 pb-0">
                <p className="card-title   lh-sm mb-5 pt-5 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-subtitle fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-semibold">$20,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-50 fs-15">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary fs-35">Premium</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-75 p-5">
                <p className="fs-40   mb-0 ps-5">$2,000.00</p>
              </div>
              <div className="card-body w-100 px-2 pb-0">
                <p className="card-title   lh-sm mb-5 pt-5 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-subtitle fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-semibold">$30,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop }  className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-50 fs-15">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary fs-35">Gold</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-100 p-5">
                <p className="fs-40   mb-0 ps-5">$2,650.00</p>
              </div>
              <div className="card-body w-100 px-2 pb-0">
                <p className="card-title    lh-sm mb-5 pt-5 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-subtitle fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-semibold">$40,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-50 fs-15">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border-primary rounded-5 py-5 px-2 text-center d-flex align-items-center justify-content-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary fs-35">Black</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center p-5">
                <p className="fs-40   mb-0 ps-5">$3,350.00</p>
              </div>
              <div className="card-body w-100 px-2 pb-0">
                <p className="card-title   lh-sm mb-5 pt-5 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-subtitle fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-semibold">$50,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-50 fs-15">
                  Contratar
                </button>
              </Link>
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
          <div className="col-auto d-flex justify-content-center align-items-center flex-column">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary">Básico</p>
              <div className="card-price top-20 start-0 mt-5 d-flex align-items-center justify-content-center p-5">
                <p className="fs-50 mt-3">$690.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title   lh-sm my-5 py-3 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fw-500 fs-last">$10,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-25 fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto d-flex justify-content-center align-items-center flex-column">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary">Standar</p>
              <div className="card-price top-20 start-0 mt-5 d-flex align-items-center justify-content-center p-5">
                <p className="fs-50 mt-3">$1,297.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title   lh-sm my-5 py-3 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fw-500 fs-last">$20,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-25 fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto d-flex justify-content-center align-items-center flex-column">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary">Premium</p>
              <div className="card-price top-20 start-0 mt-5 d-flex align-items-center justify-content-center p-5">
                <p className="fs-50 mt-3">$1,840.00</p>
              </div>
              <div className="card-body px-2 pb-0 cb-mb">
                <p className="card-title   lh-sm my-5 py-3 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fw-500 fs-last">$30,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-25 fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto d-flex justify-content-center align-items-center flex-column">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary">Gold</p>
              <div className="card-price top-20 start-0 mt-5 d-flex align-items-center justify-content-center p-5">
                <p className="fs-50 mt-3">$2,420.00</p>
              </div>
              <div className="card-body px-2 pb-0 cb-mb">
                <p className="card-title   lh-sm my-5 py-3 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fw-500 fs-last">$40,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-25 fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto d-flex justify-content-center align-items-center flex-column">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center shadow-lg">
              <p className="card-title fw-semi-bold   lh-sm text-primary">Black</p>
              <div className="card-price top-20 start-0 mt-5 d-flex align-items-center justify-content-center p-5">
                <p className="fs-50 mt-3">$2,995.00</p>
              </div>
              <div className="card-body px-2 pb-0 cb-mb">
                <p className="card-title   lh-sm my-5 py-3 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fw-500 fs-last">$50,000.00</p>
              </div>
            </div>
            <div onClick={ scrollTop } className="mt-5 d-flex w-100 text-center">
              <Link to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-500 mx-auto w-25 fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="position-absolute RE_img_bg">
        <CityBackground />
      </div>
    </PlansSection>
  );
};

const PlansSection = styled.section`
  height: 110rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;
  overflow: hidden;

  hr {
    margin-top: 10rem !important;
  }

  .fs-1 {
      font-size: 2.5rem !important;
  }

  .swiper {
    height: 73rem;
  }

  .text-lile,
  .border-lile {
    color: #6983d6;
    border: 10px solid #6983d6 !important;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #707070;
  } 

  .icon svg {
    width: 30px;
    height: 30px;
  }

  .fs-35 {
    font-size: 3.5rem;
  }

  .fs-40 {
    font-size: 4rem;
  }

  .fs-45 {
    font-size: 4.5rem;
    font-weight: 500;
  }

  .fs-15 {
    font-size: 2rem;
  }

  .fs-50 {
    font-size: 5rem;
  }

  .RE_img_bg {
    width: 100%;
    z-index: -1;
    bottom: 0;
  }

  .card-title {
    font-size: 3.5rem;
  }

  .text-primary,
  .border-primary {
    color: black !important;
    border-color: #f9fafd !important;
  }

  .card-price {
    width: 100%;
    height: 10rem;
    background-color: #9fbdcc;
    color: white;
    margin-left: -8rem;
    border-radius: 3rem;
  }

  .card .card-body .card-title {
    font-size: 3rem;
  }

  .fs-last {
    font-size: 2rem;
  }

  .card {
    width: 44rem;
    height: 58rem;
    background-color: #f9fafd;

    .icon-height {
      height: 15rem;
    }
  }

  .btn-first {
    background-color: #6983d6;
    color: #FFF;
    padding: 1rem 0rem;
    border: none !important;

    &:hover {
      background-color: #ffffff;
      border: 3px solid #6983d6 !important;
      color: #6983d6; 
    }
  }

  .services-title {
    padding-bottom: 10rem;
  }

  @media (min-width: 992px) {
    height: 100vh;
    padding-bottom: 0rem;
    .card {
      width: 30rem;
      height: auto;

      .icon-height {
        width: auto;
      }

      .card-body {
        width: 86%;
      }

        .card-body .card-title {
        font-size: 1.5rem;
      }

      .card-body .fw-500 {
        font-size: 2rem;
      }

      .card-price {
        margin-left: -4rem;
      }
    }

    .RE_img_bg {
      z-index: -11;
      top: 58%;
      width: 100%;
    }

    .fs-35 {
      font-size: 3.5rem;
    }

    .card-price {
      width: 32rem;
      height: 7.5rem;
    }

    .fs-25 {
      font-size: 2.5rem; 
    }

    .card .card-body .card-title {
      font-size: 2.5rem;
    }

    .card-subtitle {
      font-size: 1.8rem;
    }
  }
`;

