import schema, { Schema } from "../utils/schema";

import Button from "../components/elements/button";
import Centered from "../components/wrappers/Centered";
import Link from "next/link";
import Meta from "../components/elements/Meta";
import Newsletter from "../components/layouts/Newsletter";
import Section from "../components/wrappers/Section";
import Wrapper from "../components/layouts/wrapper";
import { slugify } from "../utils";
import { useMemo } from "react";
import Image from "../components/elements/Image";
import Hero from "../components/wrappers/hero";
import { headerHeight, TAILWIND_MD_BREAKPOINT } from "../utils/constants";
import Carousel from "../components/layouts/Carousel";
import useWindowSize from "../hooks/useWindowSize";

export default function Home(props: Schema) {
  const { width } = useWindowSize();

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "home"),
    [props.pages]
  );

  const { booksWithSeries, banners } = useMemo(() => {
    const banners = new Set<string>();

    const booksWithSeries = props.home.map((book) => {
      const series = props.series.find(
        (series) => series.id === book.aahodges_series_id
      );

      banners.add(book.banner);
      series.banners.forEach((banner) => {
        banners.add(banner.directus_files_id);
      });

      return {
        ...book,
        series,
      };
    });

    return { booksWithSeries, banners };
  }, []);

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
      <Hero noMaxHeight={width <= TAILWIND_MD_BREAKPOINT}>
        <div
          className="flex flex-col flex-grow h-full p-8 pb-16 md:p-16"
          style={{ paddingTop: headerHeight }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {booksWithSeries.map((book) => {
                const firstOrderLink = book.order_links[0];
                return (
                  <div key={book.id} className="flex flex-col gap-4 md:gap-6">
                    <Link
                      href={`/series/${slugify(
                        book.series.title
                      )}?book=${slugify(book.title)}`}
                    >
                      <a className="transition-transform transform hover:shadow-2xl hover:scale-105">
                        <Image
                          key={book.id}
                          imageId={book.cover}
                          style={{
                            maxHeight: 550,
                          }}
                        />
                      </a>
                    </Link>
                    {firstOrderLink && (
                      <div className="flex justify-center">
                        <a
                          key={firstOrderLink.id}
                          href={firstOrderLink.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button>{firstOrderLink.title.toUpperCase()}</Button>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <Carousel imageIds={[...banners.values()]} />
        </div>
      </Hero>
      <Section>
        <Centered>
          <Newsletter newsletter={props.newsletter} />
        </Centered>
      </Section>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const data = await schema();
  return { props: data };
}
