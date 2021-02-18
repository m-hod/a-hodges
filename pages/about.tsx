import React, { useContext } from "react";
import Quote from "../components/elements/Quote";
import Newsletter from "../components/layouts/Newsletter";
import Centered from "../components/wrappers/Centered";
import Section from "../components/wrappers/Section";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "react-feather";
import Iconbutton from "../components/elements/iconbutton";
import { GlobalContext } from "../utils/context";
import Markdown from "react-markdown";
import { getSocials } from "../utils";

const quotes = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus cursus lorem, vitae maximus nisi commodo sit amet. Quisque imperdiet elementum ante, eu iaculis ipsum eleifend vel.",
    author: "Full Name",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus cursus lorem, vitae maximus nisi commodo sit amet. Quisque imperdiet elementum ante, eu iaculis ipsum eleifend vel.",
    author: "Full Name",
  },
];

export default function About() {
  const ctx = useContext(GlobalContext);

  return (
    <div>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="lg:col-span-2">
            <h1 className="mb-8">{ctx.about.title}</h1>
            <h3 className="mb-8">{ctx.about.subtitle}</h3>
            <div className="text-column-2">
              <Markdown>{ctx.about.content}</Markdown>
            </div>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <img
              src="/images/cropped-Author-picture.jpeg"
              alt=""
              className="rounded-full w-full max-w-lg"
            />
            <div className="my-8 flex justify-center">
              {getSocials(ctx.socials).map((_social, i) => {
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
        {ctx.about.quotes.map((_quote, i) => (
          <div
            key={_quote.id}
            className={`${i < quotes.length - 1 && "mb-8"} md:mb-8`}
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
          <Newsletter />
        </Centered>
      </Section>
    </div>
  );
}

// to do: image
