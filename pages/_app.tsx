import Footer from "../components/footer";
import Header from "../components/header";
import Page from "../components/layouts/page";
import "../styles/globals.css";
import { footerHeight, headerHeight } from "../utils/constants";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
