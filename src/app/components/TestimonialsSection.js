import React from "react";
import Description from "./Description";
import HeadText from "./HeadText";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col px-28 py-12">
      <Description>Client Reviews</Description>
      <HeadText>What Our Happy Client Say About us</HeadText>
      <div className="flex flex-wrap py-14 justify-center gap-12">
        <TestimonialsCard
          tittle="Website My Hospital"
          desc="Very nice to work with Bubble Bash, a reliable and responsive team
            is very helpful"
          img="./Ellipse5.svg"
          name="Katty Clock"
          role="Ceo My Hosptal"
        />
        <TestimonialsCard
          tittle="Food & Beverages Corp Logo"
          desc="Really the best service we've ever gotten, really looking forward to the next project i hope can work again together"
          img="./Ellipse6.svg"
          name="John Robert"
          role="Ceo Food & Beverages Corp"
        />
        <TestimonialsCard
          tittle="Supermarket Mobile Apps"
          desc="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
          img="./Ellipse7.svg"
          name="Kareem"
          role="Ceo Supermarket Mobile Apps"
        />
      </div>
    </section>
  );
}
