import React, { HTMLAttributes } from "react";

function Input(props: HTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`p-2 font-sans font-medium border-2 border-gray-500 ${className}`}
    />
  );
}

export default Input;
