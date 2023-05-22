import React from "react";
import Description from "./Description";

export default function CardService({ image, title, desc }) {
  return (
    <div className="w-80 px-5 py-10 mx-9">
      <div className=" w-full h-full flex flex-col justify-center items-center text-center gap-2 px-6 py-8 bg-white">
        <img src={image} />
        <h1 className="font-semibold text-xl">{title}</h1>
        <Description>{desc}</Description>
      </div>
    </div>
  );
}
