import Head from "next/head";
import Layoutsection from "./layout.css";

const Layout = ({ children }) => {
  return (
    <Layoutsection>
      <Head>
        <title>Visionio</title>
        <meta
          name="description"
          content="Created for the purpose of good drawing"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {children}
    </Layoutsection>
  );
};

export default Layout;
