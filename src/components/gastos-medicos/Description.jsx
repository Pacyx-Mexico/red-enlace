import styled from "styled-components";

export const Description = () => {
  return (
    <DescriptionSection className="container-fluid px-0">
      <div className="d-flex flex-column d-none d-md-block">
        <div className="row mt-5 pt-5">
          <div className="col-md-5">
            <img className="img-fluid h-100 position-relative" src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/description-image.png"} alt="" />
          </div>
          <div className="col-md-7 col-xl-7 d-flex flex-column justify-content-center align-items-start text-start text-lg-start ml-5 pl-5">
            <div className="d-flex flex-column mx-auto">
              <h1 className="fw-normal mt-5 pt-5 text-start">Devolución</h1>
              <h1 className="fw-bold text-start">de deducible</h1>
              <p className="text-secondary mt-2 mb-5 fs-2 fw-light">
                Es una asistencia que en caso de que te <br />hospitalicen, te reembolsa un porcentaje fijo del <br />deducible  de tu  póliza de gastos médicos mayores. <br />
              </p>
              <p className="text-secondary mt-3 fs-2 fw-light">
                Con nosotros, tú eliges el porcentaje:
              </p>
              <p className="text-dark mt-3 mb-5 fs-1 fw-bold">
                30, 50, 80 o hasta 100%
              </p>
            </div>
          </div>
        </div>
        <hr className="border border-5 border-lile my-0"/>
      </div>

      <div className="d-flex flex-column d-md-none">
        <div className="row mt-5 pt-5">
          <div className="col-md-7 col-xl-7 d-flex flex-column justify-content-center align-items-start text-start text-lg-start ml-5 pl-5">
            <div className="d-flex flex-column mx-auto">
              <h1 className="fw-normal mt-5 pt-5 fs-42">Devolución</h1>
              <h1 className="fw-bold">de deducible</h1>
              <p className="mt-5 pt-5 mb-5 fs-15 text-center">
                Es una asistencia que en caso de que<br />te hospitalicen, te reembolsa un<br />porcentaje fijo del deducible  de tu<br />póliza de gastos médicos mayores.
              </p>
            </div>
          </div>
          <div className="my-5 pt-5">
            <img className="position-relative w-100 description_mb" src={"https://elementos-red-enlace.s3.amazonaws.com/Landing/description-mobile.png"} alt="" />
          </div>
          <div className="px-4">
            <p className="mt-3 mb-0 fs-20 fw-light text-center">
              Con nosotros, tú eliges el porcentaje:
            </p>
            <p className="text-dark mb-5 fs-30 fw-bold text-center">
              30, 50, 80 o hasta 100%
            </p>
          </div>
        </div>
        <hr className="border border-5 border-lile my-0"/>
      </div>
    </DescriptionSection>
  )
}

const DescriptionSection = styled.section`
  height: 100%;

  .text-lile,
  .border-lile {
  color: #6983d6;
  border: 10px solid #6983d6 !important;
  }

  .col-md-5 .img-fluid {
    right: 7rem;
  }

  .fs-15 {
    font-size: 15px;
  }

  .fs-20 {
    font-size: 20px;
  }

  .fs-30 {
    font-size: 30px;
  }

  .fs-42 {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    .description_mb {
      right: 25rem;
      width: 90rem;
    }

    .fs-30 {
    font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .description_mb {
    right: 30%;
    width: 100%;
    }
  }
`