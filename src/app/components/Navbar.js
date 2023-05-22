"use client";

import Banner from "./Banner";
import NavLink from "./NavLink";
import Ratting from "./Ratting";
import NavList from "./NavList";
import { useState } from "react";
import classNames from "classnames";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="h-[85rem] bg-white sm:h-[60rem] md:h-[75rem] 2xl:h-[100rem] ">
        <div>
          <div className="bg-green h-[55rem] sm:h-[40rem] xl:h-[50rem] 2xl:h-[57rem]">
            <nav className="w-full flex justify-between items-center px-12 py-4">
              <img src="./logo.svg" className="w-1.5/12" />
              <NavLink />
              <div className="md:hidden sm:block">
                <img src="./menu.svg" onClick={() => setOpen(true)} />
              </div>
            </nav>
            <Banner />
            <div>
              <img src="./bg-hero.svg" className="w-10/12 mx-auto my-12" />
            </div>
            <div className="w-8/12 flex mx-auto text-center justify-between">
              <Ratting tittle={"1.2K+"} desc={"Happy Clients"} />
              <Ratting tittle={"1.1K+"} desc={"WorlWide Clients"} />
              <Ratting tittle={"6+"} desc={"Years Experience"} />
              <Ratting tittle={"12+"} desc={"Award Winners"} />
            </div>
          </div>
        </div>
      </section>

      <div
        className={classNames(
          "fixed bg-white  z-10 w-full h-full top-0 md:hidden",
          open ? "right-0" : "-right-full"
        )}
      >
        <ul className="flex flex-col mt-14 text-black text-center gap-10 font-sans text-3xl">
          <NavList>Home</NavList>
          <NavList>Our Service</NavList>
          <NavList>Portofolio</NavList>
          <NavList>Testimonial</NavList>
          <NavList>Contact Us</NavList>
        </ul>
        <img
          src="./x.svg"
          className="absolute top-8 right-8"
          onClick={() => setOpen(false)}
        />
      </div>
    </>
  );
}

export default Navbar;
