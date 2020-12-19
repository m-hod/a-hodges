import Footer from "../components/footer";
import Header from "../components/header";
import Page from "../components/layouts/page";
import "../styles/globals.css";
import { footerHeight, headerHeight } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  return (
    <Page
      header={{
        element: <Header />,
        height: headerHeight,
      }}
      footer={{
        element: <Footer />,
        height: footerHeight,
      }}
    >
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
