import Layout from "../layout/layout";
import AdjHolderStyle from "./adjholder.css";

const AdjHolder = ({ children, show }) => {
  return (
    <AdjHolderStyle style={{ display: show ? "block" : "none" }}>
      <Layout>{children}</Layout>
    </AdjHolderStyle>
  );
};

export default AdjHolder;
