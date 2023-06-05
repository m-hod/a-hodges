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
    <div className="relative flex flex-col justify-center w-full p-4 text-center 2xl:max-w-3/4 md:p-6 align-center">
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
        <h2 className="text-white">{newsletter.title}</h2>
        <img
          src={`/brush6.svg`}
          className="w-12 ml-2 md:ml-4 md:w-24"
          style={{
            filter:
              "invert(100%) sepia(9%) saturate(365%) hue-rotate(203deg) brightness(115%) contrast(100%)",
          }}
        />
      </div>
      <p className="italic text-white">{newsletter.content}</p>
      <div className="flex flex-col items-center justify-center mt-4 md:mt-8">
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
              className="grid w-3/4 grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
            >
              <Input
                className="w-full md:col-span-2"
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
                className="w-full md:col-span-1"
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
      <BackgroundImage imageId={newsletter.background_image} />
    </div>
  );
}

export default Newsletter;
