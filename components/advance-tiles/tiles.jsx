import Layout from "../layout/layout";
import TilesStyle from "./tiles.css";

const Tiles = ({ children, title }) => {
  return (
    <TilesStyle>
      <Layout>
        <p className="adj">{title}</p>
        {children}
      </Layout>
    </TilesStyle>
  );
};

export default Tiles;
