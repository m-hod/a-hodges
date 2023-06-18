import React, { useMemo } from "react";
import schema, { Schema } from "../utils/schema";

import Centered from "../components/wrappers/Centered";
import Iconbutton from "../components/elements/iconbutton";
import Image from "../components/elements/Image";
import Link from "next/link";
import Meta from "../components/elements/Meta";
import Newsletter from "../components/layouts/Newsletter";
import Quote from "../components/elements/Quote";
import Section from "../components/wrappers/Section";
import Wrapper from "../components/layouts/wrapper";
import { getValidSocials } from "../utils";
import parser from "html-react-parser";

export default function About(props: Schema) {
  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "about"),
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
        <Section>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <h1 className="mb-8">{props.about.title}</h1>
              <h3 className="mb-8">{props.about.subtitle}</h3>
              <div className="text-column-2">
                {parser(props.about.content || "")}
              </div>
            </div>
            <div className="flex flex-col items-center flex-grow">
              <Image
                imageId={props.about.profile_picture}
                className="w-full max-w-lg rounded-full"
              />
              <div className="flex justify-center my-8">
                {getValidSocials(props.socials).map((_social, i) => {
                  const Icon = _social.Icon;
                  return (
                    <Link
                      key={i}
                      href={_social.link}
                      className="inline-flex align-center"
                    >
                      <Iconbutton
                        color="gray"
                        size="large"
                        className="mx-4"
                        title={_social.label}
                      >
                        <Icon size={30} />
                      </Iconbutton>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
        <Section>
          {props.about.quotes.map((_quote, i) => (
            <div
              key={_quote.id}
              className={`${
                i < props.about.quotes.length - 1 && "mb-8"
              } md:mb-8`}
            >
              <Quote
                content={_quote.content}
                author={_quote.author}
                authorAlign="left"
              />
            </div>
          ))}
        </Section>
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
