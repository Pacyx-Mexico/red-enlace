import styled from "styled-components";
import descriptionImg from "../../assets/images/description-image.png"

export const Description = () => {
  return (
    <DescriptionSection className="container-fluid">
      <div className="d-flex flex-column">
        <div className="row mt-5 pt-5">
          <div className="col-md-5">
            <img className="img-fluid h-100" src={descriptionImg} alt="" />
          </div>
          <div className="col-md-7 col-xl-7 d-flex flex-column justify-content-center align-items-start text-start text-lg-start ml-5 pl-5">
            <div className="d-flex flex-column mx-auto">
              <h1 className="fw-normal mt-5 pt-5 text-start">Devolución</h1>
              <h1 className="fw-bold">de deducible</h1>
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
    </DescriptionSection>
  )
}

const DescriptionSection = styled.section`
  height: 92rem;

  .text-lile,
  .border-lile {
  color: #6983d6;
  border: 10px solid #6983d6 !important;
  }
`