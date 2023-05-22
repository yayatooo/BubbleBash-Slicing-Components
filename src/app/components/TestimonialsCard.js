import React from "react";
import Description from "./Description";

export default function TestimonialsCard({ tittle, desc, img, name, role }) {
  return (
    <div className="w-80 p-4 border-solid border-2 border-black ">
      <h1 className="font-semibold text-xl">{tittle}</h1>
      <Description>{desc}</Description>
      <div className="flex mt-2 items-center">
        <img src={img} className="w-12 mr-4" />
        <div className="flex flex-col py-3">
          <h3>{name}</h3>
          <Description>{role}</Description>
        </div>
      </div>
    </div>
  );
}
