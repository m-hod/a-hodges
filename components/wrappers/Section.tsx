import React from "react";

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6 md:p-12 flex justify-center">
      <div className="w-full xl:max-w-3/4 2xl:max-w-screen-2xl">{children}</div>
    </section>
  );
}

export default Section;
