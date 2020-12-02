import React from "react";

type Props = {
  left: JSX.Element;
  right: JSX.Element;
};

function ContentDisplay({ left, right }: Props) {
  return (
    <section className="p-12 grid grid-cols-1 md:grid-cols-2 gap-24 h-screen-header md:h-screen-75">
      <div className="flex justify-end h-full overflow-hidden">
        <div className="max-w-lg">{left}</div>
      </div>
      <div className="flex justify-start h-full overflow-hidden">
        <div className="max-w-lg">{right}</div>
      </div>
    </section>
  );
}

export default ContentDisplay;
