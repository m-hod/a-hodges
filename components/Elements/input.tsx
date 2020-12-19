import React, { HTMLAttributes } from "react";

type Props = {
  variant?: "reverse";
  size?: "slim";
};

function Input({
  variant,
  size,
  ...props
}: Props & HTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  const colorClasses = (() => {
    if (variant === "reverse") return "border-white bg-transparent";
    return "border-gray-500 bg-white";
  })();
  const sizeClasses = (() => {
    if (size === "slim") return "h-8";
    return "h-12";
  })();
  return (
    <input
      {...rest}
      className={`p-2 font-sans border-2 ${colorClasses} ${sizeClasses} ${className}`}
    />
  );
}

export default Input;
