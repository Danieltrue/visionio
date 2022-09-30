import Head from "next/head";
import Footer from "../components/footer/footer";
import Layout from "../components/layout/layout";
import Start from "./start/start";

export default function Home() {
  return (
    <Layout>
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
      <div className="main-doc">
        <Start />
        <Footer />
      </div>
    </Layout>
  );
}
