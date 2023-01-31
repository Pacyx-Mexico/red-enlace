import styled from "styled-components";

const MainBtn = styled.button`
  height: 5.8rem;
  min-width: 18rem;
  border-radius: 5rem;
  padding: 0 3rem;
  font-size: 2.3rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  border: none;
  box-shadow: 2px 2px 3px var(--shadow-color);
`;

export const Btn = styled(MainBtn)`
  background-color: var(--primary-color2);
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--secondary-color2);
    transition: all ease 0.3s;
  }
`;

export const BtnON = styled(MainBtn)`
  background-color: ${({ on }) =>
    on === "true" ? "var(--primary-color2)" : "var(--off-color2)"};
  ${({ send }) => (send ? "background-color: var(--primary-color2)" : "")};
  transition: all ease 0.3s;

  &:hover {
    ${({ on }) =>
      on === "true" ? "background-color: var(--secondary-color2)" : ""};
    ${({ send }) => (send ? "background-color: var(--primary-color2)" : "")};
    transition: all ease 0.3s;
  }
`;

export const BtnONHover = styled(MainBtn)`
  background-color: ${({ on }) =>
    on === "true" ? "var(--primary-color2)" : "var(--off-color2)"};
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--secondary-color2);
    ${({ send }) => (send ? "background-color: var(--primary-color2)" : "")};
    transition: all ease 0.3s;
  }
`;
export const BtnDown = styled(MainBtn)`
  background-color: #fff;
  color: var(--primary-color2);
  border: 2px solid var(--primary-color2);
  font-weight: 600;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--secondary-color2);
    border: 2px solid var(--secondary-color2);
    color: #fff;
    font-weight: 500;
    transition: all ease 0.3s;
  }
`;
