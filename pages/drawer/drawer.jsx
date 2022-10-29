import React from "react";
import Canvas from "../../components/canvas/canvas";
import Nav from "../../components/nav/nav";
import ToolNavigation from "../../components/tool-navigation/tool-navigation";
import Canvasstyle from "./drawer.css";
import { useSelector } from "react-redux";
import NavMobile from "../../components/nav (Mobile)/nav";

const Drawer = () => {
  const { responsive } = useSelector(
    (state) => state.rootReducer.reponsiveSizeReducer
  );
  return (
    <div style={{ overflowX: "hidden" }}>
      <ToolNavigation />
      <Canvasstyle>
        {responsive <= 500 ? <NavMobile /> : <Nav />}
        <Canvas />
      </Canvasstyle>
    </div>
  );
};

export default Drawer;
