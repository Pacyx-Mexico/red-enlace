import { BtnONHover } from "./Buttons.elements";
import styled from "styled-components";
import Loading from "../../temp/loading.gif";

function ButtonONHover({ text, on, send, func }) {
  return (
    <BtnONHover onClick={func} on={on} send={send}>
      {send ? (
        <LoadingIMG>
          <img src={Loading} alt="loading" />
        </LoadingIMG>
      ) : (
        <>{text}</>
      )}
    </BtnONHover>
  );
}

const LoadingIMG = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    height: 2rem 
  }
`;

export default ButtonONHover;
