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
                <span className="secondary-color3 me-4">&#8226; </span> Si contrato
                Red Enlace, ¿Se pierde cobertura de mi póliza actual?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-3">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Cuándo puedo
                hacer uso de los beneficios adicionales que contrate?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-3">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Esta
                asistencia funciona con todas las pólizas de gastos médicos?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-3">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <button className="btn btn-primary rounded-pill btn-lg fs-3 fs-md-2 bg-white border border-secondary border-2 text-dark px-5 opacity-50">Ver más</button>
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
