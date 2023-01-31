import { Link } from "react-scroll";
import styled from "styled-components";
import { Overlay, ContainerModal } from "../../styles/modal.elements";
import Button from "../Button";

function AlertForm({ showAlert, closedAlert, linkId, text }) {

  return (
    <Overlay showModal={showAlert}>
      <ContainerModal showModal={showAlert}>
        <AlertFormCont>
          <h5>
            {text
              ?  text 
              : "Llena todos los campos correctamente antes de continuar"}
          </h5>

          <Link
            to={linkId}
            spy={true}
            smooth={true}
            offset={-70}
            duration={360}
          >
            <Button func={closedAlert} text="Aceptar" />
          </Link>
        </AlertFormCont>
      </ContainerModal>
    </Overlay>
  );
}

const AlertFormCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 24rem;
  width: 50rem;
  padding: 0.4rem;
`;

export default AlertForm;
