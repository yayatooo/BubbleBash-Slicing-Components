import React from "react";

export default function Button({ children }) {
  return (
    <div className="text-center">
      <button className=" flex mx-auto py-4 px-6 bg-white text-black font-medium">
        {children}
        <img src="./arrow-right.svg" />
      </button>
    </div>
  );
}
