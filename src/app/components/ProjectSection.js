import React from "react";
import Description from "./Description";
import HeadText from "./HeadText";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <>
      <section className="flex flex-col px-28 py-12">
        <Description>Our Portofolio's</Description>
        <HeadText>Recent Projects</HeadText>
        <div className="flex flex-wrap py-14 justify-center">
          <ProjectCard
            image="./Project1.svg"
            tittle="Website My Hospital"
            desc=" Create a hospital website with patient, doctor, and drug logistics
              features that help hospital operations"
          />
          <ProjectCard
            image="./Project2.svg"
            tittle="Food & Beverages Corp Logo"
            desc=" Create a logo for a food & beverage company, with emphasis on aesthetics and user requests"
          />
          <ProjectCard
            image="./Project3.svg"
            tittle="Supermarket Mobile Apps"
            desc=" Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features"
          />
        </div>
      </section>
    </>
  );
}
