import Color from "../color/color";
import NumberInput from "../number-input/numberInput";
import StrokeStyle from "./stroke.css";

const Stroke = () => {
  return (
    <StrokeStyle>
      <p className="adj">Stroke</p>
      <div className="feat">
        <Color color={"#000000"} />
        <NumberInput />
      </div>
    </StrokeStyle>
  );
};

export default Stroke;
