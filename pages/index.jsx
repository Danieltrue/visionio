import Footer from "../components/footer/footer";
import Layout from "../components/layout/layout";
import Start from "./start/start";

export default function Home() {
  return (
    <Layout>
      <div className="main-doc">
        <Start />
        <Footer />
      </div>
    </Layout>
  );
}
