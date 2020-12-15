import React, { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
};

function Button({
  children,
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <button
      {...rest}
      className={`p-2 px-10 flex justify-center align-center font-sans font-medium border-2 border-gray-500 button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
