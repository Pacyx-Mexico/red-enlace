import styled, { keyframes } from "styled-components";
import { CgSpinnerTwo } from "react-icons/cg";

function Spinner({ h }) {
  return (
    <InfiniteRotate h={h}>
      <CgSpinnerTwo />
    </InfiniteRotate>
  );
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const InfiniteRotate = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ h }) => (h ? h : "")};
  animation: ${rotate} 2s linear infinite;
  svg {
    color: var(--primary-color3);
  }
`;

export default Spinner;
