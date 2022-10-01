import Link from "next/link";
import Buttonstyle from "./button.css";
// NOTE : distribute the button to render based on if link
// is provided
const Button = ({ text, icon, link }) => {
  return (
    <Link href={link}>
      <Buttonstyle>
        {text}
        {icon ? <i className={icon}></i> : null}
      </Buttonstyle>
    </Link>
  );
};

export default Button;
