import FeatureButtonStyle from "./feature-button.css";

const FeatureButton = ({ icon, active, ...props }) => {
  return (
    <FeatureButtonStyle
      className={active ? "active center" : "center"}
      {...props}
    >
      {icon}
    </FeatureButtonStyle>
  );
};

export default FeatureButton;
