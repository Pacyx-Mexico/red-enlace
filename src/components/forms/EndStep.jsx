import { useState, useEffect } from "react";
import styled from "styled-components";

function EndStep({ email, state }) {
  const [email2, setEmail2] = useState("");

  const valEmail = () => {
    if (state !== undefined) {
      if (state.factura_si_no === "si") {
        setEmail2(state.correo);
      } else {
        setEmail2(state.correoFactura);
      }
    }
  };
  useEffect(() => {
    valEmail();
  }, []);

  return (
    <>
      <EndTitleRC>
        <h2>Se ha enviado el link de pago a tu correo electrónico</h2>
        {email ? <h6>{email}</h6> : <h6>{email2}</h6>}
        <EndTitleRC__h5>
          <h5>¿Tienes alguna duda?</h5>
          <EndTitleRC__h5_line></EndTitleRC__h5_line>
        </EndTitleRC__h5>
      </EndTitleRC>
      <EndContactRC>
        <LinkContactRC href="mailto:contacto@redenlace.com.mx">
          contacto@redenlace.com.mx
        </LinkContactRC>
        <LineContactRC />
        <LinkContactRC href="tel:+05554881900">(55)54881900</LinkContactRC>
        <LineContactRC />
        <h6>Contáctanos</h6>
        <LineContactRC />
        <LinkContactRC href="tel:+05541400531">(55)41400531</LinkContactRC>
        <LineContactRC />
        <LinkContactRC
          href="https://www.instagram.com/redenlacemx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.redenlace.com.mx
        </LinkContactRC>
      </EndContactRC>
      <EndContactRCPhone className="gridRCPhone1">
        <LinkContactRC href="tel:+05554881900">(55)54881900</LinkContactRC>
        <LineContactRC />
        <h6>Contáctanos</h6>
        <LineContactRC />
        <LinkContactRC href="tel:+05541400531">(55)41400531</LinkContactRC>
      </EndContactRCPhone>
      <EndContactRCPhone className="gridRCPhone2">
        <LinkContactRC href="mailto:contacto@redenlace.com.mx">
          contacto@redenlace.com.mx
        </LinkContactRC>
        <div></div>
        <LinkContactRC
          href="https://www.instagram.com/redenlacemx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.redenlace.com.mx
        </LinkContactRC>
      </EndContactRCPhone>
    </>
  );
}

const EndTitleRC = styled.section`
  width: 60%;
  padding-top: 20rem;
  padding-bottom: 10rem;
  margin: 0 auto;
  overflow: hidden;
  h2 {
    font-style: italic;
    font-size: 6rem;
    margin-bottom: 2rem;
  }
  h6 {
    font-weight: 500;
    font-size: 4rem;
    margin-bottom: 8rem;
  }
`;
const EndTitleRC__h5 = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    margin-bottom: 0.6rem;
  }
`;
const EndTitleRC__h5_line = styled.div`
  width: 36rem;
  height: 0.46rem;
  background-color: var(--primary-color3);
`;

const EndContactRC = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20rem;
  display: flex;
  align-items: center;

  h6 {
    font-style: italic;
    user-select: none;
    color: var(--primary-color);
    font-size: 2.4rem;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LinkContactRC = styled.a`
  cursor: pointer;
  color: var(--primary-color2);
  font-size: 1.8rem;
  text-decoration: none;
  text-align: center;
  transition: all ease-in 0.3s;

  &:hover {
    color: var(--primary-color);
    transform: scale(1.1);
    transition: all ease-in 0.3s;
    text-shadow: 2px 2px 4px var(--shadow-color);
  }
`;

const LineContactRC = styled.div`
  width: 10rem;
  margin: 0 auto;
  height: 0.4rem;
  background-color: var(--primary-color3);
  opacity: 0.8;
  @media screen and (max-width: 600px) {
    width: 4rem;
  }
`;

const EndContactRCPhone = styled.section`
  display: none;

  h6 {
    font-style: italic;
    user-select: none;
    color: var(--primary-color);
    font-size: 2.4rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 88%;
    margin: 0 auto;

    &.gridRCPhone1 {
      margin-bottom: 2rem;
    }
    &.gridRCPhone2 {
      margin-bottom: 40rem;
    }
  }
`;
export default EndStep;
