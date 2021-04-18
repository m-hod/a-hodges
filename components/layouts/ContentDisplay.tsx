import React from "react";

type Props = {
  left: JSX.Element;
  right: JSX.Element;
};

function ContentDisplay({ left, right }: Props) {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-24 h-auto md:h-screen-100 lg:h-screen-75 relative">
      <div className="flex justify-center lg:justify-end h-auto max-h-screen-header overflow-hidden">
        <div className="w-full max-w-lg">{left}</div>
      </div>
      <div className="flex justify-center lg:justify-start h-screen-75 lg:h-full overflow-hidden">
        <div className="w-full max-w-lg">{right}</div>
      </div>
    </section>
  );
}

export default ContentDisplay;
