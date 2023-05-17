import { AlertCircle, CheckCircle, ChevronUp } from "react-feather";
import { NewSocial, Socials } from "../utils/types";
import React, { useState } from "react";

import Button from "./elements/button";
import Iconbutton from "./elements/iconbutton";
import Input from "./elements/input";
import Link from "next/link";
import { getValidSocials } from "../utils";

export type FooterProps = {
  socials: NewSocial[];
};

function Footer({ socials }: FooterProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="relative grid h-auto grid-cols-1 gap-8 p-8 pr-24 text-white bg-gray-500 footer md:h-footer sm:grid-cols-2 md:grid-cols-3 font-roboto">
      <div className="flex flex-col justify-between w-full h-full">
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
      <div className="flex flex-col justify-between w-full h-full">
        {getValidSocials(socials).map((_social, i) => {
          const Icon = _social.Icon;
          return (
            <div key={i}>
              <Link href={_social.link}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center align-center hover:text-gray-300"
                >
                  <Icon className="mr-2" /> {_social.label}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex w-full h-full">
        {success ? (
          <div className="flex items-center">
            <CheckCircle color="#FFF" size={16} className="mr-2" />
            <small>Successfully signed up!</small>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (email) {
                setLoading(true);
                setError("");
                try {
                  const res = await fetch("/api/newsletter", {
                    method: "POST",
                    body: JSON.stringify({
                      email,
                    }),
                  });
                  if (res.status === 500) {
                    throw new Error(res.statusText);
                  }
                  setSuccess(true);
                  setEmail("");
                } catch (e) {
                  console.warn(e);
                  setError(e.message || "Please try again.");
                } finally {
                  setLoading(false);
                }
              } else {
                setError("An email address is required");
              }
            }}
            className="flex flex-col justify-center w-full max-w-sm"
          >
            <small className="mb-2">Sign up to the newsletter</small>
            <Input
              variant="reverse"
              size="slim"
              className="w-full mb-2"
              placeholder="Email Address"
              typeof="email"
              //@ts-ignore
              value={email}
              onChange={(e) => {
                //@ts-ignore
                setEmail(e.target.value);
              }}
            />
            <Button
              variant="reverse"
              size="slim"
              className="w-full"
              typeof="submit"
              loading={loading}
              //@ts-ignore
              disabled={loading}
            >
              SIGN UP
            </Button>
          </form>
        )}
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
