import ToolButtonStyle from "./tool-button.css";

const ToolButton = ({ icon, active, ...props }) => {
  return (
    <ToolButtonStyle className={active ? "active" : ""} {...props}>
      {icon}
    </ToolButtonStyle>
  );
};

export default ToolButton;
