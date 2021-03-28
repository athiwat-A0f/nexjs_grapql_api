import Head from "next/head";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../assets/bootstrap4/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Router from "next/router";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

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
