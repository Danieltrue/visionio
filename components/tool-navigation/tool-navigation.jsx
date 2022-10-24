import DrawingTool from "../drawing-tool/drawing-tool";
import WorkspaceName from "../workspacename/workspace";
import ToolNavigationStyle from "./tool-navigation.css";
import ProfileNav from "../profile-nav/profile-nav";
import { useSelector } from "react-redux";
import DrawingToolMobile from "../drawing-tool (Mobile)/drawing-tool";

const ToolNavigation = () => {
  const { responsive } = useSelector(
    (state) => state.rootReducer.reponsiveSizeReducer
  );

  return (
    <ToolNavigationStyle>
      {responsive <= 500 ? <DrawingToolMobile /> : <DrawingTool />}

      <WorkspaceName />
      <ProfileNav />
    </ToolNavigationStyle>
  );
};

export default ToolNavigation;
