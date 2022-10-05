import { HexAlphaColorPicker } from "react-colorful";
import Colorstyle from "./color.css";
import { useState } from "react";

const Color = ({ color }) => {
  const [colors, setColor] = useState("#000000");

  return (
    <Colorstyle>
      <div style={{ backgroundColor: color }} className="color-inner"></div>
      <p>{color}</p>
      <div className="color-holder center">
        <HexAlphaColorPicker onChange={setColor} />
      </div>
    </Colorstyle>
  );
};

export default Color;
