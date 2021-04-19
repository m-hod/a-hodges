import React from "react";
import { StrapiImage } from "../../utils/types";

export default function BookHoverAnchor({
  image,
  anchor,
}: {
  image: StrapiImage;
  anchor: string;
}) {
  return (
    <button
      onClick={() => {
        const target = document.getElementById(anchor);
        if (target) {
          target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }}
      className="hover:shadow-2xl transform hover:scale-105 transition-transform"
    >
      <img src={image.url} alt="" className="w-32 sm:w-40 xl:w-52 shadow-lg" />
    </button>
  );
}
