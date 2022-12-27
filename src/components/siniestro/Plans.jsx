import styled from "styled-components";
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
      <div className="services-title container text-center">
        <h5 className="text-dark fs-1 fw-semi-bold text-center pt-4 fst-italic">
          Descubre nuestros paquetes disponibles
        </h5>
      </div>
      <div className="container py-3 d-none d-lg-block">
        <div className="row d-flex justify-content-between">
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Básico</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-25">
                <p className="fs-1 mb-0">$690.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$10,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Standar</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-50">
                <p className="fs-1 mb-0">$1,297.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$20,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Premium</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-75">
                <p className="fs-1 mb-0">$1,840.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$30,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Gold</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center opacity-100">
                <p className="fs-1 mb-0">$2,420.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$40,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Black</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4 d-flex justify-content-center align-items-center">
                <p className="fs-1 mb-0">$2,995.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$50,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
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
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Básico</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4">
                <p className="fs-1 mt-2">$690.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$10,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Standar</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4">
                <p className="fs-1 mt-2">$1,297.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$20,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Premium</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4">
                <p className="fs-1 mt-2">$1,840.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$30,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Gold</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4">
                <p className="fs-1 mt-2">$2,420.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$40,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="col-auto">
            <div className="card border border-4 border-primary rounded-5 py-5 px-2 text-center">
              <p className="card-title fw-semi-bold fst-italic lh-sm text-primary fs-2">Black</p>
              <div className="card-price rounded-4 top-20 start-0 mt-4">
                <p className="fs-1 mt-2">$2,995.00</p>
              </div>
              <div className="card-body px-2 pb-0">
                <p className="card-title fw-bold fst-italic fs-4 lh-sm my-4 text-primary">
                Pago anual con<br />IVA incluído
                </p>
                <p className="card-title fw-normal lh-sm text-primary fs-5 my-3">
                Te devolvemos tu deducible 
                  <br /> con un tope máximo de
                </p>
                <p className="fs-3 fw-bold">$50,000.00</p>
              </div>
            </div>
            <div className="mt-5 d-flex w-100 text-center">
              <Link onClick={ scrollTop } to="/deducible-gastos-medicos" className="w-100">
                <button className="btn btn-first rounded-pill fw-bold mx-auto w-75 text-white fs-3">
                  Contratar
                </button>
              </Link>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-100 position-absolute RE_img_bg">
        <CityBackground />
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

  .text-primary,
  .border-primary {
    color: black !important;
    border-color: #f9fafd !important;
  }

  .card-price {
    width: 25rem;
    height: 5rem;
    background-color: #5F93A9;
    color: white;
    margin-left: -3rem;
  }

  .card {
    width: 26rem;
    height: 31rem;
    background-color: #f9fafd;

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
