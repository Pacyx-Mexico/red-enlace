import styled from "styled-components";
import { Link } from "react-scroll";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";
import ButtonONHover from "../../../../Buttons/ButtonONHover";

function AccAdd({
  stateAcc,
  onAcc,
  idLink,
  text,
  onBtnEdit,
  btnText,
  openEdit,
  children,
}) {
  return (
    <AccRC>
      <AccRC__Header>
        <AccRC__Header_Icon on={onAcc}>
          {onAcc === "true" ? <BsFillCheckCircleFill /> : <GiPlainCircle />}
        </AccRC__Header_Icon>
        <AccRC__Header_Title>
          <h5>{text}</h5>

          {stateAcc ? (
            ""
          ) : (
            <Link
              to={idLink}
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              <ButtonONHover func={openEdit} text={btnText} on={onBtnEdit} />
            </Link>
          )}
        </AccRC__Header_Title>
      </AccRC__Header>
      {stateAcc ? (
        <AccRC__Form>
          <ContainerLine>
            <LineVertical on={onAcc}></LineVertical>
            <LineHorizontal>
              <LineHorizontal__Line on={onAcc}></LineHorizontal__Line>
            </LineHorizontal>
          </ContainerLine>
          <div>
            {children}

            <LineHorizontal2 on={onAcc}></LineHorizontal2>
          </div>
        </AccRC__Form>
      ) : (
        ""
      )}
    </AccRC>
  );
}

const AccRC = styled.section`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
`;

export const AccRC__Header = styled.header`
  width: 100%;
  min-height: 6rem;
  display: grid;
  grid-template-columns: 8rem auto;
  padding-bottom: 0.8rem;
`;

export const AccRC__Header_Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ on }) =>
      on === "true" ? "var(--primary-color2)" : "var(--off-color)"};
    opacity: ${({ on }) => (on ? "1" : "0.4")};
    font-size: 2.3rem;
    transition: all ease-in-out 0.4s;
  }
`;

export const AccRC__Header_Title = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40rem auto;
  align-items: center;
  justify-items: start;
`;

export const AccRC__Form = styled.div`
  display: grid;
  grid-template-columns: 8rem auto;
  width: 100%;
`;

export const ContainerLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LineVertical = styled.div`
  width: 0.6rem;
  height: 100%;
  background-color: ${({ on }) =>
    on === "true" ? "var(--primary-color2)" : "var(--off-color)"};
  opacity: 0.6;
  transition: all ease-in 0.1s;
`;

export const LineHorizontal = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const LineHorizontal__Line = styled.div`
  width: 53%;
  height: 0.6rem;
  background-color: ${({ on }) =>
    on === "true" ? "var(--primary-color2)" : "var(--off-color)"};
  opacity: 0.6;
  transition: all ease-in 0.1s;
`;

export const LineHorizontal2 = styled.div`
  width: 100%;
  height: 0.6rem;
  background-color: ${({ on }) =>
    on === "true" ? "var(--primary-color2)" : "var(--off-color)"};
  opacity: 0.6;
  transition: all ease-in 0.1s;
`;

export default AccAdd;
