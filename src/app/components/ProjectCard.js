import React from "react";
import Description from "./Description";

export default function ProjectCard({ image, tittle, desc }) {
  return (
    <div className=" lg:w-3/12 mx-6 sm:w-9/12 h-full flex flex-col justify-center items-center gap-2 px-6 py-8">
      <img src={image} />
      <h1 className="font-semibold text-xl">{tittle}</h1>
      <Description>{desc}</Description>
    </div>
  );
}
