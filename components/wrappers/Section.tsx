import React from "react";

type Options = {
  removeBottomPadding?: boolean;
};

function Section({
  children,
  id,
  options,
}: {
  children: React.ReactNode;
  id?: string;
  options?: Options;
}) {
  return (
    <section
      id={id}
      className={`section p-8 md:p-12 flex justify-center pb-0 md:pb-0`}
    >
      <div className="w-full 2xl:max-w-screen-2xl">{children}</div>
    </section>
  );
}

export default Section;
