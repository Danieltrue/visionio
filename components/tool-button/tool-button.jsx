import ToolButtonStyle from "./tool-button.css";

const ToolButton = ({ icon, ...props }) => {
  return <ToolButtonStyle {...props}>{icon}</ToolButtonStyle>;
};

export default ToolButton;
