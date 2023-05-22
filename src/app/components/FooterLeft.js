import React from "react";
import Description from "./Description";

export default function FooterLeft() {
  return (
    <div className="w-5/12 gap-y-12">
      <img src="./logoBlack.svg" />
      <Description className={`py-4`}>
        Introducing, We are Bubble Bash digital agency company with more than 6
        years of experience. We are committed to serve with all our heart
      </Description>
      <div className="flex gap-x-6">
        <img src="./facebookLogo.svg" />
        <img src="./TwitterLogo.svg" />
        <img src="./InstagramLogo.svg" />
        <img src="./LinkedInLogo.svg" />
      </div>
    </div>
  );
}
