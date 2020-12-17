import React, { HTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
}

function Iconbutton({
  children,
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <div>
      <button {...rest} className={`circle spin ${className}`}>
        {children}
      </button>
    </div>
  );
}

export default Iconbutton;
