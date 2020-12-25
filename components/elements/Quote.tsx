import React from "react";

type QuoteType = {
  content: string;
  author: string;
  color?: "white";
  authorAlign?: "left" | "right";
};

export default function Quote({
  content,
  author,
  color,
  authorAlign = "right",
}: QuoteType) {
  return (
    <div>
      <h3 className={`mb-2 ${color && `text-${color}`}`}>{content}</h3>
      <h2 className={`text-${authorAlign} ${color && `text-${color}`}`}>
        - {author}
      </h2>
    </div>
  );
}
