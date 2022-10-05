import Navstyle from "./nav.css";
import { ImPencil2 } from "react-icons/im";
import ToolButton from "../tool-button/tool-button";
import { useDispatch, useSelector } from "react-redux";
import { startDrawing, changeColor } from "../../redux/action/features.action";
import { HexColorPicker } from "react-colorful";
import { useEffect, useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    dispatch(changeColor(color));
  }, [color]);

  return (
    <Navstyle>
      <div className="logs"></div>
      <main className="tools-panel">
        {/* tools here are used to draw */}
        <div className="drawing-tool">
          <ToolButton
            active={activatePencil}
            onClick={(e) => {
              !activatePencil
                ? dispatch(startDrawing(true))
                : dispatch(startDrawing(false));
            }}
            icon={<ImPencil2 />}
          />
        </div>
        {/* tools here are used to make adjustment to tools being built */}
        <div className="adjusment-tool">
          <p>Stroke</p>
          <div className="tools">
            <div className="inputs">
              <input type="number" min={10} max={100} />
            </div>
            <div className="color">
              <div
                style={{ backgroundColor: color }}
                className="color-inner"
              ></div>
              <p>{color}</p>
            </div>
            <div className="inputs-opacity">
              <input type="number" />
            </div>
          </div>
          {/* color pallete */}
          <div>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </div>
      </main>
    </Navstyle>
  );
};
export default Nav;
