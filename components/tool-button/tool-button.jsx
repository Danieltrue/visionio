import Toolbuttonstyle from "./tool-button";

const Toolbutton = ({ icon }) => {
  return (
    <Toolbuttonstyle>
      <button>
        <i class={icon}></i>
      </button>
    </Toolbuttonstyle>
  );
};

export default Toolbutton;
