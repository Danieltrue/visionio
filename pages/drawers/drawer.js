import Layout from "../../components/layout/layout";
import Drawerstyle from "./drawer.css";
import Nav from "../../components/nav/nav";

const Drawer = () => {
  return (
    <Layout>
      <Drawerstyle>
        <Nav />
      </Drawerstyle>
    </Layout>
  );
};

export default Drawer;
