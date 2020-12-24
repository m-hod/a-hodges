import React from "react";
import Section from "../wrappers/Section";
import parser from "react-html-parser";
import Button from "../elements/button";
import BackgroundImage from "../elements/BackgroundImage";

export type BookSectionType = {
  title: string;
  subtitle: string;
  /** As html string */
  content: string;
  orderLinks: {
    url: string;
    label: string;
  }[];
  cover: string;
  art: string;
  quotes: {
    content: string;
    author: string;
  }[];
  orientation: "left" | "right";
  anchor: string;
};

export default function BookSection({
  title,
  subtitle,
  content,
  orderLinks,
  cover,
  art,
  quotes,
  orientation,
  anchor,
}: BookSectionType) {
  return (
    <Section id={anchor}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {orientation === "right" && (
          <div className="col-span-1 hidden sm:contents">
            <img src={cover} alt="" />
          </div>
        )}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="mb-8">{title}</h1>
            <h3 className="mb-8">{subtitle}</h3>
          </div>
          <div className="sm:hidden mb-8">
            <img src={cover} alt="" />
          </div>
          <div className="lg:col-span-2 book-section-content">
            {parser(content)}
            <div>
              <hr className="my-8" />
              <h2 className="text-center mb-8">Order Now</h2>
              <div className="grid grid-cols-2 gap-4">
                {orderLinks.map((_link, i) => (
                  <Button key={i}>{_link.label.toUpperCase()}</Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {orientation === "left" && (
          <div className="col-span-1 hidden sm:contents">
            <img src={cover} alt="" />
          </div>
        )}
      </div>
      <div
        className={`relative flex justify-center ${
          orientation === "left" ? "lg:justify-start" : "lg:justify-end"
        }`}
        style={{ height: 500 }}
      >
        <div className="m-8 flex flex-col justify-center lg:w-1/3">
          {quotes.map((_quote, i) => (
            <div key={i} className="my-8">
              <h3 className="text-white mb-2">{_quote.content}</h3>
              <h2 className="text-white text-right">- {_quote.author}</h2>
            </div>
          ))}
        </div>
        <BackgroundImage url={art} />
      </div>
    </Section>
  );
}
