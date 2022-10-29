import NavMbbileStyle from "./nav.css";
import AdjHolder from "../adjustment-holder/adjholder";
import Variation from "../variation/variation";
import Stroke from "../stroke/stroke";
import { useSelector } from "react-redux";
import Eraser from "../eraser/eraser";
import NavButton from "./nav-button";
import { motion } from "framer-motion";

const NavMobile = () => {
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { activatedEraser } = useSelector(
    (state) => state.rootReducer.activateEraserReducer
  );

  const { activatedMobileNav } = useSelector(
    (state) => state.rootReducer.activateMobileNavReducer
  );

  return (
    <NavMbbileStyle
      as={motion.div}
      initial={{
        y: "83%",
      }}
      animate={{
        y: activatedMobileNav ? "0%" : "89%",
        boxShadow: activatedMobileNav ? `1px 1px 8px var(--shadow-clr)` : `0px`,
      }}
    >
      {activatePencil || activatedEraser ? <NavButton /> : null}
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
    </NavMbbileStyle>
  );
};
export default NavMobile;
