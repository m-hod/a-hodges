import { AlertCircle, CheckCircle } from "react-feather";
import React, { useState } from "react";

import BackgroundImage from "../elements/BackgroundImage";
import Button from "../elements/button";
import Input from "../elements/input";
import { Newsletter as NewsletterType } from "../../utils/types";

function Newsletter({ newsletter }: { newsletter: NewsletterType }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div className="w-full 2xl:max-w-3/4 p-4 md:p-6 flex flex-col justify-center align-center text-center relative">
      <div className="flex justify-center mb-4">
        <img
          src={`/brush6.svg`}
          width={100}
          className={"mr-4"}
          style={{
            transform: "scaleX(-1)",

            filter:
              "invert(100%) sepia(9%) saturate(365%) hue-rotate(203deg) brightness(115%) contrast(100%)",
          }}
        />
        <h2 className="text-white">{newsletter.title}</h2>
        <img
          src={`/brush6.svg`}
          width={100}
          className="ml-4"
          style={{
            filter:
              "invert(100%) sepia(9%) saturate(365%) hue-rotate(203deg) brightness(115%) contrast(100%)",
          }}
        />
      </div>
      <p className="italic text-white">{newsletter.content}</p>
      <div className="mt-4 md:mt-8 flex items-center justify-center flex-col">
        {success ? (
          <>
            <CheckCircle color="#FFF" />
            <p className="mt-2 mb-0 text-white">Successfully signed up!</p>
          </>
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
              className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            >
              <Input
                className="md:col-span-2 w-full"
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
                className="md:col-span-1 w-full"
                typeof="submit"
                loading={loading}
                //@ts-ignore
                disabled={loading}
              >
                SIGN UP
              </Button>
            </form>
            {error && (
              <>
                <AlertCircle color="#FFF" className="mt-4" />
                <p className="mt-2 mb-0 text-white">
                  Oops! Looks like something went wrong.
                </p>
                <p className="mb-0 text-white">{error}</p>
              </>
            )}
          </>
        )}
      </div>
      <BackgroundImage
        thumb={newsletter.backgroundImage.formats.thumbnail.url}
        url={newsletter.backgroundImage.url}
      />
    </div>
  );
}

export default Newsletter;
