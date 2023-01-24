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
    <DudesSection className="container d-block text-center fs-2">
      <div className="container my-5">
        <Accordion allowZeroExpanded className="border-none d-flex flex-column gap-5">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4 mb-5 pb-5">&#8226; </span> ¿Cómo funciona?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-30 ps-5">
              En caso de robo total, pérdida total o daños materiales, nosotros te devolveremos el deducible de tu póliza auto de acuerdo con la asistencia que hayas elegido.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Puedo cotizarlo con cualquier póliza?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-30 ps-5">
                Operamos con cualquier compañía aseguradora dentro del territorio nacional.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="secondary-color3 me-4">&#8226; </span> ¿Hay un límite de eventos?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="fw-normal fs-30 ps-5">
                Se pagará el deducible hasta que se agote la suma del plan contratado, sin importar el número de eventos.
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

  .fs-30 {
    font-size: 3rem;
  }

  .accordion__panel {
    text-align: left;
  }

  .secondary-color3 {
    color: #5F93A9;
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
    border-bottom: 4px solid #5F93A9;
    border-right: 4px solid #5F93A9;
    transform: rotate(-45deg);
  }
`;