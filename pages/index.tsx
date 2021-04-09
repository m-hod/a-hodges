import { Book, Schema } from "../utils/types";

import Button from "../components/elements/button";
import Centered from "../components/wrappers/Centered";
import ContentDisplay from "../components/layouts/ContentDisplay";
import Link from "next/link";
import Markdown from "react-markdown";
import Newsletter from "../components/layouts/Newsletter";
import ProgressiveImage from "../components/elements/ProgressiveImage";
import Section from "../components/wrappers/Section";
import TextFade from "../components/wrappers/TextFade";
import Wrapper from "../components/layouts/wrapper";
import classes from "./index.module.scss";
import clsx from "clsx";
import { slugify } from "../utils";
import { useMemo } from "react";

export default function Home(props: Schema) {
  const { promoBook, promoSeries } = useMemo(() => {
    let promoBook: Book | undefined = undefined;
    const promoSeries = props.series.find((_series) =>
      _series.books.find((_book) => {
        if (_book.is_promo) {
          promoBook = _book;
          return true;
        } else return false;
      })
    );
    return {
      promoBook,
      promoSeries,
    };
  }, [props]);

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
      <div>
        {promoBook && promoSeries && (
          <Section>
            <ContentDisplay
              left={
                <div className="fade-in flex flex-col items-center justify-center object-contain h-full-padding-removed md:h-full">
                  <ProgressiveImage
                    thumb={promoBook.cover.formats.thumbnail.url}
                    url={promoBook.cover.url}
                  />
                  <div className="m-4">
                    <Button>
                      <a href={promoBook.orderLinks[0].url}>PREORDER</a>
                    </Button>
                  </div>
                </div>
              }
              right={
                <TextFade>
                  <div className="flex flex-col h-full relative">
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
                    <div className="absolute bottom-0 z-20 flex w-full justify-center">
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
        )}
        <Section>
          <Centered>
            <Newsletter />
          </Centered>
        </Section>
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  return { props: data };
}
