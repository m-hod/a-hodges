import React, { useEffect, useState } from "react";

import BackgroundImage from "../elements/BackgroundImage";
import { Circle } from "react-feather";

interface Props {
  imageIds: string[];
  /** Apply a custom intervale for the image to change at */
  interval?: number;
}

/** Place within a relative wrapper */
function Carousel({ imageIds, interval }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(activeIndex < imageIds.length - 1 ? activeIndex + 1 : 0);
    }, interval || 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="absolute bottom-0 left-0 flex justify-center w-full p-4 sm:justify-end md:p-8">
        {imageIds.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
            }}
            className="m-1"
          >
            <Circle
              color="rgba(255,255,255,0.5)"
              fill={activeIndex === i ? "#FFF" : "transparent"}
              className="carousel-icon"
            />
          </button>
        ))}
      </div>
      {imageIds.map((id, i) => {
        const offset = (i - activeIndex) * 100;
        return (
          <BackgroundImage
            key={i}
            imageId={id}
            style={{
              transform: `translate(${offset}%)`,
              transition: "transform 0.5s ease-in",
            }}
          />
        );
      })}
    </>
  );
}

export default Carousel;
