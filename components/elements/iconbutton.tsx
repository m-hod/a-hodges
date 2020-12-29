import React, { HTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
  color?: "white" | "gray";
  size?: "small" | "medium" | "large";
}

function Iconbutton({
  children,
  color = "white",
  size = "medium",
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <div>
      <button
        {...rest}
        className={`circle-${size} circle-${color} ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Iconbutton;
