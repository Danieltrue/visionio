import Color from "../color/color";
import NumberInput from "../number-input/numberInput";
import StrokeStyle from "./stroke.css";
import { useDispatch, useSelector } from "react-redux";
import { changePencilSize } from "../../redux/action/features.action";

const Stroke = () => {
  const dispatch = useDispatch();

  const { size } = useSelector(
    (state) => state.rootReducer.changePencilSizeReducer
  );

  return (
    <StrokeStyle>
      <p className="adj">Stroke</p>
      <div className="feat">
        <Color color={"#000000"} />
        <NumberInput
          onChange={(e) => dispatch(changePencilSize(e.target.value))}
          placeholder={size + "%"}
          value={size > 100 ? 100 : size}
          min={2}
          max={100}
        />
      </div>
    </StrokeStyle>
  );
};

export default Stroke;
