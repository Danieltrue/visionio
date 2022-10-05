import { HexAlphaColorPicker } from "react-colorful";
import Colorstyle from "./color.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeColor } from "../../redux/action/features.action";

const Color = () => {
  const dispatch = useDispatch();

  const [color, setColor] = useState("#000000");
  const [hideColorPicker, setHideColorPicker] = useState(true);

  // this code is used to change the color at the state level.
  useEffect(() => {
    dispatch(changeColor(color));
  }, [color]);

  return (
    <Colorstyle>
      <div
        onClick={(e) => setHideColorPicker(false)}
        onBlur={(e) => setHideColorPicker(true)}
        style={{ backgroundColor: color }}
        tabIndex="0"
        className="color-inner"
      ></div>
      <p>{color}</p>
      <motion.div
        className="color-holder center"
        animate={{
          display: hideColorPicker ? "none" : "flex",
        }}
      >
        <HexAlphaColorPicker
          tabIndex="1"
          onFocus={(e) => setHideColorPicker(false)}
          onBlur={(e) => setHideColorPicker(true)}
          onChange={setColor}
        />
      </motion.div>
    </Colorstyle>
  );
};

export default Color;
