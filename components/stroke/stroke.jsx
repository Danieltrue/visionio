import Color from "../color/color";
import NumberInput from "../number-input/numberInput";
import StrokeStyle from "./stroke.css";
import { useDispatch, useSelector } from "react-redux";
import { changePencilSize } from "../../redux/action/features.action";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import FeatureButton from "../feature-button/feature-button";
import AdvanceFeatureHolder from "../advance-feature-holder/advance-feature-holder";
import { useState } from "react";
import ColorMobile from "../color (Mobile)/color";

const Stroke = () => {
  const dispatch = useDispatch();
  const [lineCap, setLineCap] = useState(["round", "butt", "square"]);
  const [advanceOpener, setAdvanceOpener] = useState(false);

  const { size } = useSelector(
    (state) => state.rootReducer.changePencilSizeReducer
  );

  const { responsive } = useSelector(
    (state) => state.rootReducer.reponsiveSizeReducer
  );

  return (
    <StrokeStyle>
      <p className="adj">Stroke</p>
      <div className="feat">
        {responsive <= 500 ? (
          <ColorMobile color={"#000000"} />
        ) : (
          <Color color={"#000000"} />
        )}

        <NumberInput
          onChange={(e) => dispatch(changePencilSize(e.target.value))}
          placeholder={size + "%"}
          value={size > 100 ? 100 : size}
          min={2}
          max={100}
        />
        <FeatureButton
          active={advanceOpener ? true : false}
          onFocus={(e) => setAdvanceOpener(true)}
          onBlur={(e) => setAdvanceOpener(false)}
          onClick={(e) =>
            advanceOpener ? setAdvanceOpener(false) : setAdvanceOpener(true)
          }
          tabIndex="1"
          icon={<HiOutlineDotsHorizontal />}
        />
        <AdvanceFeatureHolder
          lineCap={lineCap}
          advanceOpener={advanceOpener}
          setAdvanceOpener={setAdvanceOpener}
        />
      </div>
    </StrokeStyle>
  );
};

export default Stroke;
