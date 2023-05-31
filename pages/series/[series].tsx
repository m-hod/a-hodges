import React, { useEffect, useMemo } from "react";
import schema, { Schema } from "../../utils/schema";

import BookHoverAnchor from "../../components/elements/BookHoverAnchor";
import BookSection from "../../components/layouts/BookSection";
import Carousel from "../../components/layouts/Carousel";
import Centered from "../../components/wrappers/Centered";
import Hero from "../../components/wrappers/hero";
import Meta from "../../components/elements/Meta";
import Newsletter from "../../components/layouts/Newsletter";
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
    return props.worlds.find((_world) => _world.id === series.world);
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
      <Meta
        title={series.title}
        pageTitle={page?.title || ""}
        description={page?.description || ""}
        keywords={page?.keywords || ""}
      />
      <div>
        <Hero>
          <div
            className="flex flex-col flex-grow h-full p-8 pb-16 md:p-16"
            style={{ paddingTop: headerHeight }}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col mb-8 text-center md:text-left">
                <h1 className="mt-8 mb-8 text-white md:mb-16">
                  {series.title}
                </h1>
                <h3 className="text-white md:max-w-3/5">{series.subtitle}</h3>
              </div>
              <div className="flex justify-center mb-8 md:mb-0 sm:justify-start">
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
                      imageId={_book.cover}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Carousel
            imageIds={[
              ...series.banners.map((_banner) => _banner.directus_files_id),
              ...series.books.map((_book) => _book.banner),
            ]}
          />
        </Hero>
        {world && (
          <WorldLink
            imageId={
              series.banners[0]?.directus_files_id || series.books[0].banner
            }
            link={`/worlds/${slugify(world.title)}`}
            title={world.title}
          />
        )}
        {series.books.map((_book, i) => (
          <React.Fragment key={_book.id}>
            <BookSection
              title={_book.title}
              subtitle={_book.subtitle}
              summary={_book.summary}
              order_links={_book.order_links}
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
    <div className="flex items-center justify-center my-8">
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
  const data = await schema();
  const paths = data.series.map((_series) => ({
    params: { series: slugify(_series.title) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const data = await schema();
  return { props: data };
}
