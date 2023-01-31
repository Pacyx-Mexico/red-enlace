import { Btn } from "./Buttons.elements";

function Button({ text, func }) {
  return <Btn onClick={func}>{text}</Btn>;
}

export default Button;
