import Button from "./elements/button";
import { ChevronUp } from "react-feather";
import Iconbutton from "./elements/iconbutton";
import Input from "./elements/input";
import Link from "next/link";
import React from "react";
import { Socials } from "../utils/types";
import { getSocials } from "../utils";

export type FooterProps = {
  socials: Socials;
};

function Footer({ socials }: FooterProps) {
  return (
    <div className="footer h-auto md:h-footer bg-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 pr-24 font-roboto text-white relative">
      <div className="h-full w-full flex flex-col justify-between">
        <div className="text-base">
          <strong>Aaron Hodges</strong>
        </div>
        <div>
          <small>Author</small>
        </div>
        <div>
          <small>©2020 Aaron Hodges</small>
        </div>
        <div>
          <small className="flex align-center">
            <img
              src="https://enim-content-cdn.sgp1.cdn.digitaloceanspaces.com/enim/logos/logo-circle.svg"
              width={20}
              className="mr-1"
            />
            Enim Web Services
          </small>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-between">
        {getSocials(socials).map((_social, i) => {
          const Icon = _social.Icon;
          return (
            <div key={i}>
              <Link href={_social.link}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex align-center hover:text-gray-300"
                >
                  <Icon className="mr-2" /> {_social.label}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full flex">
        <div className="w-full max-w-sm flex flex-col justify-center">
          <small className="mb-2">Sign up to the newsletter</small>
          <Input
            variant="reverse"
            size="slim"
            className="w-full mb-2"
            placeholder="Email Address"
          />
          <Button variant="reverse" size="slim" className="w-full">
            SIGN UP
          </Button>
        </div>
      </div>
      <div className="absolute right-0 m-4">
        <Iconbutton
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          title="Back to top"
        >
          <ChevronUp size={32} />
        </Iconbutton>
      </div>
    </div>
  );
}

export default Footer;
