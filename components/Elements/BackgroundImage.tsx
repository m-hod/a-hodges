import React, { HTMLAttributes } from "react";

interface Props {
  url: string;
}

/**
 * Place within a relatively positioned container
 */
function BackgroundImage({
  url,
  className,
  style,
  ...props
}: Props & HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={url}
      {...props}
      className={`absolute w-full h-full bg-gray-500 object-cover bg-center ${className}`}
      style={{
        filter: "brightness(75%) contrast(95%)",
        zIndex: -1,
        ...style,
      }}
    />
  );
}

export default BackgroundImage;
