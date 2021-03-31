import BackgroundImage from "../elements/BackgroundImage";
import Button from "../elements/button";
import Input from "../elements/input";
import React from "react";

function Newsletter() {
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
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Input className="md:col-span-2 w-full" placeholder="Email Address" />
          <Button className="md:col-span-1 w-full">SIGN UP</Button>
        </div>
      </div>
      <BackgroundImage
        thumb={"/images/Aaron_B3_Cover_no_typography_thumb.jpg"}
        url={"/images/Aaron_B3_Cover_no_typography_thumb.jpg"}
      />
    </div>
  );
}

export default Newsletter;

// https://docs.mailerlite.com/pages/subscribers#post
// https://api.mailerlite.com/api/v1/subscribers/{list_id}/
