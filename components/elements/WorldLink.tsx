import BackgroundImage from "./BackgroundImage";
import Link from "next/link";
import React from "react";
import { StrapiImage } from "../../utils/types";

function WorldLink({
  image,
  link,
  title,
}: {
  image: StrapiImage;
  link: string;
  title: string;
}) {
  return (
    <div className="my-8 flex justify-center items-center">
      <img
        src={`/brush6.svg`}
        width={150}
        className={"mr-4"}
        style={{
          transform: "scaleX(-1)",
          filter:
            "invert(22%) sepia(13%) saturate(1090%) hue-rotate(178deg) brightness(95%) contrast(86%)",
        }}
      />
      <Link href={link}>
        <div
          style={{
            height: 250,
            minWidth: 250,
            maxWidth: 250,
            borderRadius: "50%",
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="display flex justify-center bg-gray-500 items-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl relative"
        >
          <img
            src={`/brush21.svg`}
            width={150}
            className={"mr-4 absolute bottom-0 left-0"}
            style={{
              transform: "scaleX(-1)",
              rotate: "15deg",
              filter:
                "invert(22%) sepia(13%) saturate(1090%) hue-rotate(178deg) brightness(95%) contrast(86%)",
            }}
          />
          <h2 className="text-center text-white">{title}</h2>
          <img
            src={`/brush21.svg`}
            width={150}
            className={"ml-4 absolute bottom-0 right-0"}
            style={{
              rotate: "-15deg",
              filter:
                "invert(22%) sepia(13%) saturate(1090%) hue-rotate(178deg) brightness(95%) contrast(86%)",
            }}
          />
        </div>
      </Link>
      <img
        src={`/brush6.svg`}
        width={150}
        className={"ml-4"}
        style={{
          filter:
            "invert(22%) sepia(13%) saturate(1090%) hue-rotate(178deg) brightness(95%) contrast(86%)",
        }}
      />
    </div>
  );
}

export default WorldLink;
