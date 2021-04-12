import React, { useState } from "react";

import BackgroundImage from "../elements/BackgroundImage";
import Button from "../elements/button";
import Input from "../elements/input";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
        <h2 className="text-white">NEWSLETTER</h2>
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
      <p className="italic text-white">Short explanation of newsletter</p>
      <div className="mt-4 md:mt-8 flex justify-center">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("submitted");
            if (email) {
              setLoading(true);
              try {
                const res = await fetch("/api/newsletter", {
                  method: "POST",
                  body: JSON.stringify({
                    email,
                  }),
                });
                console.log(res);
                setEmail("");
              } catch (e) {
                console.warn(e);
              } finally {
                setLoading(false);
              }
            }
          }}
          className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"> */}
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
          {/* </div> */}
        </form>
      </div>
      <BackgroundImage
        thumb={"/images/Aaron_B3_Cover_no_typography_thumb.jpg"}
        url={"/images/Aaron_B3_Cover_no_typography_thumb.jpg"}
      />
    </div>
  );
}

export default Newsletter;
