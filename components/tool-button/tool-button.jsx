import Toolbuttonstyle from "./tool-button.css";

const Toolbutton = ({ icono, text }) => {
  return (
    <Toolbuttonstyle>
      <button>
        <i className={icono}></i>
        {/* <p>{text}</p> */}
      </button>
    </Toolbuttonstyle>
  );
};

export default Toolbutton;
