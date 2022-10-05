import DrawingTool from "../drawing-tool/drawing-tool";
import WorkspaceName from "../workspacename/workspace";
import ToolNavigationStyle from "./tool-navigation.css";
import ProfileNav from "../profile-nav/profile-nav";

const ToolNavigation = () => {
  return (
    <ToolNavigationStyle>
      <DrawingTool />
      <WorkspaceName />
      <ProfileNav />
    </ToolNavigationStyle>
  );
};

export default ToolNavigation;
