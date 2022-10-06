import SelectFeatureStyle from "./select-feature.css";
import { useDispatch } from "react-redux";
import { changePencilCap } from "../../redux/action/features.action";

const SelectFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <SelectFeatureStyle
      onChange={(e) => dispatch(changePencilCap(e.target.value))}
    >
      {props.lineCap.map((linecap, index) => {
        return <option key={index}>{linecap}</option>;
      })}
    </SelectFeatureStyle>
  );
};

export default SelectFeature;
