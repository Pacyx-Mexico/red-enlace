import styled from "styled-components";

function CardPackageCards({
  title,
  cost,
  cost2,
  onChange,
  card1,
}) {
  return (
    <CardPC card1={card1}>
      <CardPC__Info>
        <h4>{title}</h4>
        <CardPC__Info_cost>{cost}</CardPC__Info_cost>
        <h5>Pago anual con IVA incluído</h5>
        <h6>
          Te devolvemos tu deducible con un tope máximo de <br />
          <span>{cost2}</span>
        </h6>
      </CardPC__Info>
      <CardPC__Btn>
        <input
          id={`cars${title}`}
          type="radio"
          name="package"
          value={title}
          onChange={onChange}
        />
        <label htmlFor={`cars${title}`}>
          Seleccionar
        </label>
      </CardPC__Btn>
    </CardPC>
  );
}

const CardPC = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  @media screen and (max-width: 1200px) {
    margin-left: ${(card1) => (card1 ? "6rem" : "")};
  }
  @media screen and (max-width: 1100px) {
    margin-left: ${(card1) => (card1 ? "4rem" : "")};
  }
  @media screen and (max-width: 1050px) {
    margin-left: ${(card1) => (card1 ? "2rem" : "")};
  }
  @media screen and (max-width: 960px) {
    margin-left: ${(card1) => (card1 ? "1rem" : "")};
  }
  @media screen and (max-width: 700px) {
    margin-left: ${(card1) => (card1 ? "4rem" : "")};
  }
  @media screen and (max-width: 650px) {
    margin-left: ${(card1) => (card1 ? "2rem" : "")};
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

const CardPC__Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 38rem;
  border-radius: 2rem;
  margin-bottom: 4rem;
  background-color: var(--bgInput-color);
  box-shadow: 3px 3px 8px var(--shadow-color);

  h4 {
    font-size: 3rem;
    font-weight: 600;
    padding: 0 2rem;
  }

  h5 {
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0 4rem;
  }

  h6 {
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0 2rem;

    span {
      font-weight: 600;
    }
  }
`;

const CardPC__Info_cost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6.6rem;
  background-color: var(--tertiary-color);
  font-size: 3rem;
  color: white;
  font-weight: 600;
  border-radius: 1rem;
`;

const CardPC__Btn = styled.div`
  input {
    display: none;
  }

  label {
    display: flex;
    height: 5.8rem;
    user-select: none;
    width: 18rem;
    justify-content: center;
    align-items: center;
    border-radius: 6rem;
    font-size: 2.1rem;
    font-weight: 500;
    color: #fff;
    overflow: hidden;
    box-shadow: 2px 2px 3px var(--shadow-color);
    background-color: var(--primary-color2);
    transition: all ease 0.3s;

    &:hover {
      background-color: var(--secondary-color2);
      transition: all ease 0.3s;
    }

    @media screen and (max-width: 600px) {
      font-size: 2rem;
      width: 16rem;
    }
  }
`;

export default CardPackageCards;
