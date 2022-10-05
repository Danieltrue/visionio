import DrawingToolStyle from "./drawing-tool.css";
import { HiPencil, HiHome } from "react-icons/hi";
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
      <ToolButton icon={<HiHome />} />
      <ToolButton
        active={activatePencil}
        onClick={(e) => {
          !activatePencil
            ? dispatch(startDrawing(true))
            : dispatch(startDrawing(false));
        }}
        icon={<HiPencil />}
      />
    </DrawingToolStyle>
  );
};

export default DrawingTool;
