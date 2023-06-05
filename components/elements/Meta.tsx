import Head from "next/head";
import React from "react";

type MetaProps = {
  title?: string;
  pageTitle: string;
  description: string;
  keywords: string;
};

export default function Meta({
  title,
  pageTitle,
  description,
  keywords,
}: MetaProps) {
  return (
    <Head>
      <title>{`${
        title ? `${title} - ` : ""
      }${pageTitle} - Aaron Hodges`}</title>
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
