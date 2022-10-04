import Navstyle from "./nav.css";
import { ImPencil2 } from "react-icons/im";
import ToolButton from "../tool-button/tool-button";
import { useDispatch, useSelector } from "react-redux";
import { startDrawing } from "../../redux/action/features.action";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const [color, setColor] = useState("#aabbcc");

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
            <div className="color">
              <div className="color-inner"></div>
              <p>#ff0000</p>
            </div>
            <div className="inputs">
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
