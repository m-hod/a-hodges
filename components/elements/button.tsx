import React, { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  variant?: "reverse";
  size?: "slim";
  loading?: boolean;
};

function Button({
  children,
  variant,
  size,
  loading,
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  const colorClasses = (() => {
    if (variant === "reverse")
      return "button-reverse border-white bg-transparent text-white";
    return "button border-gray-500 bg-white";
  })();
  const sizeClasses = (() => {
    if (size === "slim") return "h-8 p-0.5";
    return "h-12 p-2";
  })();
  return (
    <button
      {...rest}
      className={`px-10 flex justify-center items-center font-sans font-medium border-2 truncate ${sizeClasses} ${colorClasses} ${className}`}
    >
      {loading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
