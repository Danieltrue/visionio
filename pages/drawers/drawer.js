import Layout from "../../components/layout/layout";
import Drawerstyle from "./drawer.css";
import Nav from "../../components/nav/nav";
import Canvas from "../../components/canvas/canvas";


const Drawer = () => {

  return (
    <Layout>
      <Drawerstyle>
        <Nav />
          <section className="drawing-canvas">
            <Canvas/>
          </section>
      </Drawerstyle>
    </Layout>
  );
};

export default Drawer;
