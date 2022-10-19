import Navstyle from "./nav.css";
import AdjHolder from "../adjustment-holder/adjholder";
import Variation from "../variation/variation";
import Stroke from "../stroke/stroke";
import { useSelector } from "react-redux";
import Eraser from "../eraser/eraser";

const Nav = () => {
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { activatedEraser } = useSelector(
    (state) => state.rootReducer.activateEraserReducer
  );
  return (
    <Navstyle>
      <main className="tools-panel">
        <AdjHolder show={true}>
          <Variation />
        </AdjHolder>
        {/* this code is written to ensure that the pencil is clicked before the features can be adjusted */}
        <AdjHolder show={activatePencil}>
          <Stroke />
        </AdjHolder>
        {/* this code is written to ensure that the pencil is clicked before the features can be adjusted */}
        <AdjHolder show={activatedEraser}>
          <Eraser />
        </AdjHolder>
      </main>
    </Navstyle>
  );
};
export default Nav;
