import Color from "../color/color";
import NumberInput from "../number-input/numberInput";
import { useDispatch, useSelector } from "react-redux";
import { changePencilSize } from "../../redux/action/features.action";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import FeatureButton from "../feature-button/feature-button";
import AdvanceFeatureHolder from "../advance-feature-holder/advance-feature-holder";
import { useState } from "react";
import EraserStyle from "./eraser.css";

const Eraser = () => {
  const dispatch = useDispatch();
  const [lineCap, setLineCap] = useState(["round", "butt", "square"]);
  const [advanceOpener, setAdvanceOpener] = useState(false);

  const { size } = useSelector(
    (state) => state.rootReducer.changePencilSizeReducer
  );

  return (
    <EraserStyle>
      <p className="adj">Eraser</p>
      <div className="feat">
        <NumberInput
          onChange={(e) => dispatch(changePencilSize(e.target.value))}
          placeholder={size + "%"}
          value={size > 100 ? 100 : size}
          min={2}
          max={100}
        />
      </div>
    </EraserStyle>
  );
};

export default Eraser;
