import '../styles/globals.css'
import Layout from "../components/layout";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({once:true});
  }, []);

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
