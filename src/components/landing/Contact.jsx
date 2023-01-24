import styled from "styled-components";
import { Image, Form, Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <ContactSection className="position-relative">
      <div className="container d-none d-md-block">
        <h4 className="fw-normal fs-55 text-start mb-5 pb-5">¡Contáctanos!</h4>
        <div className="container card contact-form round rounded-5 contact-form d-flex">
          <Form className="p-5 my-auto mx-5">
            <div className="row d-flex justify-content-between">
              <div className="col-5 align-middle ">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Control type="text" className="rounded-pill fs-35 p-4 border-none shadow" placeholder="Nombre:" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control type="email" className="rounded-pill fs-35 p-4 border-none shadow" placeholder="Correo electrónico:" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control type="phone"  className="rounded-pill fs-35 p-4 border-none shadow" placeholder="Teléfono:" />
                </Form.Group>
              </div>
              <div className="col-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control as="textarea" type="text" placeholder="Mensaje:" className="pill fs-35 p-5 form-rounded shadow" style={{ height: '26rem' }}/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button varianr="primary" className="btn btn-primary fs-2 rounded-pill px-5 fw-bold">Enviar</button>
        </div>
      </div>

      <div className="container d-md-none px-5">
        <h3 className="fw-500 contact__title text-center">¡Contáctanos!</h3>
        <div className="container card contact-form round rounded-5 contact-form d-flex shadow-lg pt-5 mt-5">
          <Form className="p-5 my-4 mx-5">
            <div className="flex-column d-flex justify-content-between">
              <div className="col-12">
                <Form.Group className="mb-5 shadow-lg rounded-pill" controlId="formBasicEmail">
                  <Form.Control type="text" className="fs-3 p-4 border-none shadow rounded-pill" placeholder="Nombre:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg rounded-pill" controlId="formBasicPassword">
                  <Form.Control type="email" className="fs-3 p-4 border-none shadow rounded-pill" placeholder="Correo electrónico:" />
                </Form.Group>
                <Form.Group className="mb-5 shadow-lg rounded-pill" controlId="formBasicPassword">
                  <Form.Control type="phone"  className="fs-3 p-4 border-none shadow rounded-pill" placeholder="Teléfono:" />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group className="mb-3 shadow-lg rounded-pill" controlId="formBasicEmail">
                  <Form.Control as="textarea" type="text" placeholder="Mensaje:" className="fs-3 p-5 form-rounded shadow"/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="container mt-5 d-flex justify-content-center">
          <button varianr="primary" className="btn btn-primary fs-2 rounded-pill px-5 fw-bold">Enviar</button>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  height: 60rem;

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

  .fs-55 {
    font-size: 5.5rem;
  }

  .fs-35, textarea {
    font-size: 2.3rem;
  }

  .border-none {
    border: none;
  }

  @media (max-width: 768px) {
    height: 140rem;

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
