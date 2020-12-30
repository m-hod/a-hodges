import React from "react";

export default function Divider({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 h-auto">
      <div className="flex justify-center lg:justify-end h-full overflow-hidden">
        <div className="w-full max-w-lg">{left}</div>
      </div>
      <div className="flex justify-center lg:justify-start overflow-hidden">
        <div className="w-full max-w-lg">{right}</div>
      </div>
    </section>
  );
}
