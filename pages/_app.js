import Head from "next/head";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../assets/bootstrap4/bootstrap.min.css";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next Sequelize</title>
      </Head>
      <NavMenu />
      <Container fluid="fluid">
        <Component {...pageProps} />
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
