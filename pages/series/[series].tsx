import React, { useEffect, useMemo } from "react";

import BookHoverAnchor from "../../components/elements/BookHoverAnchor";
import BookSection from "../../components/layouts/BookSection";
import Carousel from "../../components/layouts/Carousel";
import Centered from "../../components/wrappers/Centered";
import Head from "next/head";
import Hero from "../../components/wrappers/hero";
import Markdown from "react-markdown";
import Newsletter from "../../components/layouts/Newsletter";
import { Schema } from "../../utils/types";
import Section from "../../components/wrappers/Section";
import WorldLink from "../../components/elements/WorldLink";
import Wrapper from "../../components/layouts/wrapper";
import { headerHeight } from "../../utils/constants";
import { slugify } from "../../utils";
import { useRouter } from "next/router";

type BookLink = {
  anchor: string;
  image: string;
};

function Series(props: Schema) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.book) {
      const target = document.getElementById(`${router.query.book}`);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }, [router.query]);

  const series = useMemo(
    () =>
      props.series.find(
        (_series) => slugify(_series.title) === router.query.series
      ),
    [router.query]
  );

  const world = useMemo(() => {
    if (!series) return null;
    return props.worlds.find(
      (_world) => _world.seriesIdentifier === series.worldIdentifier
    );
  }, [series, props.worlds]);

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "series"),
    [props.pages]
  );

  if (!series) return null;

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
      <Head>
        <title>
          {series.title} - {page?.Title || ""} - Aaron Hodges
        </title>
        <meta
          name="description"
          property="og:description"
          content={page?.Description || ""}
        />
        <meta name="keywords" content={page?.Keywords || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero>
          <div
            className="p-8 md:p-16 pb-16 h-full flex flex-grow flex-col"
            style={{ paddingTop: headerHeight }}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col text-center md:text-left mb-8">
                <h1 className="mt-8 mb-8 md:mb-16 text-white">
                  {series.title}
                </h1>
                <h3 className="md:max-w-3/5 text-white">{series.subtitle}</h3>
              </div>
              <div className="flex mb-8 md:mb-0 justify-center sm:justify-start">
                {series.books.map((_book, i) => (
                  <div
                    key={i}
                    className={`${
                      i === 0
                        ? "ml-0 mr-4 md:mr-8"
                        : i === series.books.length - 1
                        ? "mr-0 ml-4 md:ml-8"
                        : "mx-4 md:mx-8"
                    }`}
                  >
                    <BookHoverAnchor
                      anchor={slugify(_book.title)}
                      image={_book.cover}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Carousel
            images={[
              ...series.banners,
              ...series.books.map((_book) => _book.banner),
            ]}
          />
        </Hero>
        {world && (
          <WorldLink
            image={series.banners[0] || series.books[0].banner}
            link={`/worlds/${slugify(world.title)}`}
            title={world.title}
          />
        )}
        {series.books.map((_book, i) => (
          <React.Fragment key={_book.id}>
            <BookSection
              title={_book.title}
              subtitle={_book.subtitle}
              content={_book.summary}
              orderLinks={_book.orderLinks}
              cover={_book.cover}
              banner={_book.banner}
              quotes={_book.quotes}
              orientation={i % 2 === 0 ? "left" : "right"}
              anchor={slugify(_book.title)}
            />
            {i !== series.books.length - 1 && <Separator />}
          </React.Fragment>
        ))}
        <div style={{ maxWidth: "100vw" }}>
          <Section>
            <Centered>
              <Newsletter newsletter={props.newsletter} />
            </Centered>
          </Section>
        </div>
      </div>
    </Wrapper>
  );
}

export default Series;

function Separator() {
  return (
    <div className="flex justify-center items-center my-8">
      <img
        src={`/brush11.svg`}
        style={{
          filter:
            "invert(22%) sepia(13%) saturate(1090%) hue-rotate(178deg) brightness(95%) contrast(86%)",
        }}
        width={250}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  const paths = data.series.map((_series) => ({
    params: { series: slugify(_series.title) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  return { props: data };
}
