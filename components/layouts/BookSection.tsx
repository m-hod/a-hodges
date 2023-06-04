import BackgroundImage from "../elements/BackgroundImage";
import { Book } from "../../utils/types";
import Button from "../elements/button";
import Image from "../elements/Image";
import Quote from "../elements/Quote";
import React from "react";
import Section from "../wrappers/Section";
import classes from "./BookSection.module.scss";
import clsx from "clsx";
import parser from "react-html-parser";

export type BookSectionType = Omit<Book, "id" | "aahodges_series_id"> & {
  orientation: "left" | "right";
  anchor: string;
};

export default function BookSection({
  title,
  subtitle,
  summary,
  order_links,
  cover,
  banner,
  quotes,
  orientation,
  anchor,
}: BookSectionType) {
  return (
    <Section id={anchor}>
      <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {orientation === "right" && (
          <div className="items-start justify-center hidden col-span-1 sm:flex">
            <Image imageId={cover} />
          </div>
        )}
        <div className="grid grid-cols-1 lg:col-span-2 lg:grid-cols-2">
          <div>
            <h1 className="mb-8">{title}</h1>
            <h3 className="mb-8">{subtitle}</h3>
          </div>
          <div className="mb-8 sm:hidden">
            <Image imageId={cover} />
          </div>
          <div
            className={clsx(classes.markdown, "lg:col-span-2 text-column-2")}
          >
            {parser(summary)}
            <div>
              <hr className="my-8" />
              <h2 className="mb-8 text-center">Order Now</h2>
              <div className="grid grid-cols-2 gap-4">
                {order_links.map((_link) => (
                  <a
                    key={_link.id}
                    href={_link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button>{_link.title.toUpperCase()}</Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {orientation === "left" && (
          <div className="items-start justify-center hidden col-span-1 sm:flex">
            <Image imageId={cover} />
          </div>
        )}
      </div>
      <div
        className={`relative flex justify-center ${
          orientation === "left" ? "lg:justify-start" : "lg:justify-end"
        }`}
        style={{ height: 500 }}
      >
        <div className="flex flex-col justify-center m-8 lg:w-1/3">
          {quotes.map((_quote, i) => (
            <div key={i} className="my-8">
              <Quote
                content={_quote.content}
                author={_quote.author}
                color="white"
              />
            </div>
          ))}
        </div>
        <BackgroundImage imageId={banner} />
      </div>
    </Section>
  );
}
