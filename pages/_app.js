import Head from "next/head";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { Container } from "react-bootstrap";
import "../assets/bootstrap4/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next Sequelize</title>
      </Head>
      <NavMenu />
      <Container fluid="md">
        <div className="col-12 text-center">
          <Component {...pageProps} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default MyApp;
