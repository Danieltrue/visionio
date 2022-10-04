import ToolButtonStyle from "./tool-button.css";

const ToolButton = ({ icon, active, ...props }) => {
  return (
    <ToolButtonStyle style={{ background: active ? "red" : "" }} {...props}>
      {icon}
    </ToolButtonStyle>
  );
};

export default ToolButton;
