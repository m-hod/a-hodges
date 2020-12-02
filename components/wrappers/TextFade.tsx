import React from "react";

function TextFade({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full">
      {children}
      <div className="absolute z-10 bg-gradient-to-b from-transparent to-white w-full h-full top-0" />
    </div>
  );
}

export default TextFade;
