import React from "react";
import Description from "./Description";
import HeadText from "./HeadText";

export default function Ratting({ tittle, desc }) {
  return (
    <div className="flex flex-col ">
      <HeadText>{tittle}</HeadText>
      <Description>{desc}</Description>
    </div>
  );
}
