import React from "react";
import { Circle } from "react-feather";
import BackgroundImage from "../Elements/BackgroundImage";

interface Props {
  children: React.ReactNode;
  headerHeight?: number;
}

function Hero({ children, headerHeight }: Props) {
  return (
    <div
      className="w-full relative flex"
      style={{
        height: `calc(100vh - ${headerHeight || 0}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default Hero;
