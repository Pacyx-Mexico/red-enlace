import styled from "styled-components";

export const NextPrevContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: 32% 36% 32%;
  padding: 0 2rem;
  margin-bottom: 30rem;
  margin-top: ${({ mt }) => (mt ? mt : "6rem")};
`;

export const IconPrevContainer = styled.div`
  font-size: 8rem;

  svg {
    fill: var(--primary-color);
    transition: all ease 0.2s;
    cursor: pointer;
  }

  svg:hover {
    fill: var(--secondary-color);
    transform: scale(1.1);
    transition: all ease 0.2s;
  }
`;
