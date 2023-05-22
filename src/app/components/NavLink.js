import React from "react";
import NavList from "./NavList";

export default function NavLink() {
  return (
    <div className="sm:hidden md:block">
      <ul className="flex text-white gap-6 font-sans text-lg">
        <NavList>Home</NavList>
        <NavList>Our Service</NavList>
        <NavList>Portofolio</NavList>
        <NavList>Testimonial</NavList>
        <NavList>Contact Us</NavList>
      </ul>
    </div>
  );
}
