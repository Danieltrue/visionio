import Buttonstyle from "./button.css";

const Button = ({ text, icon }) => {
  return (
    <Buttonstyle>
      {text}
      {icon ? <i class={icon}></i> : null}
    </Buttonstyle>
  );
};

export default Button;
