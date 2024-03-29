import BackgroundImage from "./BackgroundImage";
import Link from "next/link";
import React from "react";

function WorldLink({
  imageId,
  link,
  title,
}: {
  imageId: string;
  link: string;
  title: string;
}) {
  return (
    <div className="flex items-center justify-center my-8">
      <img
        src={`/brush6.svg`}
        width={150}
        className={"mr-4 hidden sm:block"}
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
          }}
          className="relative flex items-center justify-center transition-transform transform bg-gray-500 cursor-pointer display hover:scale-105 hover:shadow-xl"
        >
          <BackgroundImage
            imageId={imageId}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
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
        className={"ml-4 hidden sm:block"}
        style={{
          filter:
            "invert(22%) sepia(13%) saturate(1090%) hue-rotate(178deg) brightness(95%) contrast(86%)",
        }}
      />
    </div>
  );
}

export default WorldLink;
