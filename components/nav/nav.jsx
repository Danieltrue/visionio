import Navstyle from "./nav.css";
import AdjHolder from "../adjustment-holder/adjholder";
import Variation from "../variation/variation";
import Stroke from "../stroke/stroke";
import { useSelector } from "react-redux";

const Nav = () => {
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
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
      </main>
    </Navstyle>
  );
};
export default Nav;
