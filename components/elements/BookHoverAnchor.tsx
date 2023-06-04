import React from "react";
import { assetUrl } from "../../utils/constants";

export default function BookHoverAnchor({
  imageId,
  anchor,
  variable,
}: {
  imageId: string;
  anchor: string;
  variable?: boolean;
}) {
  return (
    <button
      onClick={() => {
        const target = document.getElementById(anchor);
        if (target) {
          target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }}
      className="transition-transform transform hover:shadow-2xl hover:scale-105"
    >
      <img
        src={`${assetUrl}${imageId}`}
        alt=""
        className={!variable && "w-32 shadow-lg sm:w-40 xl:w-52"}
      />
    </button>
  );
}
