import React from "react";
import Definition from "./Definition";
import Button from "./Button";

export default function Banner() {
  return (
    <>
      <section className="flex flex-col justify-center text-center mt-16 p-6 sm:mt-5">
        <h1 className="  font-bold leading-normal text-white sm:text-5xl w-10/12 mx-auto xl:text-6xl">
          Create Amazing Digital Product <br /> For Your Business
        </h1>
        <Definition>
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </Definition>
        <Button>Get Started</Button>
      </section>
    </>
  );
}
