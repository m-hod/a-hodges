import React from "react";
import Quote from "../components/elements/Quote";
import Newsletter from "../components/layouts/Newsletter";
import Centered from "../components/wrappers/Centered";
import Section from "../components/wrappers/Section";
import parser from "react-html-parser";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "react-feather";
import Iconbutton from "../components/elements/iconbutton";

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
  return (
    <div>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="lg:col-span-2">
            <h1 className="mb-8">About Aaron</h1>
            <h3 className="mb-8">
              Suspendisse luctus cursus lorem, vitae maximus nisi commodo sit
              amet. Quisque imperdiet elementum ante, eu iaculis ipsum eleifend
              vel.
            </h3>
            <div className="text-column-2">
              {parser(
                "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p>"
              )}
            </div>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <img
              src="/images/cropped-Author-picture.jpeg"
              alt=""
              className="rounded-full w-full max-w-lg"
            />
            <div className="my-8 flex justify-center">
              <Iconbutton color="gray" size="large" className="mx-4">
                <Link href="">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex align-center"
                  >
                    <Facebook size={30} />
                  </a>
                </Link>
              </Iconbutton>
              <Iconbutton color="gray" size="large" className="mx-4">
                <Link href="">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex align-center"
                  >
                    <Twitter size={30} />
                  </a>
                </Link>
              </Iconbutton>
              <Iconbutton color="gray" size="large" className="mx-4">
                <Link href="">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex align-center"
                  >
                    <Instagram size={30} />
                  </a>
                </Link>
              </Iconbutton>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        {quotes.map((_quote, i) => (
          <div key={i} className={`${i < quotes.length - 1 && "mb-8"} md:mb-8`}>
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
