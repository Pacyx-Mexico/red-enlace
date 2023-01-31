import { useEffect } from "react";
import styled from "styled-components";
import NextPrevStep from "../../Buttons/NextPrevStep";
import StepIndicatorAutos from "./StepIndicatorAutos";
import SliderPackageCars from "./Inputs/PackagesCars/SliderPackageCars";
import InstructionForm from "../../forms/InstructionForm";

function Step3Autos({ data, activeStep, prevStep, handleChangePackage }) {
  useEffect(() => {
    activeStep();
  }, []);

  return (
    <>
      <StepIndicatorAutos state={data} />
      <InstructionForm instruction="Seleeciona el paquete de tu preferencia" />

      <ContSlider className="pc">
        <SliderPackageCars
          data={data}
          handleChangePackage={handleChangePackage}
          navigation={false}
          slides={5}
        />
      </ContSlider>

      <ContSlider className="tablet">
        <SliderPackageCars
          data={data}
          handleChangePackage={handleChangePackage}
          navigation={true}
          slides={4}
        />
      </ContSlider>

      <ContSlider className="phone">
        <SliderPackageCars
          data={data}
          handleChangePackage={handleChangePackage}
          navigation={true}
          slides={1}
        />
      </ContSlider>

      <NextPrevStep
        icon={true}
        text="Siguiente"
        prevStep={prevStep}
        hideBtn={true}
      />
    </>
  );
}

const ContSlider = styled.div`
  width: 100%;
  overflow: hidden;

  &.pc {
    display: block;
  }
  &.tablet {
    display: none;
  }
  &.phone {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    &.pc {
      display: none;
    }
    &.tablet {
      display: block;
    }
  }
  
  @media screen and (max-width: 600px) {
    &.tablet {
      display: none;
    }
    &.phone {
      display: block;
    }
  }
`;

export default Step3Autos;
