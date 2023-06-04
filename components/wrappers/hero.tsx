import BackgroundImage from "../elements/BackgroundImage";
import { Circle } from "react-feather";
import React from "react";

interface Props {
  children: React.ReactNode;
  headerHeight?: number;
  noMaxHeight?: boolean;
}

function Hero({ children, headerHeight, noMaxHeight }: Props) {
  return (
    <div
      className="relative flex w-full overflow-x-hidden"
      style={
        !noMaxHeight
          ? {
              height: `calc(100vh - ${headerHeight || 0}px)`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
}

export default Hero;
