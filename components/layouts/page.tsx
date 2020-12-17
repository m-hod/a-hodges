import React from "react";

function Page({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: {
    element: JSX.Element;
    height: number;
  };
  footer: {
    element: JSX.Element;
    height: number;
  };
}) {
  return (
    <div className="min-w-300">
      <header>{header.element}</header>
      <main
        style={{
          minHeight: `calc(100vh - ${header.height}px - ${footer.height}px)`,
        }}
      >
        {children}
      </main>
      <footer>{footer.element}</footer>
    </div>
  );
}

export default Page;
