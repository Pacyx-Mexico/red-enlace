import styled from "styled-components";
import { Image, Form, Button } from "react-bootstrap";

export const InfoForm = () => {
  return (
    <InfoFormSection className="d-flex justify-content-center align-items-center">
      <div className="container d-none d-md-block">
        <p className="fw-normal fs-25 text-center my-5 pb-5">Si deseas más información sobre alguno de nuestros paquetes, favor de llenar este formulario<br /> y nos contactaremos contigo a la brevedad.</p>
        <div className="container card contact-form round rounded-5 contact-form d-flex">
          <Form className="p-5 my-auto mx-5">
            <div className="row d-flex justify-content-between">
              <div className="col-5 align-middle ">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Control type="text" className="rounded-pill fs-3 p-4 border-none shadow" placeholder="Nombre:" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control type="email" className="rounded-pill fs-3 p-4 border-none shadow" placeholder="Correo electrónico:" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control type="phone"  className="rounded-pill fs-3 p-4 border-none shadow" placeholder="Teléfono:" />
                </Form.Group>
              </div>
              <div className="col-5 align-middle ">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Control type="text" className="rounded-pill fs-3 p-4 border-none shadow" placeholder="Género:" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control type="email" className="rounded-pill fs-3 p-4 border-none shadow" placeholder="Código postal:" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control type="phone"  className="rounded-pill fs-3 p-4 border-none shadow" placeholder="Plan de la póliza primaria:" />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button varianr="primary" class="btn btn-primary fs-2 rounded-pill px-5 fw-bold">Enviar</button>
        </div>
      </div>

      <div className="container d-flex alig-items-center flex-column d-md-none px-5">
      <p className="fw-normal fs-1 text-center mb-5 px-5">Si deseas más información sobre alguno de nuestros paquetes, favor de llenar este formulario y nos contactaremos contigo a la brevedad.</p>
        <div className="container card contact-form round rounded-5 contact-form d-flex shadow-lg pt-5 mt-5">
          <Form className="p-5 my-4 mx-5">
            <div className="flex-column d-flex justify-content-between">
              <div className="col-12">
                <Form.Group className="mb-5 shadow-lg" controlId="formBasicEmail">
                  <Form.Control type="text" className="fs-3 p-4 border-none shadow py-5" placeholder="Nombre:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg" controlId="formBasicPassword">
                  <Form.Control type="email" className="fs-3 p-4 border-none shadow py-5" placeholder="Correo electrónico:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg" controlId="formBasicPassword">
                  <Form.Control type="phone"  className="fs-3 p-4 border-none shadow py-5" placeholder="Teléfono:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg" controlId="formBasicEmail">
                  <Form.Control type="text" className="fs-3 p-4 border-none shadow py-5" placeholder="Nombre:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg" controlId="formBasicPassword">
                  <Form.Control type="email" className="fs-3 p-4 border-none shadow py-5" placeholder="Correo electrónico:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg" controlId="formBasicPassword">
                  <Form.Control type="phone"  className="fs-3 p-4 border-none shadow py-5" placeholder="Teléfono:" />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="container mt-5 d-flex justify-content-center">
          <button varianr="primary" class="btn btn-primary fs-2 rounded-pill px-5 fw-bold">Enviar</button>
        </div>
      </div>
    </InfoFormSection>
  );
};

const InfoFormSection = styled.section`
  height: 50vh;
  padding-top: 0; 
  padding-bottom: 0;

  .RE_img_bg {
    z-index: 1;
    height: 40% !important;
    width: auto;
    top: 0rem;
    right: 0;
    opacity: 0.2;
  }

  .contact-form {
    z-index: 5;
    height: 35rem;
    background-color: white;
    border: none;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);;
  }

  Button {
    background-color: #3357C8 !important;
  }

  .btn-lg {
    width: 16rem;
  }

  .form-rounded {
    border-radius: 2rem;
    border: none;
  }

  .border-none {
    border: none;
  }

  .fs-25 {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    height: 81vh;

    .contact-form {
      height: auto;
    }

    .contact__title {
      font-size: 25px;
      margin-bottom: 10rem;
    }

    textarea {
      height: 58.5rem;
    }
  }
`;
