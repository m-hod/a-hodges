import Footer, { FooterProps } from "../footer";
import { footerHeight, headerHeight } from "../../utils/constants";

import Header from "../header";
import { HeaderProps } from "../header";
import Page from "./page";
import React from "react";

function Wrapper({
  children,
  headerProps,
  footerProps,
}: {
  children: React.ReactNode;
  headerProps: HeaderProps;
  footerProps: FooterProps;
}) {
  return (
    <Page
      header={{
        element: <Header {...headerProps} />,
        height: headerHeight,
      }}
      footer={{
        element: <Footer {...footerProps} />,
        height: footerHeight,
      }}
    >
      {children}
    </Page>
  );
}

export default Wrapper;
