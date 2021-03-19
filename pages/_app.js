import Head from "next/head";
import Nav from "../components/Nav";
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
      <Nav />
      <Container fluid="md">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </div>
  );
}

export default MyApp;
