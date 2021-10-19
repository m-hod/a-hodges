import BackgroundImage from "../elements/BackgroundImage";
import { Circle } from "react-feather";
import React from "react";

interface Props {
  children: React.ReactNode;
  headerHeight?: number;
}

function Hero({ children, headerHeight }: Props) {
  return (
    <div
      className="w-full relative flex overflow-x-hidden"
      style={{
        height: `calc(100vh - ${headerHeight || 0}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default Hero;
