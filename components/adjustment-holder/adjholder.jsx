import Layout from "../layout/layout";
import AdjHolderStyle from "./adjholder.css";

const AdjHolder = ({ children }) => {
  return (
    <AdjHolderStyle>
      <Layout>{children}</Layout>
    </AdjHolderStyle>
  );
};

export default AdjHolder;
