import React from "react";
import Quote from "../components/elements/Quote";
import Newsletter from "../components/layouts/Newsletter";
import Centered from "../components/wrappers/Centered";
import Section from "../components/wrappers/Section";
import parser from "react-html-parser";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "react-feather";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
          <div>
            <img
              src="/images/cropped-Author-picture.jpeg"
              alt=""
              className="rounded-full"
            />
            <div className="my-8 flex justify-center">
              <Link href="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4 inline-flex align-center hover:text-gray-300"
                >
                  <Facebook size={30} />
                </a>
              </Link>
              <Link href="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4 inline-flex align-center hover:text-gray-300"
                >
                  <Twitter size={30} />
                </a>
              </Link>
              <Link href="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4 inline-flex align-center hover:text-gray-300"
                >
                  <Instagram size={30} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        {quotes.map((_quote, i) => (
          <div className={`${i < quotes.length - 1 && "mb-8"}`}>
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
