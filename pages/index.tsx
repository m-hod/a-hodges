import Link from "next/link";
import { useMemo } from "react";
import Button from "../components/elements/button";
import ProgressiveImage from "../components/elements/ProgressiveImage";
import ContentDisplay from "../components/layouts/ContentDisplay";
import Newsletter from "../components/layouts/Newsletter";
import Centered from "../components/wrappers/Centered";
import Section from "../components/wrappers/Section";
import TextFade from "../components/wrappers/TextFade";
import { Book, Schema } from "../utils/types";
import classes from "./index.module.scss";
import Markdown from "react-markdown";
import clsx from "clsx";
import { slugify } from "../utils";

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
    <div>
      {promoBook && promoSeries && (
        <Section>
          <ContentDisplay
            left={
              <div className="fade-in flex flex-col items-center justify-center object-contain h-full-padding-removed md:h-full">
                <ProgressiveImage
                  thumb="/images/AaronHodges_BookCover_Ebook-low-res-534x800_thumb.jpeg"
                  url="/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg"
                  // style={{ maxHeight: "calc(100% - 1rem - 65px)" }}
                />
                {/* </div> */}
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
                    className={clsx("h-full overflow-hidden", classes.markdown)}
                  >
                    <Markdown>{promoBook.summary}</Markdown>
                  </div>
                  <div className="absolute bottom-0 z-20 flex w-full justify-center">
                    <p className="underline cursor-pointer hover:text-gray-400">
                      <Link
                        href={{
                          pathname: "series/[series]",
                          query: {
                            series: slugify(promoSeries.title),
                            book: slugify(promoBook.title),
                          },
                        }}
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
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  return { props: data };
}

/**
 * to do
 * image
 * section container
 */
