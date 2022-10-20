import React from "react";
import Canvas from "../../components/canvas/canvas";
import Nav from "../../components/nav/nav";
import ToolNavigation from "../../components/tool-navigation/tool-navigation";
import Canvasstyle from "./drawer.css";
import { useSelector } from "react-redux";

const Drawer = () => {
  const { responsive } = useSelector(
    (state) => state.rootReducer.reponsiveSizeReducer
  );
  return (
    <div style={{ height: "hidden" }}>
      <ToolNavigation />
      <Canvasstyle>
        <Nav mobile={responsive <= 500 ? true : false} />
        <Canvas />
      </Canvasstyle>
    </div>
  );
};

export default Drawer;
