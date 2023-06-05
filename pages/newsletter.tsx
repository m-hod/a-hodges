import { AlertCircle, CheckCircle } from "react-feather";
import React, { useMemo, useState } from "react";
import schema, { Schema } from "../utils/schema";

import BackgroundImage from "../components/elements/BackgroundImage";
import Button from "../components/elements/button";
import Input from "../components/elements/input";
import Link from "next/link";
import Meta from "../components/elements/Meta";
import Wrapper from "../components/layouts/wrapper";

function Newsletter(props: Schema) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "newsletter"),
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
      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="flex justify-center mb-4">
          <img
            src={`/brush6.svg`}
            className={"mr-2 md:mr-4 w-12 md:w-24"}
            style={{
              transform: "scaleX(-1)",
              filter:
                "invert(100%) sepia(9%) saturate(365%) hue-rotate(203deg) brightness(115%) contrast(100%)",
            }}
          />
          <h2 className="text-white">{props.newsletter.title}</h2>
          <img
            src={`/brush6.svg`}
            className="w-12 ml-2 md:ml-4 md:w-24"
            style={{
              filter:
                "invert(100%) sepia(9%) saturate(365%) hue-rotate(203deg) brightness(115%) contrast(100%)",
            }}
          />
        </div>
        <p className="italic text-white">{props.newsletter.content}</p>
        {success ? (
          <div className="flex flex-col items-center justify-center">
            <CheckCircle color="#FFF" />
            <p className="mt-2 mb-0 text-white">Successfully signed up!</p>
            <Link href="/">
              <Button className="w-full mt-2">HOME</Button>
            </Link>
          </div>
        ) : (
          <>
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
              className="flex flex-col w-full mx-6 sm:mx-12 md:mx-20"
              style={{
                maxWidth: 500,
              }}
            >
              <Input
                className="w-full"
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
                className="w-full mt-2"
                typeof="submit"
                loading={loading}
                //@ts-ignore
                disabled={loading}
              >
                SIGN UP
              </Button>
            </form>
            {error && (
              <div className="flex flex-col items-center justify-center">
                <AlertCircle color="#FFF" className="mt-4" />
                <p className="mt-2 mb-0 text-white">
                  Oops! Looks like something went wrong.
                </p>
                <p className="mb-0 text-white">{error}</p>
              </div>
            )}
          </>
        )}
        <BackgroundImage imageId={props.newsletter.background_image} />
      </div>
    </Wrapper>
  );
}

export default Newsletter;

export async function getStaticProps() {
  const data = await schema();
  return { props: data };
}
