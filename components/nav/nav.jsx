import Navstyle from "./nav.css";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/action/features.action";
import { HexColorPicker } from "react-colorful";
import { useEffect, useState } from "react";
import Color from "../color/color";
import AdjHolder from "../adjustment-holder/adjholder";
import Variation from "../variation/variation";
import Stroke from "../stroke/stroke";

const Nav = () => {
  const dispatch = useDispatch();

  const [color, setColor] = useState("#000000");

  useEffect(() => {
    dispatch(changeColor(color));
  }, [color]);

  return (
    <Navstyle>
      <main className="tools-panel">
        <AdjHolder>
          <Variation />
        </AdjHolder>
        <AdjHolder>
          <Stroke />
        </AdjHolder>
      </main>
    </Navstyle>
  );
};
export default Nav;
