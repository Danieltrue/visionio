import DrawingToolStyle from "./drawing-tool.css";
import { HiOutlinePencil, HiOutlineHome } from "react-icons/hi";
import ToolButton from "../tool-button/tool-button";
import { useDispatch, useSelector } from "react-redux";
import { startDrawing } from "../../redux/action/features.action";

const DrawingTool = () => {
  const dispatch = useDispatch();
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  return (
    <DrawingToolStyle>
      <ToolButton icon={<HiOutlineHome />} />
      <ToolButton
        active={activatePencil}
        onClick={(e) => {
          !activatePencil
            ? dispatch(startDrawing(true))
            : dispatch(startDrawing(false));
        }}
        icon={<HiOutlinePencil />}
      />
    </DrawingToolStyle>
  );
};

export default DrawingTool;
