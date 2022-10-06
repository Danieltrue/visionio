// This React Component is used to hold the tools most advanced feature in a box
import { motion } from "framer-motion";
import Tiles from "../advance-tiles/tiles";
import SelectFeature from "../select-feature/select-feature";
import AdvanceFeatureHolderStyle from "./advance-feature-holder.css";

const AdvanceFeatureHolder = (props) => {
  return (
    <AdvanceFeatureHolderStyle
      as={motion.div}
      animate={{
        display: props.advanceOpener ? "block" : "none",
      }}
      tabIndex="1"
      onFocus={(e) => props.setAdvanceOpener(true)}
      onBlur={(e) => props.setAdvanceOpener(false)}
    >
      <Tiles title={"title"}>
        <div></div>
      </Tiles>
      <Tiles title={"stroke-cap"}>
        <SelectFeature lineCap={props.lineCap} />
      </Tiles>
    </AdvanceFeatureHolderStyle>
  );
};

export default AdvanceFeatureHolder;
