import React from "react";
import Footer from "../footer";
import Header from "../header";
import Page from "./page";
import { footerHeight, headerHeight } from "../../utils/constants";

function Wrapper({ children }: { children: React.ReactNode }) {
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
      {children}
    </Page>
  );
}

export default Wrapper;
