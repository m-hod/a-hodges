import Footer from "../components/footer";
import Header from "../components/header";
import Page from "../components/layouts/page";
import "../styles/globals.css";
import { footerHeight, headerHeight } from "../utils/constants";
import type { AppProps } from "next/app";
import { GlobalContext } from "../utils/context";
import { Schema } from "../utils/types";
import { NextComponentType, NextPageContext } from "next";

function App({
  Component,
  props,
}: {
  Component: NextComponentType<NextPageContext, any, any>;
  props: Schema;
}) {
  return (
    <GlobalContext.Provider value={props}>
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
        <Component {...props} />
      </Page>
    </GlobalContext.Provider>
  );
}

App.getInitialProps = async (ctx) => {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  return { props: data };
};

export default App;

/**
 * global todo
 * footer
 * newletter signup
 * header
 */
