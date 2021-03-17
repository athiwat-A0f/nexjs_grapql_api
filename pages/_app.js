import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next Sequelize</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
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
