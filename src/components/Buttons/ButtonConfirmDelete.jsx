import { Link } from "react-scroll";
import styled from "styled-components";
import ButtonON from "./ButtonON";
import Button from "./Button";

function ButtonConfirmDelete({ on, confirmEdit, linkId, deleteAdd }) {
  return (
    <BtnFormAdd>
      <Link to={linkId} spy={true} smooth={true} offset={-70} duration={500}>
        <ButtonON text="Confirmar" func={confirmEdit} on={on} />
      </Link>
      <Link to={linkId} spy={true} smooth={true} offset={-70} duration={500}>
        <Button text="Eliminar" func={deleteAdd} on={true} />
      </Link>
    </BtnFormAdd>
  );
}

const BtnFormAdd = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 6rem;
  margin: 0 auto;
  margin-top: 4rem;
`;

export default ButtonConfirmDelete;
