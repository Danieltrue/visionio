import React, { useState } from "react";
import Canvas from "../../components/canvas/canvas";
import Layout from "../../components/layout/layout";
import Nav from "../../components/nav/nav";
import Canvasstyle from "./drawer.css";

const Drawer = () => {
  return (
    <Canvasstyle>
      <Layout>
        <Nav />
      </Layout>
      <Canvas />
    </Canvasstyle>
  );
};

export default Drawer;
