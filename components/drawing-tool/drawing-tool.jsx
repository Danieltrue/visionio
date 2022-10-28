import DrawingToolStyle from "./drawing-tool.css";
import { HiOutlineHome } from "react-icons/hi";
import { BsEraser, BsPencil } from "react-icons/bs";
import ToolButton from "../tool-button/tool-button";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivatePencil,
  setActivateEraser,
} from "../../hook/toolActivation";

const DrawingTool = () => {
  const dispatch = useDispatch();
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { activatedEraser } = useSelector(
    (state) => state.rootReducer.activateEraserReducer
  );
  return (
    <DrawingToolStyle>
      <ToolButton icon={<HiOutlineHome />} />
      <ToolButton
        active={activatedEraser}
        onClick={(e) => {
          setActivateEraser(activatedEraser, dispatch);
        }}
        icon={<BsEraser />}
      />
      <ToolButton
        active={activatePencil}
        onClick={(e) => {
          setActivatePencil(activatePencil, dispatch);
        }}
        icon={<BsPencil />}
      />
    </DrawingToolStyle>
  );
};

export default DrawingTool;
