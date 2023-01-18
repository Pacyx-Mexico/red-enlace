import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export const Dudes = () => {
  return (
    <DudesSection className="container d-block text-center fs-2 height-lile">
      <h4 className="mt-5 mt-xxl-5 text-dark fst-italic pb-5">
        Resolvemos tus dudas
      </h4>
      <div className="container my-5">
        <Accordion className="border-none">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Qué condiciones de mi póliza actual pierdo si contrato Red Enlace?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-3">
              Ninguna, incluso se te aumentan beneficios de forma inmediata y se quedan las mismas condiciones de tu póliza actual.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Cuáles son los beneficios extras sin costo que obtengo al contratar un endoso de Red Enlace?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-3">
                Los beneficios se activan desde el primer minuto en el que contratas el endoso.
              </p>
              <p className="fw-normal fs-3">
                - En caso de siniestro te damos una ayuda hospitalaria de $1,000 pesos diarios (topado a 30 días), depositado directamente a tu cuenta, esto aplica únicamente en caso de enfermedades graves (politraumatismo, derrame cerebral o transplante de órganos).
              </p>
              <p className="fw-normal fs-3">
                - El 100% de tu deducible es cubierto por Red Enlace.
              </p>
              <p className="fw-normal fs-3">
                - El pago de siniestros lo realizamos en máximo 72 horas.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Esta asistencia funciona con todas las pólizas de gastos médicos?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-3 text-left">
                Si, se adiciona a cualquier póliza de cualquier compañía con cobertura nacional e internacional.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </DudesSection>
  );
};

const DudesSection = styled.section`
  height: 95rem;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .accordion__button:before {
    display: none;
  }

  .accordion__panel {
    text-align: left;
  }

  .secondary-color3 {
    color: var(--secondary-color3);
  }

  .accordion__button[aria-expanded="true"]::after,
  .accordion__button[aria-selected="true"]::after {
    transform: rotate(45deg);
  }

  .accordion__button {
    background-color: #FFFFFF;
    text-align: start !important;
  }

  .accordion__button:after {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-left: 6%;
    border-bottom: 2px solid #409e75;
    border-right: 2px solid #409e75;
    transform: rotate(-45deg);
  }
`;
