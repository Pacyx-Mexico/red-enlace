import { BtnON } from "./Buttons.elements";
import styled from "styled-components";
import Loading from "../../temp/loading.gif";

function ButtonON({ text, on, send, func }) {
  
  const valFunct = () => {
    if (send === undefined) {
      func();
    } else {
      if (send === false) {
        func();
      }
    }
  };

  return (
    <BtnON onClick={valFunct} on={on} send={send}>
      {send ? (
        <LoadingIMG>
          <img src={Loading} alt="loading" />
        </LoadingIMG>
      ) : (
        <>{text}</>
      )}
    </BtnON>
  );
}

const LoadingIMG = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 2rem;
  }
`;

export default ButtonON;
