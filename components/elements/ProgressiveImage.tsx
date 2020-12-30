import React, { HTMLAttributes, useState } from "react";

export default function ProgressiveImage({
  thumb,
  url,
  className,
  style,
  ...props
}: { thumb: string; url: string } & HTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        onLoad={() => {
          setLoaded(true);
        }}
        onLoadStart={(e) => {}}
        src={url}
        {...props}
        className={`${className}`}
        style={{
          ...style,
        }}
      />
      {/* <img
        src={thumb}
        {...props}
        className={`${className} ${
          loaded ? "opacity-0" : "opacity-1"
        } transition-opacity`}
        style={{
          ...style,
          zIndex: -2,
          filter: "blur(1px)",
        }}
      /> */}
    </>
  );
}
