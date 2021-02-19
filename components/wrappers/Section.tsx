import React from "react";
import clsx from "clsx";

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
      className={clsx(
        `p-8 md:p-12 flex justify-center`,
        options?.removeBottomPadding ? "pb-0" : "pb-8 md:pb-12"
      )}
    >
      <div className="w-full 2xl:max-w-screen-2xl">{children}</div>
    </section>
  );
}

export default Section;
