import React from "react";

export default function BookHoverAnchor({
  image,
  anchor,
}: {
  image: string;
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
      className="book-link hover:shadow-2xl"
    >
      <img src={image} alt="" className="w-40 xl:w-52 shadow-lg" />
    </button>
  );
}
