import Navstyle from "./nav.css";
import { ImPencil2 } from "react-icons/im";
import ToolButton from "../tool-button/tool-button";
import { useDispatch, useSelector } from "react-redux";
import { startDrawing, stopDrawing } from "../../redux/action/features.action";

const Nav = () => {
  const dispatch = useDispatch();
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );

  return (
    <Navstyle>
      <div className="logs"></div>
      <main className="tools-panel">
        {/* tools here are used to make adjustment to tools being built */}
        <div className="adjusment-tool">
          <div>
            <input type="number" value={10} />
          </div>
        </div>
        {/* tools here are used to draw */}
        <div className="drawing-tool">
          <ToolButton icon={<ImPencil2 />} />
        </div>
      </main>
    </Navstyle>
  );
};
export default Nav;
