import React, { HTMLAttributes } from "react";

import { assetUrl } from "../../utils/constants";

export default function Image({
  imageId,
  className,
  style,
  ...props
}: { imageId: string } & HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={`${assetUrl}${imageId}`}
      {...props}
      className={`${className}`}
      style={{
        ...style,
      }}
    />
  );
}
