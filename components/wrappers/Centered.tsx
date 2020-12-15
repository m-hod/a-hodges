import React from "react";

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center align-center flex-grow">{children}</div>
  );
}

export default Centered;
