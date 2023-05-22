import React from "react";

export default function FooterLink({ children }) {
  return (
    <>
      <ul className="font-light text-gray-600 mt-2">
        <li className="mt-2">
          <a>{children}</a>
        </li>
      </ul>
    </>
  );
}
