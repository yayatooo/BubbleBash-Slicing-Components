import React from "react";

export default function Description({ className, children }) {
  const addClassName = className ? `${className}` : "";
  return (
    <>
      <p className={`font-light text-gray-600 sm:text-sm mx-2 ${addClassName}`}>
        {children}
      </p>
    </>
  );
}
