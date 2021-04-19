import React, { useMemo } from "react";
import { generateCMSLink, getSocials } from "../utils";

import Centered from "../components/wrappers/Centered";
import Head from "next/head";
import Iconbutton from "../components/elements/iconbutton";
import Link from "next/link";
import Markdown from "react-markdown";
import Newsletter from "../components/layouts/Newsletter";
import ProgressiveImage from "../components/elements/ProgressiveImage";
import Quote from "../components/elements/Quote";
import { Schema } from "../utils/types";
import Section from "../components/wrappers/Section";
import Wrapper from "../components/layouts/wrapper";

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
      <Head>
        <title>{page?.Title || ""} - Aaron Hodges</title>
        <meta
          name="description"
          property="og:description"
          content={page?.Description || ""}
        />
        <meta name="keywords" content={page?.Keywords || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="lg:col-span-2">
              <h1 className="mb-8">{props.about.title}</h1>
              <h3 className="mb-8">{props.about.subtitle}</h3>
              <div className="text-column-2">
                <Markdown>{props.about.content}</Markdown>
              </div>
            </div>
            <div className="flex flex-grow flex-col items-center">
              <ProgressiveImage
                thumb={generateCMSLink(
                  props.about.profile.formats.thumbnail.url
                )}
                url={generateCMSLink(props.about.profile.url)}
                className="rounded-full w-full max-w-lg"
              />
              <div className="my-8 flex justify-center">
                {getSocials(props.socials).map((_social, i) => {
                  const Icon = _social.Icon;
                  return (
                    <Link key={i} href={_social.link}>
                      <a
                        target="_blank"
                        rel="noreferrer"
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
                      </a>
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
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  return { props: data };
}
