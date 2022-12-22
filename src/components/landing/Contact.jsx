import styled from "styled-components";
import { RedEnlaceBg } from "../../assets/backgrounds";
import { Image, Form, Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <ContactSection className="position-relative">
      <div className=" container w-50 position-absolute RE_img_bg">
        <RedEnlaceBg />
      </div>
      <div className="container">
        <h3 className="fw-normal text-start mb-5">¡Contáctanos!</h3>
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
              <div className="col-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control as="textarea" type="text" placeholder="Mensaje:" className="pill fs-3 p-5 form-rounded shadow" style={{ height: '22rem' }}/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="container mt-5 d-flex justify-content-center">
          <Button varianr="primary" class="btn btn-primary btn-lg rounded-pill fs-1">Enviar</Button>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  height: 70rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

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
`;
