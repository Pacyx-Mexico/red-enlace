import styled from "styled-components";

function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  height: 6rem;
  min-width: auto;
  border-radius: 5rem;
  padding: 0 4rem;
  border: 2px solid var(--primary-color2);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  padding-top: 0.25rem;
  color: var(--primary-color2);
  box-shadow: 2px 2px 3px var(--shadow-color);
  background-color: #FFFFFF; 
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--primary-color2);
    transition: all ease 0.3s;
    color: #FFFFFF;
  }
`;

export default Button;