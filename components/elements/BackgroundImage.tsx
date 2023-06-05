import React, { HTMLAttributes } from "react";

import Image from "./Image";

interface Props {
  imageId: string;
}

/**
 * Place within a relatively positioned container
 */
function BackgroundImage({
  imageId,
  className,
  style,
  ...props
}: Props & HTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      imageId={imageId}
      {...props}
      className={`absolute left-0 top-0 w-full h-full bg-gray-500 object-cover bg-center ${className}`}
      style={{
        filter: "brightness(75%) contrast(105%)",
        zIndex: -1,
        ...style,
      }}
    />
    // <img
    //   src={url}
    //   {...props}
    //   className={`absolute w-full h-full bg-gray-500 object-cover bg-center ${className}`}
    //   style={{
    //     filter: "brightness(75%) contrast(95%)",
    //     zIndex: -1,
    //     ...style,
    //   }}
    // />
  );
}

export default BackgroundImage;
