import DrawingToolMobileStyle from "./drawing-tool.css";
import { HiOutlineHome } from "react-icons/hi";
import { BsEraser, BsPencil, BsThreeDots } from "react-icons/bs";
import ToolButton from "../tool-button/tool-button";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivatePencil,
  setActivateEraser,
} from "../../hook/toolActivation";
import { motion } from "framer-motion";
import { useState } from "react";

const DrawingToolMobile = () => {
  const dispatch = useDispatch();
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { activatedEraser } = useSelector(
    (state) => state.rootReducer.activateEraserReducer
  );
  const [mobileToolNav, setMobileToolNav] = useState(false);
  return (
    <DrawingToolMobileStyle>
      <ToolButton icon={<HiOutlineHome />} />
      <ToolButton
        icon={<BsThreeDots />}
        onClick={(e) => setMobileToolNav(!mobileToolNav)}
        active={mobileToolNav}
        onBlur={(e) => setMobileToolNav(false)}
      />
      <motion.section
        initial={{
          display: "none",
        }}
        animate={{
          display: mobileToolNav ? "grid" : "none",
        }}
        onBlur={(e) => setMobileToolNav(false)}
        tabIndex="1"
        className="tools-grided"
      >
        <ToolButton
          active={activatePencil}
          onClick={(e) => {
            setActivatePencil(activatePencil, dispatch);
          }}
          icon={<BsPencil />}
        />
        <ToolButton
          active={activatedEraser}
          onClick={(e) => {
            setActivateEraser(activatedEraser, dispatch);
          }}
          icon={<BsEraser />}
        />
      </motion.section>
    </DrawingToolMobileStyle>
  );
};

export default DrawingToolMobile;
