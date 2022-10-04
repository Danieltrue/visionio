import React, { useState } from "react";
import Canvas from "../../components/canvas/canvas";
import Nav from "../../components/nav/nav";
import Canvasstyle from "./drawer.css";

const Drawer = () => {
  return (
    <Canvasstyle>
      <Nav />
      <Canvas />
    </Canvasstyle>
  );
};

export default Drawer;
