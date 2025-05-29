import React from "react";

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-white hover:bg-gray-100 hover:text-black",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  ghost: "bg-transparent hover:bg-gray-100 hover:text-black",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

const Button = React.forwardRef(function Button(
  {
    variant = "default",
    size = "default",
    className = "",
    children,
    ...props
  },
  ref
) {
  const combinedClassName = [
    buttonBase,
    buttonVariants[variant] || buttonVariants.default,
    buttonSizes[size] || buttonSizes.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} className={combinedClassName} {...props}>
      {children}
    </button>
  );
});

export default  Button ;
