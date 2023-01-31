import { MdArrowBackIosNew } from "react-icons/md";
import { NextPrevContainer, IconPrevContainer } from "./NextPrevStepelements";
import ButtonON from "./ButtonON";

function NextPrevStep({
  icon,
  text,
  nextStep,
  prevStep,
  on,
  send,
  hideBtn,
  mt,
}) {
  return (
    <NextPrevContainer mt={mt}>
      <div>
        {icon ? (
          <IconPrevContainer onClick={prevStep}>
            <MdArrowBackIosNew />
          </IconPrevContainer>
        ) : (
          ""
        )}
      </div>
      <div>
        {hideBtn ? (
          ""
        ) : (
          <ButtonON send={send} func={nextStep} on={on} text={text} />
        )}
      </div>
      <div></div>
    </NextPrevContainer>
  );
}

export default NextPrevStep;
