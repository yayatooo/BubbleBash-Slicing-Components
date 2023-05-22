import React from "react";
import Button from "./Button";
import Definition from "./Definition";

export default function ContactUsSection() {
  return (
    <section className=" flex flex-col justify-center text-center mt-16">
      <div className="bg-green w-full py-14">
        <h1 className=" w-7/12 mx-auto text-5xl font-bold leading-tight text-white">
          Have a project idea and want to make it come true?
        </h1>
        <Definition>
          Please contact us and we will discuss about your project, don't forget
          we are always here for you
        </Definition>
        <Button>Contact Us</Button>
      </div>
    </section>
  );
}
