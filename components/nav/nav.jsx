import Navstyle from "./nav.css";
import AdjHolder from "../adjustment-holder/adjholder";
import Variation from "../variation/variation";
import Stroke from "../stroke/stroke";

const Nav = () => {
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
