import React from "react";
import Canvas from "../../components/canvas/canvas";
import Nav from "../../components/nav/nav";
import ToolNavigation from "../../components/tool-navigation/tool-navigation";
import Canvasstyle from "./drawer.css";

const Drawer = () => {
  return (
    <div>
      <ToolNavigation />
      <Canvasstyle>
        <Nav />
        <Canvas />
      </Canvasstyle>
    </div>
  );
};

export default Drawer;
