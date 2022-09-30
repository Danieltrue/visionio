import Toolbuttonstyle from "./tool-button.css";

const Toolbutton = ({ icono }) => {
  return (
    <Toolbuttonstyle>
      <button>
        <i class={icono}></i>
      </button>
    </Toolbuttonstyle>
  );
};

export default Toolbutton;
