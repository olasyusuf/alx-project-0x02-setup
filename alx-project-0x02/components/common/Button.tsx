import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base";

  const buttonClasses = `bg-blue-600 text-white ${sizeClasses} ${shape} hover:bg-blue-700 transition`;

  return (
    <button className={buttonClasses}>
    </button>
  );
};

export default Button;