import Colorstyle from "./color.css";

const Color = ({ color }) => {
  return (
    <Colorstyle>
      <div style={{ backgroundColor: color }} className="color-inner"></div>
      <p>{color}</p>
    </Colorstyle>
  );
};

export default Color;
