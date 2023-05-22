import React from "react";

export default function Definition({ children }) {
  return (
    <div>
      <p className="py-6 w-6/12 text-center mx-auto text-white font-extralight">
        {children}
      </p>
    </div>
  );
}
