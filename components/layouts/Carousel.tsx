import React, { useEffect, useState } from "react";

import BackgroundImage from "../elements/BackgroundImage";
import { Circle } from "react-feather";
import { StrapiImage } from "../../utils/types";

interface Props {
  images: StrapiImage[];
  /** Apply a custom intervale for the image to change at */
  interval?: number;
}

/** Place within a relative wrapper */
function Carousel({ images, interval }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(activeIndex < images.length - 1 ? activeIndex + 1 : 0);
    }, interval || 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full flex justify-center sm:justify-end p-4 md:p-8">
        {images.map((_image, i) => (
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
      {images.map((_image, i) => {
        const offset = (i - activeIndex) * 100;
        return (
          <BackgroundImage
            key={i}
            thumb={images[i].formats.thumbnail.url}
            url={images[i].url}
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
