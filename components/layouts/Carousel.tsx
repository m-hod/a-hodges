import React, { useEffect, useState } from "react";
import { Circle } from "react-feather";
import BackgroundImage from "../elements/BackgroundImage";

interface Props {
  images: string[];
  interval?: number;
}

/** Place within a relative wrapper */
function Carousel({ images, interval }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(index < images.length - 1 ? index + 1 : 0);
    }, interval || 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full flex justify-center sm:justify-end p-8">
        {images.map((_image, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className="m-1"
          >
            <Circle
              color="rgba(255,255,255,0.5)"
              fill={index === i ? "#FFF" : "transparent"}
              className="carousel-icon"
            />
          </button>
        ))}
      </div>
      <BackgroundImage url={images[index]} />
    </>
  );
}

export default Carousel;
