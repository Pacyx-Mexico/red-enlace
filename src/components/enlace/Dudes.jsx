import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const Dudes = () => {
  return (
    <DudesSection className="container d-block text-center  fs-2">
      <h4 className="mt-5 mt-xxl-5 fw-normal fs-50 text-dark pb-5">
        Preguntas frecuentes
      </h4>
      <div className="container my-5">
        <Accordion allowZeroExpanded className="border-none d-flex flex-column gap-5">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span>
                <span className="fs-35">
                  ¿Qué condiciones de mi póliza actual pierdo si contrato Red Enlace?
                </span> 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal ms-5 ps-2 fs-35">
                Ninguna, incluso se te aumentan beneficios de forma inmediata y se quedan las mismas condiciones de tu póliza actual.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span>
                <span className="fs-35">¿Cuáles son los beneficios extras sin costo que obtengo al contratar un endoso de Red Enlace?</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="d-flex flex-column gap-3">
                <p className="fw-normal ms-5 ps-2 fs-35">
                  Los beneficios se activan desde el primer minuto en el que contratas el endoso.
                </p>
                <p className="fw-normal ms-5 ps-2 fs-35">
                  - En caso de siniestro te damos una ayuda hospitalaria de $1,000 pesos diarios (topado a 30 días), depositado directamente a tu cuenta, esto aplica únicamente en caso de enfermedades graves (politraumatismo, derrame cerebral o transplante de órganos).
                </p>
                <p className="fw-normal ms-5 ps-2 fs-35">
                  - El 100% de tu deducible es cubierto por Red Enlace.
                </p>
                <p className="fw-normal ms-5 ps-2 fs-35">
                  - El pago de siniestros lo realizamos en máximo 72 horas.
                </p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span>
                <span className="fs-35">
                ¿Esta asistencia funciona con todas las pólizas de gastos médicos?</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal ms-5 ps-2 text-left fs-35">
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
  height: auto;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .accordion__button:before {
    display: none;
  }

  .accordion__panel {
    text-align: left;
  }

  .fs-40 {
    font-size: 4rem;
  }

  .fs-35 {
    font-size: 3.5rem;
    text-align: left;
  }

  .fs-50 {
    font-size: 5rem;
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
    font-size: 3rem;
    font-weight: 400;
  }

  .accordion__button:after {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-left: 6%;
    border-bottom: 4px solid #409e75;
    border-right: 4px solid #409e75;
    transform: rotate(-45deg);
  }
`;
