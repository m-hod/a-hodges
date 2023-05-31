import schema, { Schema } from "../utils/schema";

import Button from "../components/elements/button";
import Centered from "../components/wrappers/Centered";
import ContentDisplay from "../components/layouts/ContentDisplay";
import Head from "next/head";
import Link from "next/link";
import Meta from "../components/elements/Meta";
import Newsletter from "../components/layouts/Newsletter";
import Section from "../components/wrappers/Section";
import TextFade from "../components/wrappers/TextFade";
import Wrapper from "../components/layouts/wrapper";
import axios from "axios";
import classes from "./index.module.scss";
import clsx from "clsx";
import directus from "../lib/directus";
import { slugify } from "../utils";
import { useEffect } from "react";
import { useMemo } from "react";

export default function Home(props: Schema) {
  // const promoBooks = props.home[0];
  // console.log("promoBooks: ", promoBooks);

  // const { promoBook, promoSeries } = useMemo(() => {
  //   let promoBook: Book | undefined = undefined;
  //   const promoSeries = props.series.find((_series) =>
  //     _series.books.find((_book) => {
  //       if (_book.is_promo) {
  //         promoBook = _book;
  //         return true;
  //       } else return false;
  //     })
  //   );
  //   return {
  //     promoBook,
  //     promoSeries,
  //   };
  // }, [props]);

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "home"),
    [props.pages]
  );

  return (
    <Wrapper
      headerProps={{
        series: props.series,
        worlds: props.worlds,
      }}
      footerProps={{
        socials: props.socials,
      }}
    >
      <Meta
        pageTitle={page?.title || ""}
        description={page?.description || ""}
        keywords={page?.keywords || ""}
      />
      <div>
        {/* {promoBook && promoSeries && (
          <Section>
            <ContentDisplay
              left={
                <div className="flex flex-col items-center justify-center object-contain fade-in h-full-padding-removed md:h-full">
                  <ProgressiveImage
                    thumb={promoBook.cover.formats.thumbnail.url}
                    url={promoBook.cover.url}
                    className="h-full"
                  />
                  <div className="m-4">
                    <a
                      href={promoBook.orderLinks[0].url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button>PREORDER</Button>
                    </a>
                  </div>
                </div>
              }
              right={
                <TextFade>
                  <div className="relative flex flex-col h-full">
                    <div className="flex flex-col">
                      <h5 className="mb-8">{promoBook.subtitle}</h5>
                      <h1 className="mb-12">{promoBook.title}</h1>
                    </div>
                    <div
                      className={clsx(
                        "h-full overflow-hidden",
                        classes.markdown
                      )}
                    >
                      <Markdown>{promoBook.summary}</Markdown>
                    </div>
                    <div className="absolute bottom-0 z-20 flex justify-center w-full">
                      <p className="underline cursor-pointer hover:text-gray-400">
                        <Link
                          href={`/series/${slugify(
                            promoSeries.title
                          )}?book=${slugify(promoBook.title)}`}
                        >
                          <a>Read More</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </TextFade>
              }
            />
          </Section>
        )} */}
        <Section>
          <Centered>
            <Newsletter newsletter={props.newsletter} />
          </Centered>
        </Section>
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const data = await schema();
  return { props: data };
}
